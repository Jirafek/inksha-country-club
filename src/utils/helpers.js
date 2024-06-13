import { useURLData } from "utils/URLData"

import russ from 'icons/events/russia.png'
import ny from 'icons/events/newyear.png'
import man from 'icons/events/man.png'
import butter from 'icons/events/butter.png'
import maj from 'icons/events/maj.png'
import mart from 'icons/events/mart.png'
import valen from 'icons/events/valen.webp'
import active from 'icons/events/active.webp'
import vypusk from 'icons/events/vypusk.png'
import halloween from 'icons/events/halloween.png'



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



export const GetCurrentHoliday = () => {
    const AllLandingsLogos = {
        newyear: {
            img: ny,
            link: "/New-Year"
        },
        man: {
            img: man,
            link: "/defender"
        },
        russia: {
            img: russ,
            link: "/russiaDay"
        },
        butter: {
            img: butter,
            link: "/butter"
        },
        maj: {
            img: maj,
            link: "/may"
        },
        mart: {
            img: mart,
            link: "/mart"
        },
        valen: {
            img: valen,
            link: "/valentine"
        },
        vypusk: {
            img: vypusk,
            link: "/graduation"
        },
        halloween: {
            img: halloween,
            link: "/halloween"
        },
        active: {
            img: active,
            link: "/active"
        }
    }

    function getCurrentHolidayName() {
        const today = new Date()

        const day = today.getDate()
        const month = today.getMonth() + 1 // Месяцы в JavaScript начинаются с 0

        const holidays = [
            { name: "newyear", start: "15-10", end: "02-01" },       // Новый год
            { name: "man", start: "20-01", end: "23-02" },           // День защитника Отечества
            { name: "russia", start: "12-05", end: "12-06" },        // День России
            { name: "butter", start: "09-03", end: "09-03" },        // Масленица (примерная дата)
            { name: "maj", start: "01-04", end: "01-05" },           // День весны и труда
            { name: "mart", start: "08-02", end: "08-03" },          // Международный женский день
            { name: "valen", start: "15-01", end: "14-02" },         // День святого Валентина
            { name: "vypusk", start: "15-05", end: "25-06" },        // Выпускной (примерная дата)
            { name: "halloween", start: "1-10", end: "31-10" }      // Хэллоуин
        ]

        const currentDate = `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}`
        const currentYear = today.getFullYear()

        // Функция для проверки, находится ли дата в диапазоне
        const isDateInRange = (start, end, current) => {
            const startDate = new Date(`${currentYear}-${start.slice(3, 5)}-${start.slice(0, 2)}`)
            const endDate = new Date(`${currentYear}-${end.slice(3, 5)}-${end.slice(0, 2)}`)
            const currentDate = new Date(`${currentYear}-${current.slice(3, 5)}-${current.slice(0, 2)}`)

            return currentDate >= startDate && currentDate <= endDate
        }

        for (const holiday of holidays) {
            if (isDateInRange(holiday.start, holiday.end, currentDate)) {
                return holiday.name
            }
        }

        return "active"
    }

    return AllLandingsLogos[getCurrentHolidayName()]
}