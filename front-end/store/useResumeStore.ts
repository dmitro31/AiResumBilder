import { create } from "zustand"
import { persist } from "zustand/middleware"
import { API_URL } from "@/config/api"

type Experience = {
  position: string
  company: string
  duration: string
  responsibilities?: string[]
}

type AIResponse = {
  about: string
  skills: string[] | string
  experience: Experience[] | string
}

type FormData = {
  name: string
  position: string
  contact: string
  about: string
  skills: string
  experience: string
}

type ResumeStore = {
  template: string
  isPro: boolean
  formData: FormData
  loading: boolean

  setTemplate: (
    template: string
  ) => void

  togglePro: () => void

  updateField: (
    field: keyof FormData,
    value: string
  ) => void

  improveWithAI: () => Promise<boolean>
}

export const useResumeStore =
  create<ResumeStore>()(
    persist(
      (set, get) => ({
        template: "Minimal",

        isPro: false,

        loading: false,

        formData: {
          name: "",
          position: "",
          about: "",
          contact: "",
          skills: "",
          experience: ""
        },

        setTemplate: (
          template
        ) =>
          set({
            template
          }),

        togglePro: () =>
          set((state) => ({
            isPro:
              !state.isPro
          })),

        updateField: (
          field,
          value
        ) =>
          set((state) => ({
            formData: {
              ...state.formData,
              [field]:
                value
            }
          })),

        improveWithAI:
          async () => {
            try {
              set({
                loading: true
              })

              const savedToken =
                localStorage.getItem("token")

              if (!savedToken) {
                throw new Error(
                  "Токен не знайдено"
                )
              }

              let token: string =
                savedToken

              const refreshToken =
                localStorage.getItem(
                  "refreshToken"
                )

              if (
                !token
              ) {
                throw new Error(
                  "Токен не знайдено"
                )
              }

              const makeRequest =
                async (
                  accessToken: string
                ) => {
                  return fetch(
                    `${API_URL}/ai`,
                    {
                      method:
                        "POST",

                      headers:
                      {
                        "Content-Type":
                          "application/json",

                        Authorization: `Bearer ${accessToken}`
                      },

                      body: JSON.stringify(
                        {
                          template:
                            get()
                              .template,

                          isPro:
                            get()
                              .isPro,

                          formData:
                            get()
                              .formData
                        }
                      )
                    }
                  )
                }

              let response =
                await makeRequest(
                  token
                )

              if (
                response.status ===
                401
              ) {
                if (
                  !refreshToken
                ) {
                  throw new Error(
                    "Refresh token not found"
                  )
                }

                const refreshResponse =
                  await fetch(
                    `${API_URL}/auth/refresh`,
                    {
                      method:
                        "POST",

                      headers:
                      {
                        "Content-Type":
                          "application/json"
                      },

                      body: JSON.stringify(
                        {
                          refreshToken
                        }
                      )
                    }
                  )

                if (
                  !refreshResponse.ok
                ) {
                  throw new Error(
                    "Session expired"
                  )
                }

                const refreshData =
                  await refreshResponse.json()

                token =
                  refreshData.accessToken

                localStorage.setItem(
                  "token",
                  token
                )

                response =
                  await makeRequest(
                    token
                  )
              }

              if (
                !response.ok
              ) {
                throw new Error(
                  "AI generation failed"
                )
              }

              const data: AIResponse =
                await response.json()

              set(
                (
                  state
                ) => ({
                  formData:
                  {
                    ...state.formData,

                    about:
                      data.about ||
                      "",

                    skills:
                      Array.isArray(
                        data.skills
                      )
                        ? data.skills.join(
                          ", "
                        )
                        : String(
                          data.skills ||
                          ""
                        ),

                    experience:
                      Array.isArray(
                        data.experience
                      )
                        ? data.experience
                          .map(
                            (
                              exp
                            ) =>
                              `${exp.position} — ${exp.company} (${exp.duration})\n${exp.responsibilities?.join(
                                "\n"
                              ) ||
                              ""
                              }`
                          )
                          .join(
                            "\n\n"
                          )
                        : String(
                          data.experience ||
                          ""
                        )
                  }
                })
              )

              return true
            } catch (
            error
            ) {
              console.log(
                error
              )
              return false
            } finally {
              set({
                loading: false
              })
            }
          }
      }),
      {
        name:
          "resume-storage",

        version: 2,

        migrate: (
          persistedState: any
        ) => {
          const state =
            persistedState?.state

          if (
            !state
          ) {
            return persistedState
          }

          const formData =
            state.formData ||
            {}

          return {
            ...state,

            formData:
            {
              ...formData,

              skills:
                Array.isArray(
                  formData.skills
                )
                  ? formData.skills.join(
                    ", "
                  )
                  : String(
                    formData.skills ||
                    ""
                  ),

              experience:
                Array.isArray(
                  formData.experience
                )
                  ? formData.experience.join(
                    "\n"
                  )
                  : String(
                    formData.experience ||
                    ""
                  )
            }
          }
        }
      }
    )
  )