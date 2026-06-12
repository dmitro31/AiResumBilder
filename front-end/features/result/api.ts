import { API_URL } from "@/config/api"

export const getAllResumes = async () => {
    const res = await fetch(`${API_URL}/resume`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
    })

    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.message)
    }

    return res.json()
}
