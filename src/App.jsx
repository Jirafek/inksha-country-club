import loadable from '@loadable/component'
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { text_living, text_privicy } from "./utils/Home/PrivicyTextHelper"
import { useURLData } from "./utils/URLData"
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

function App() {
    const { updateData, utm_campaign, utm_content, utm_source } = useURLData()


    const isCookieOn = Cookies.get('cookies_on')
    const [isCookieOpen, setIsCookieOpen] = useState(isCookieOn === undefined ? true : isCookieOn !== 'true')

    useEffect(() => {
        setUrlParams()
    }, [])

    const setUrlParams = (isCoockieOnRight = undefined) => {
        const isCookieOn = Cookies.get('cookies_on')

        if (isCoockieOnRight === undefined && isCookieOn === undefined) {
            return
        }

        if (isCoockieOnRight === false) {
            return
        }

        const urlParams = new URLSearchParams(window.location.search)

        const cookieData = {
            utm_source: Cookies.get('utm_source'),
            utm_campaign: Cookies.get('utm_campaign'),
            utm_content: Cookies.get('utm_content'),
        }

        const UTMSource = urlParams.get("utm_source") ? (urlParams.get("utm_source").toLowerCase().includes('vk') ? 'vkontakte' : urlParams.get("utm_source")) : '';

        const settedData = [
            cookieData.utm_source !== undefined ? cookieData.utm_source : utm_source
                ? utm_source
                : UTMSource || "Сайт",

            cookieData.utm_campaign !== undefined ? cookieData.utm_campaign : utm_campaign
                ? utm_campaign
                : urlParams.get("utm_campaign") || "",

            cookieData.utm_content !== undefined ? cookieData.utm_content : utm_content
                ? utm_content
                : urlParams.get("utm_content") || ""
        ]

        console.log(settedData)

        updateData(
            ...settedData
        )

        if (cookieData.utm_source === undefined && UTMSource !== null) {
            Cookies.set('utm_source', UTMSource, { expires: Infinity })
        }
        if (cookieData.utm_campaign === undefined && urlParams.get("utm_campaign") !== null) {
            Cookies.set('utm_campaign', urlParams.get("utm_campaign"), { expires: Infinity })
        }
        if (cookieData.utm_content === undefined && urlParams.get("utm_content") !== null) {
            Cookies.set('utm_content', urlParams.get("utm_content"), { expires: Infinity })
        }
    }

    return (
        <div className='relative'>
            <Cookie isCookieOpen={isCookieOpen} setIsCookieOpen={setIsCookieOpen} callBack={setUrlParams} />

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
                    path="/live-rules"
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
    )
}

export default App
