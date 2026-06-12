"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getOne = exports.getAll = exports.create = void 0;
const prisma_1 = require("../../prisma");
const create = async (req, reply) => {
    const user = req.user;
    const body = req.body;
    const resume = await prisma_1.prisma.resume.create({
        data: {
            ...body,
            userId: user.userId
        }
    });
    return reply.send(resume);
};
exports.create = create;
const getAll = async (req, reply) => {
    const user = req.user;
    const resumes = await prisma_1.prisma.resume.findMany({
        where: {
            userId: user.userId
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    return reply.send(resumes);
};
exports.getAll = getAll;
const getOne = async (req, reply) => {
    const user = req.user;
    const { id } = req.params;
    const resume = await prisma_1.prisma.resume.findFirst({
        where: {
            id,
            userId: user.userId
        }
    });
    if (!resume) {
        return reply.status(404).send({
            message: "Resume not found"
        });
    }
    return reply.send(resume);
};
exports.getOne = getOne;
const update = async (req, reply) => {
    const user = req.user;
    const { id } = req.params;
    const body = req.body;
    const resume = await prisma_1.prisma.resume.findFirst({
        where: {
            id,
            userId: user.userId
        }
    });
    if (!resume) {
        return reply.status(404).send({
            message: "Resume not found"
        });
    }
    const updated = await prisma_1.prisma.resume.update({
        where: { id },
        data: body
    });
    return reply.send(updated);
};
exports.update = update;
const remove = async (req, reply) => {
    const user = req.user;
    const { id } = req.params;
    const resume = await prisma_1.prisma.resume.findFirst({
        where: {
            id,
            userId: user.userId
        }
    });
    if (!resume) {
        return reply.status(404).send({
            message: "Resume not found"
        });
    }
    await prisma_1.prisma.resume.delete({
        where: { id }
    });
    return reply.send({
        success: true
    });
};
exports.remove = remove;
//# sourceMappingURL=resume.controller.js.map