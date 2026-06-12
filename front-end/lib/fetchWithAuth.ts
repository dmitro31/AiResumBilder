import { API_URL } from "@/config/api"

const API_BASE_URL = API_URL

const getHeaders = () => {
  const token = localStorage.getItem('token')
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  }
}

const refreshAccessToken = async (): Promise<string | null> => {
  const refreshToken = localStorage.getItem('refreshToken')
  if (!refreshToken) return null

  const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  })

  if (!response.ok) {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
    return null
  }

  const data = await response.json()
  localStorage.setItem('token', data.accessToken)
  return data.accessToken
}

export const fetchWithAuth = async (url: string, options: RequestInit = {}): Promise<Response> => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers: { ...getHeaders(), ...options.headers },
  })

  if (response.status === 401) {
    const newToken = await refreshAccessToken()

    if (!newToken) {
      window.location.href = '/auth/login'
      return response
    }

    return fetch(`${API_BASE_URL}${url}`, {
      ...options,
      headers: {
        ...getHeaders(),
        Authorization: `Bearer ${newToken}`,
        ...(options.headers as Record<string, string>),
      },
    })
  }

  return response
}