
export const getAllResumes = async () => {
    const res = await fetch("http://localhost:4000/resume", {
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
