'use client'

import { useState } from 'react'
import { useResumeStore } from "@/store/useResumeStore"

export default function Download() {
    const [loading, setLoading] = useState(false)

    const { formData } = useResumeStore()

    const handleDownloadWord = async () => {
        setLoading(true)

        try {
            const {
                Document,
                Packer,
                Paragraph,
                HeadingLevel
            } = await import('docx')

            const doc = new Document({
                sections: [
                    {
                        properties: {},
                        children: [
                            new Paragraph({
                                text: formData.name || 'Resume',
                                heading: HeadingLevel.HEADING_1
                            }),

                            new Paragraph({
                                text: formData.position || '',
                                heading: HeadingLevel.HEADING_2
                            }),

                            new Paragraph({
                                text: 'About'
                            }),

                            new Paragraph({
                                text: formData.about || ''
                            }),

                            new Paragraph({
                                text: 'Skills'
                            }),

                            new Paragraph({
                                text: formData.skills || ''
                            }),

                            new Paragraph({
                                text: 'Experience'
                            }),

                            new Paragraph({
                                text: formData.experience || ''
                            })
                        ]
                    }
                ]
            })

            const handlePrint = () => {
                window.print()
            }

            const blob = await Packer.toBlob(doc)

            const url = URL.createObjectURL(blob)

            const link = document.createElement('a')

            link.href = url
            link.download = `${formData.name || 'Resume'}.docx`

            document.body.appendChild(link)

            link.click()

            document.body.removeChild(link)

            URL.revokeObjectURL(url)

        } catch (error) {
            console.error(error)
            alert('Помилка при завантаженні Word')
        } finally {
            setLoading(false)
        }
    }

    const handlePrint = () => {
        window.print()
    }

    return (
        <div className="space-y-3">
            <button
                onClick={handleDownloadWord}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
                {loading
                    ? 'Завантаження...'
                    : 'Завантажити Word'}
            </button>

            <button
                onClick={handlePrint}
                className="w-full bg-gray-900 hover:bg-black text-white py-3 rounded-xl font-semibold transition"
            >
                Друкувати
            </button>
        </div>
    )
}