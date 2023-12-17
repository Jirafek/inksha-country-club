import loadable from '@loadable/component'
// import call from 'images/call.webp'
import messageIcon from 'icons/messageIcon.webp'
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import HelpPopup from './common/popup/help/HelpPopup'
import { text_living, text_privicy } from "./utils/Home/PrivicyTextHelper"
import { useURLData } from "./utils/URLData"
import call from 'images/call_big.webp'
import { AnimatePresence } from 'framer-motion'
import FadeIn from './common/animation/FadeIn'
import Cookies from 'js-cookie'

// import NYLanding from "pages/newYear/NYLanding"
// import Cookie from './common/Cookie'
// import BlogAll from "./pages/BlogAll"
// import Booking from "./pages/Booking"
// import DatesChooser from "./pages/DatesChooser"
// import FAQ from "./pages/FAQ"
// import FormCalculate from "./pages/FormCalculate"
// import GalleryAll from "./pages/GalleryAll"
// import HappySlider from "./pages/HappySlider"
// import Helloween from "./pages/Helloween"
// import Home from "./pages/Home"
// import Keitering from "./pages/Keitering"
// import KorpSlider from "./pages/KorpSlider"
// import Korporativy from "./pages/Korporativy"
// import LocationsSlider from "./pages/LocationsSlider"
// import NotFound from "./pages/NotFound"
// import Popup from "./pages/Popup"
// import Rules from "./pages/Rules"
// import Thanks from "./pages/Thanks"
// import KorpLanding from "./pages/korpLanding/KorpLanding"

const Home = loadable(() => import("pages/Home"))
const Cookie = loadable(() => import('./common/Cookie'))
const NYLanding = loadable(() => import("pages/newYear/NYLanding"))
const Booking = loadable(() => import("pages/Booking"))
const Keitering = loadable(() => import("pages/Keitering"))
const DatesChooser = loadable(() => import("pages/DatesChooser"))
const GalleryAll = loadable(() => import("pages/GalleryAll"))
const HappySlider = loadable(() => import("pages/HappySlider"))
const Rules = loadable(() => import("pages/Rules"))
const NotFound = loadable(() => import("pages/NotFound"))
const Korporativy = loadable(() => import("pages/Korporativy"))
const KorpSlider = loadable(() => import("pages/KorpSlider"))
const FAQ = loadable(() => import("pages/FAQ"))
const LocationsSlider = loadable(() => import("pages/LocationsSlider"))
const BlogAll = loadable(() => import("pages/BlogAll"))
const FormCalculate = loadable(() => import("pages/FormCalculate"))
const Thanks = loadable(() => import("pages/Thanks"))
const Popup = loadable(() => import("pages/Popup"))
const Helloween = loadable(() => import("pages/Helloween"))
const KorpLanding = loadable(() => import("./pages/korpLanding/KorpLanding"))

export default function App() {


    const { updateData, utm_campaign, utm_content, utm_source } = useURLData()
    const isCookieOn = localStorage.getItem('cookies_on')
    const [isCookieOpen, setIsCookieOpen] = useState(isCookieOn === undefined ? true : isCookieOn !== 'true')
    const [isHelpPopupOpen, setIsHelpPopupOpen] = useState(false)
    const [timer, setTimer] = useState(false)
    const [isHelpButtonActive, setIsHelpButtonActive] = useState(false)
    const [isTimerOn, setIsTimerOn] = useState(!Cookies.get('isTimerOn'))


    // console.log(!Cookies.get('isTimerOn'))

    if (isTimerOn) {
        useEffect(() => {
            setTimer(
                setTimeout(() => {
                    setIsHelpPopupOpen(true)
                    // setIsHelpButtonActive(true)
                }, 40000))
        }, [])
    }


    useEffect(() => {

        // Check if the URL contains a fragment identifier
        let time = setTimeout(() => {
            clearTimeout(time)
            if (window.location.hash) {
                const welcome = document.getElementById('welcome')
                // Extract the fragment identifier (e.g., "locations")
                // const fragmentId = window.location.hash.substring(1)
                const fragmentId = window.location.hash.substring(1).split('/')[0]

                console.log(fragmentId)
                // Find the element with the corresponding ID
                const targetElement = document.getElementById(fragmentId)

                // If the element is found, scroll to it
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' })
                } else {
                    welcome.scrollIntoView({ behavior: 'smooth' })
                }
            }
        }, 2000)
    }, [window.location.hash])






    useEffect(() => {
        setUrlParams()
    }, [])

    // '' - true
    // 'adsa' - false
    const handleButtonClick = () => {

        clearTimeout(timer)
        setIsHelpPopupOpen(!isHelpPopupOpen)

    }


    const setUrlParams = (isCoockieOnRight = undefined) => {

        const isCookieOn = localStorage.getItem('cookies_on')
        const urlParams = new URLSearchParams(window.location.search)

        console.log(isCookieOn)

        const urlParamsData = [
            utm_source ? utm_source : urlParams.get("utm_source"),
            utm_campaign ? utm_campaign : urlParams.get("utm_campaign"),
            utm_content ? utm_content : urlParams.get("utm_content"),
        ]

        updateData(
            ...urlParamsData
        )

        if (isCoockieOnRight === undefined && isCookieOn === undefined) {
            return
        }

        if (isCoockieOnRight === false) {
            return
        }

        const cookieData = {
            utm_source: localStorage.getItem('utm_source'),
            utm_campaign: localStorage.getItem('utm_campaign'),
            utm_content: localStorage.getItem('utm_content'),
        }

        const UTMSource = urlParams.get("utm_source") ? (urlParams.get("utm_source").toLowerCase().includes('vk') ? 'vkontakte' : urlParams.get("utm_source")) : ''

        const settedData = [
            cookieData.utm_source !== undefined && cookieData.utm_source ? cookieData.utm_source : utm_source
                ? utm_source
                : UTMSource || "Сайт",

            cookieData.utm_campaign !== undefined && cookieData.utm_campaign ? cookieData.utm_campaign : utm_campaign
                ? utm_campaign
                : urlParams.get("utm_campaign") || "",

            cookieData.utm_content !== undefined && cookieData.utm_content ? cookieData.utm_content : utm_content
                ? utm_content
                : urlParams.get("utm_content") || ""
        ]

        console.log(settedData)


        updateData(
            ...settedData
        )

        if ((cookieData.utm_source === undefined || !cookieData.utm_source) && UTMSource !== null) {
            localStorage.setItem('utm_source', UTMSource)
        }
        if ((cookieData.utm_campaign === undefined || !cookieData.utm_campaign) && urlParams.get("utm_campaign") !== null) {
            localStorage.setItem('utm_campaign', urlParams.get("utm_campaign"))
        }
        if ((cookieData.utm_content === undefined || !cookieData.utm_content) && urlParams.get("utm_content") !== null) {
            localStorage.setItem('utm_content', urlParams.get("utm_content"))
        }
    }

    return (
        <AnimatePresence mode='wait'>
            <div className='relative'>

                <Cookie isCookieOpen={isCookieOpen} setIsCookieOpen={setIsCookieOpen} callBack={setUrlParams} />
                {isHelpPopupOpen &&
                    <HelpPopup setIsHelpButtonActive={setIsHelpButtonActive} isHelpPopupOpen={isHelpPopupOpen} setIsHelpPopupOpen={setIsHelpPopupOpen} />
                }



                {/* лучше не пробовать читать это говно))))) */}
                {
                    isTimerOn ? (isHelpButtonActive ? <FadeIn onClick={handleButtonClick} className='fixed z-[4000] bottom-[190px] right-[5px]'>
                        <img className='w-[50px]  h-[50px]' src={messageIcon} alt="" />
                    </FadeIn> : <div></div>)
                        : <FadeIn onClick={handleButtonClick} className='fixed z-[4000] bottom-[190px] right-[5px]'>
                            <img className='w-[50px]  h-[50px]' src={messageIcon} alt="" />
                        </FadeIn>
                }





                <div className='fixed bottom-[130px] z-[4000]  h-[60px] w-[60px] right-0'>
                    {
                        utm_source === 'yandex' ?
                            <a className='' href="tel:+74995055067">
                                <img className='w-full h-full' src={call} alt="Икша Кантри Клаб" />
                            </a>
                            : utm_source === 'vkontakte' ?
                                <a className='' href="tel:+74995055087">
                                    <img className='w-full h-full' src={call} alt="Икша Кантри Клаб" />
                                </a>
                                :
                                <a className='' href="tel:+74995055031">
                                    <img className='w-full h-full' src={call} alt="Икша Кантри Клаб" />
                                </a>
                    }
                </div>


                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/keitering" element={<Keitering />} />
                    <Route path="/choose-date" element={<DatesChooser />} />
                    <Route path="/gallery-all" element={<GalleryAll />} />
                    <Route path="/choose-happy" element={<HappySlider />} />
                    <Route
                        path="/data-privicy"
                        element={
                            <Rules
                                title="ПОЛИТИКА ДАННЫХ"
                                isNeedButton={false}
                                isNeedPadding={false}
                                text={text_living}
                            />
                        }
                    />
                    <Route
                        path="/rules"
                        element={
                            <Rules
                                title="ПРАВИЛА ПРОЖИВАНИЯ ГОСТЕЙ В ИКША КАНТРИ КЛАБ"
                                isNeedButton={true}
                                isNeedPadding={true}
                                text={text_privicy}
                            />
                        }
                    />
                    <Route path="/korp" element={<KorpSlider />} />
                    <Route path="/korp/book" element={<Korporativy />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/locations-about" element={<LocationsSlider />} />
                    <Route path="/blog-all" element={<BlogAll />} />
                    <Route path="/form/:amount" element={<FormCalculate />} />
                    <Route path="/halloween" element={<Helloween />} />
                    <Route path="/popup" element={<Popup />} />
                    <Route path="/thanks" element={<Thanks />} />
                    <Route path="/korp-landing" element={<KorpLanding />} />
                    <Route path="/New-Year" element={<NYLanding />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </AnimatePresence>
    )


}
