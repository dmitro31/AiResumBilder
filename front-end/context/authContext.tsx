"use client"

import { createContext, useContext, useState, useEffect } from "react"

interface User {
    id: string
    name: string
    email: string
}

interface AuthContextType {
    user: User | null
    token: string | null
    refreshToken: string | null
    login: (token: string, refreshToken: string, user: User) => void
    logout: () => void
    isAuth: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<string | null>(null)
    const [refreshToken, setRefreshToken] = useState<string | null>(null)

    useEffect(() => {
        const savedToken = localStorage.getItem("token")
        const savedRefreshToken = localStorage.getItem("refreshToken")
        const savedUser = localStorage.getItem("user")

        if (savedToken && savedUser && savedUser !== "undefined") {
            try {
                setToken(savedToken)
                setRefreshToken(savedRefreshToken)
                setUser(JSON.parse(savedUser))
            } catch (error) {
                console.error("Failed to parse user from localStorage", error)
                localStorage.removeItem("user")
                localStorage.removeItem("token")
                localStorage.removeItem("refreshToken")
            }
        }
    }, [])

    const login = (token: string, refreshToken: string, user: User) => {
        if (!token || !user) return

        localStorage.setItem("token", token)
        localStorage.setItem("refreshToken", refreshToken)
        localStorage.setItem("user", JSON.stringify(user))
        setToken(token)
        setRefreshToken(refreshToken)
        setUser(user)
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("user")
        setToken(null)
        setRefreshToken(null)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, token, refreshToken, login, logout, isAuth: !!token }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("useAuth must be used within AuthProvider")
    return context
}