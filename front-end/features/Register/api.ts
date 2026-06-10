export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  console.log({
    name,
    email,
    password,
  })

  const res = await fetch("http://localhost:4000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message)
  }

  return data
}