import { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "../../prisma"

export const create = async (
    req: FastifyRequest,
    reply: FastifyReply
) => {
    const user = req.user

    const body = req.body as {
        name: string
        position: string
        about: string
        contact: string
        skills: string[]
        experience: string[]
        template: string
        isPro: boolean
    }

    const resume = await prisma.resume.create({
        data: {
            ...body,
            userId: user.userId
        }
    })

    return reply.send(resume)
}

export const getAll = async (
    req: FastifyRequest,
    reply: FastifyReply
) => {
    const user = req.user

    const resumes = await prisma.resume.findMany({
        where: {
            userId: user.userId
        },
        orderBy: {
            createdAt: "desc"
        }
    })

    return reply.send(resumes)
}

export const getOne = async (
    req: FastifyRequest,
    reply: FastifyReply
) => {
    const user = req.user

    const { id } = req.params as { id: string }

    const resume = await prisma.resume.findFirst({
        where: {
            id,
            userId: user.userId
        }
    })

    if (!resume) {
        return reply.status(404).send({
            message: "Resume not found"
        })
    }

    return reply.send(resume)
}

export const update = async (
    req: FastifyRequest,
    reply: FastifyReply
) => {
    const user = req.user

    const { id } = req.params as { id: string }

    const body = req.body as {
        name: string
        position: string
        about: string
        contact: string
        skills: string[]
        experience: string[]
        template: string
        isPro: string
    }

    const resume = await prisma.resume.findFirst({
        where: {
            id,
            userId: user.userId
        }
    })

    if (!resume) {
        return reply.status(404).send({
            message: "Resume not found"
        })
    }

    const updated = await prisma.resume.update({
        where: { id },
        data: body
    })

    return reply.send(updated)
}

export const remove = async (
    req: FastifyRequest,
    reply: FastifyReply
) => {
    const user = req.user

    const { id } = req.params as { id: string }

    const resume = await prisma.resume.findFirst({
        where: {
            id,
            userId: user.userId
        }
    })

    if (!resume) {
        return reply.status(404).send({
            message: "Resume not found"
        })
    }

    await prisma.resume.delete({
        where: { id }
    })

    return reply.send({
        success: true
    })
}