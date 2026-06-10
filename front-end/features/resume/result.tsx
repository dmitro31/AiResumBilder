'use client'

import { getResumeById } from './api'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { templatesMap } from '@/lib/templatesMap'

interface Resume {
    id: string
    title: string
    template: keyof typeof templatesMap
    name: string
    position: string
    about: string
    contact: string
    skills: string[]
    experience: string[]
}

export default function ResultResume() {
    const { id } = useParams()

    const [resume, setResume] = useState<Resume | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const data = await getResumeById(id as string)
                setResume(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        if (id) {
            fetchResume()
        }
    }, [id])

    if (loading) {
        return <div>Loading...</div>
    }

    if (!resume) {
        return <div>Resume not found</div>
    }

    const TemplateComponent = templatesMap[resume.template]

    if (!TemplateComponent) {
        return <div>Template not found</div>
    }

    const parseJson = (value: unknown): string[] => {
        if (Array.isArray(value)) {
            return value.map((item) =>
                typeof item === 'object' ? JSON.stringify(item) : String(item)
            )
        }
        if (typeof value === 'string') {
            try {
                const parsed = JSON.parse(value)
                return Array.isArray(parsed)
                    ? parsed.map((item) =>
                        typeof item === 'object' ? JSON.stringify(item) : String(item)
                    )
                    : [parsed]
            } catch {
                return [value]
            }
        }
        return []
    }

    const formatContact = (value: unknown): string => {
    if (typeof value === 'string') {
        try {
            const parsed = JSON.parse(value)
            if (typeof parsed === 'object') {
                return Object.entries(parsed).map(([k, v]) => `${k}: ${v}`).join(' | ')
            }
            return parsed
        } catch {
            return value
        }
    }
    if (typeof value === 'object' && value !== null) {
        return Object.entries(value).map(([k, v]) => `${k}: ${v}`).join(' | ')
    }
    return String(value)
}

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <TemplateComponent
                name={resume.name}
                position={resume.position}
                about={resume.about}
                contact={formatContact(resume.contact)}
                skills={parseJson(resume.skills)}
                experience={parseJson(resume.experience)}
            />
        </div>
    )
}