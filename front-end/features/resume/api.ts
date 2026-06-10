import { fetchWithAuth } from "@/lib/fetchWithAuth"

export const getResumeById = async (id: string) => {
    const response = await fetchWithAuth(`/resume/${id}`)

    if (!response.ok) throw new Error('Resume not found')

    return response.json()
}