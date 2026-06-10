import { fetchWithAuth } from '@/lib/fetchWithAuth'

export const getAllResumes = async () => {
  const response = await fetchWithAuth('/resume', { method: 'GET' })

  if (!response.ok) {
    throw new Error('Помилка при отриманні резюме')
  }

  return response.json()
}

export const loginUser = async () => {
  const response = await fetchWithAuth('/auth/me', { method: 'GET' })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(text)
  }

  return response.json()
}