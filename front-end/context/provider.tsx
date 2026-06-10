"use client"

import { AuthProvider } from "@/context/authContext"

export default function Providers({ children }: { children: React.ReactNode }) {
    return <AuthProvider>{children}</AuthProvider>
}