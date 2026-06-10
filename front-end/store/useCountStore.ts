import { create } from "zustand";
import { persist } from "zustand/middleware";

type CounterStore = {
    count: number
    isPro: boolean

    increment: () => void;
    reset: () => void

    canUse: boolean
}

export const useCounterStore = create<CounterStore>()(
    persist(
        (set,get) => ({
            count: 0,

            isPro: false,

            canUse: true,

            increment: () => {
                const { count , isPro } = get()

                if(isPro){
                    return
                }
                if(count >= 3){
                    set({
                        canUse: false
                    })

                    return
                }

                set({
                    count: count + 1,
                    canUse: count + 1 < 3
                })
            },

            reset: () => {
                set({
                    count: 0,
                    canUse: true
                })
            }
        }),
        {
            name: "counter-storage"
        }
    )
)

