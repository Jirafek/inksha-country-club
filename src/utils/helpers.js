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

export function GenerateRandom8Numbers() {
    let random16DigitNumber = ''
    for (let i = 0; i < 8; i++) {
        random16DigitNumber += Math.floor(Math.random() * 10)
    }
    return random16DigitNumber
}



export const getWALink = () => {

    const { utm_source } = useURLData()
    const waPhone = utm_source === 'yandex' ? '74995055067' : '74995055031'
    const message = 'Здравствуйте, меня интересует аренда домика' // Replace with your desired message
    const whatsappLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`


    return whatsappLink
}