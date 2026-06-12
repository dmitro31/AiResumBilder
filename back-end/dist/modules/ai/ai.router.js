"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aiRoutes = aiRoutes;
const openai_1 = __importDefault(require("openai"));
const prisma_1 = require("../../prisma");
const auth_hook_1 = require("../../hooks/auth.hook");
const openai = new openai_1.default({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
});
async function aiRoutes(app) {
    app.options("/ai", async (request, reply) => {
        return reply.send();
    });
    app.options("/aiGet", async (request, reply) => {
        return reply.send();
    });
    app.options("/aiGet/:id", async (request, reply) => {
        return reply.send();
    });
    app.options("/aiDelete/:id", async (request, reply) => {
        return reply.send();
    });
    app.post("/ai", {
        preHandler: [auth_hook_1.optionalAuthHook]
    }, async (request, reply) => {
        try {
            const user = request.user;
            const body = request.body;
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
`;
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
            });
            const content = response.choices?.[0]?.message?.content;
            if (!content) {
                return reply.status(500).send({
                    message: "AI response error"
                });
            }
            const cleaned = content
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .trim();
            const parsed = JSON.parse(cleaned);
            const resume = await prisma_1.prisma.resume.create({
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
            });
            return reply.send(resume);
        }
        catch (error) {
            console.log(error);
            return reply.status(500).send({
                error: error.message
            });
        }
    });
    app.get("/aiGet", {
        preHandler: [auth_hook_1.optionalAuthHook]
    }, async (request, reply) => {
        try {
            const user = request.user;
            const resumes = await prisma_1.prisma.resume.findMany({
                where: { userId: user?.userId },
                orderBy: {
                    createdAt: "desc"
                }
            });
            return reply.send({
                resumes
            });
        }
        catch (error) {
            return reply.status(500).send({
                error: error.message
            });
        }
    });
    app.get("/aiGet/:id", {
        preHandler: [auth_hook_1.optionalAuthHook]
    }, async (request, reply) => {
        try {
            const user = request.user;
            const { id } = request.params;
            const resume = await prisma_1.prisma.resume.findFirst({
                where: { id, userId: user?.userId }
            });
            if (!resume) {
                return reply.status(404).send({
                    message: "Resume not found"
                });
            }
            return reply.send(resume);
        }
        catch (error) {
            return reply.status(500).send({
                error: error.message
            });
        }
    });
    app.delete("/aiDelete/:id", {
        preHandler: [auth_hook_1.optionalAuthHook]
    }, async (request, reply) => {
        try {
            const user = request.user;
            const { id } = request.params;
            const resume = await prisma_1.prisma.resume.findFirst({
                where: { id, userId: user?.userId }
            });
            if (!resume) {
                return reply.status(404).send({
                    message: "Resume not found"
                });
            }
            await prisma_1.prisma.resume.delete({
                where: {
                    id
                }
            });
            return reply.send({
                success: true
            });
        }
        catch (error) {
            return reply.status(500).send({
                error: error.message
            });
        }
    });
}
//# sourceMappingURL=ai.router.js.map