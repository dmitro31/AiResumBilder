import { FastifyInstance } from "fastify"
import OpenAI from "openai"
import { prisma } from "../../prisma"
import { authHook } from "../../hooks/auth.hook"
import { optionalAuthHook } from "../../hooks/auth.hook"

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
        contact: string
        about: string
        skills: string
        experience: string,
    }
}

export async function aiRoutes(app: FastifyInstance) {
    app.options("/ai", async (request, reply) => {
        return reply.send()
    })

    app.options("/aiGet", async (request, reply) => {
        return reply.send()
    })

    app.options("/aiGet/:id", async (request, reply) => {
        return reply.send()
    })

    app.options("/aiDelete/:id", async (request, reply) => {
        return reply.send()
    })

    app.post("/ai", {
        preHandler: [optionalAuthHook]
    }, async (request, reply) => {
        try {
            const user = request.user
            const body = request.body as AIRequest

            const prompt = `
Шаблон резюме: ${body.template}
PRO режим: ${body.isPro}

Ім'я: ${body.formData.name}
Посада: ${body.formData.position}
Контакти: ${body.formData.contact}
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
  "contact": "",
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
                temperature: 0.7
            })

            const content = response.choices?.[0]?.message?.content

            if (!content) {
                return reply.status(500).send({
                    message: "AI response error"
                })
            }

            const cleaned = content
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .trim()

            const parsed = JSON.parse(cleaned)

            const resume = await prisma.resume.create({
                data: {
                    name: body.formData.name,
                    position: body.formData.position,
                    contact: typeof parsed.contact === 'object'
                        ? JSON.stringify(parsed.contact)
                        : parsed.contact || body.formData.contact,
                    about: parsed.about,
                    skills: parsed.skills,
                    experience: parsed.experience,
                    template: body.template,
                    userId: user?.userId
                }
            })

            return reply.send(resume)
        } catch (error: any) {
            console.log(error)

            return reply.status(500).send({
                error: error.message
            })
        }
    })

    app.get("/aiGet", {
        preHandler: [optionalAuthHook]
    }, async (request, reply) => {
        try {
            const user = request.user

            const resumes = await prisma.resume.findMany({
                where: { userId: user?.userId },
                orderBy: {
                    createdAt: "desc"
                }
            })

            return reply.send({
                resumes
            })
        } catch (error: any) {
            return reply.status(500).send({
                error: error.message
            })
        }
    })

    app.get("/aiGet/:id", {
        preHandler: [optionalAuthHook]
    }, async (request, reply) => {
        try {
            const user = request.user

            const { id } = request.params as {
                id: string
            }

            const resume = await prisma.resume.findFirst({
                where: { id, userId: user?.userId }
            })

            if (!resume) {
                return reply.status(404).send({
                    message: "Resume not found"
                })
            }

            return reply.send(resume)
        } catch (error: any) {
            return reply.status(500).send({
                error: error.message
            })
        }
    })

    app.delete("/aiDelete/:id", {
        preHandler: [optionalAuthHook]
    }, async (request, reply) => {
        try {
            const user = request.user

            const { id } = request.params as {
                id: string
            }

            const resume = await prisma.resume.findFirst({
                where: { id, userId: user?.userId }
            })

            if (!resume) {
                return reply.status(404).send({
                    message: "Resume not found"
                })
            }

            await prisma.resume.delete({
                where: {
                    id
                }
            })

            return reply.send({
                success: true
            })
        } catch (error: any) {
            return reply.status(500).send({
                error: error.message
            })
        }
    })
}