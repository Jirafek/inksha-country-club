import { useURLData } from "utils/URLData"


export const
    getMonth = () => (new Date()).getMonth(),
    isItWinterNow = () => {
        const currentMonth = getMonth()

        if (
            currentMonth === 10 ||
            currentMonth === 11 ||
            currentMonth === 0 ||
            currentMonth === 1 
        ) return '_winter'

        return ''
    }

export const getPhoneNumber = () => {
    const { utm_source } = useURLData()

    const phoneNumber = utm_source === "yandex"
        ? "+7(499) 505-50-67"
        : utm_source === "vkontakte"
            ? "+7(499) 505-50-87"
            : "+74995055031"

    return phoneNumber
}
