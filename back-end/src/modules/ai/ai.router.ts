import { FastifyInstance } from "fastify"
import OpenAI from "openai"
import { prisma } from "../../prisma"

const openai = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
})

type AIRequest = {
    template: string
    isPro: boolean
    formData: {
        name: string
        position: string
        about: string
        skills: string
        experience: string
    }
}

export async function aiRoutes(app: FastifyInstance) {
    app.post("/ai", async (request, reply) => {
        try {
            const body = request.body as AIRequest

            const prompt = `
Шаблон резюме: ${body.template}
PRO режим: ${body.isPro}

Ім'я: ${body.formData.name}
Посада: ${body.formData.position}
Навички: ${body.formData.skills}
Досвід: ${body.formData.experience}
Про себе: ${body.formData.about}

Покращи резюме професійно.

Правила:
- сучасний стиль
- професійний tone
- без води
- сильні формулювання
- гарна структура
- коротко і читабельно

Поверни JSON:

{
  "about": "",
  "skills": "",
  "experience": ""
}
`

            const response = await openai.chat.completions.create({
                model: "openai/gpt-oss-120b:free",
                messages: [
                    {
                        role: "system",
                        content: "Ти професійний AI для покращення резюме."
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                temperature: 0.7,
            })

            const content = response.choices?.[0]?.message?.content

            if (!content) {
                return reply.status(500).send({ message: "AI response error" })
            }

            const cleaned = content.replace(/```json|```/g, "").trim()
            const parsed = JSON.parse(cleaned)

            const resume = await prisma.resume.create({
                data: {
                    name: body.formData.name,
                    position: body.formData.position,
                    template: body.template,
                    about: parsed.about,
                    skills: parsed.skills,
                    experience: parsed.experience,
                }
            })

            return reply.send(resume)

        } catch (error: any) {
            console.log(error)
            return reply.status(500).send({ error: error.message })
        }
    })
}