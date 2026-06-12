import { API_URL } from "@/config/api"

export const loginUser = async (email: string, password: string) => {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message || "Помилка при входу")
    }

    return data
}