import { domAnimation, LazyMotion } from "framer-motion"
import { Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { QueryParamProvider } from "use-query-params"
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6"
import App from "./App"
import "./fonts.css"
import "./fonts/Lato-Regular.ttf"
import "./fonts/MontserratAlternates-Regular.ttf"
import "./index.css"
import {db, fetchData} from '../firebase.js';
import {useURLData} from "utils/URLData";


function onRenderCallback(
   id, // уникальный идентификатор примечания для этого профилирования
   phase, // "mount" (если профилирование происходит во время монтирования) или "update" (если профилирование происходит во время обновления)
   actualDuration, // время, затраченное на рендеринг компонента
   baseDuration, // оценочное время, которое React считает необходимым для рендеринга компонента
   startTime, // когда React начал рендеринг этого компонента
   commitTime, // когда React з  афиксировал результаты этого рендеринга
   interactions // множество взаимодействий, связанных с этим рендерингом
) {
   // Здесь вы можете отправить данные профилирования аналитике или логгеру
   console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions)
}


ReactDOM.createRoot(document.getElementById("root")).render(
   // <Profiler id="app" onRender={onRenderCallback}>

   <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
         <LazyMotion features={domAnimation} strict>
            <Suspense
               fallback={
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                     {" "}
                     <img src="/image/download.gif" alt="" />{" "}
                  </div>
               }
            >
               <AppWithDelay />
            </Suspense>
         </LazyMotion>
      </QueryParamProvider>
   </BrowserRouter>
   // </Profiler>
)

function AppWithDelay() {
   const { updatePhoneContent } = useURLData();
   const groupID = -1002014846298;

   useEffect(() => {
      console.log('yep yep')

      fetchData(groupID, updatePhoneContent)
   }, [updatePhoneContent])

   const [windowWidth, setWindowWidth] = useState(window.innerWidth)

   const handleResize = () => {
      setWindowWidth(window.innerWidth)
   }

   useEffect(() => {
      // Установка лиснера при монтировании
      window.addEventListener("resize", handleResize)

      // Удаление лиснера при размонтировании
      return () => {
         window.removeEventListener("resize", handleResize)
      }
   }, [])

   // Выводим сообщение в консоль, если ширина экрана большк 420 пикселя
   if (windowWidth > 767) {
      switch (true) {
         case window.location.pathname.includes('/locations-about'):
            window.location.href = "https://ikshacountryclub.com/location/1"
            break

         case window.location.pathname.includes('/korp'):
            window.location.href = "https://ikshacountryclub.com/?korpOpen=1"
            break

         default:
            window.location.href = "https://ikshacountryclub.com" + window.location.hash + (window.location.pathname === '/' ? '' : window.location.pathname)
            break
      }

      // console.log(window.location.pathname)
      // console.log(window.location.pathname === '/')
      // window.location.href = "http://localhost:5174" + window.location.hash + (window.location.pathname === '/' ? '' : window.location.pathname)
      // console.log(window.location.pathname)
      // console.log(window.location.hash)


   }
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      setTimeout(() => {
         setIsLoading(false)
      }, 3000)
   }, [])

   return isLoading ? (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
         {" "}
         <img src="/image/download.gif" alt="" />{" "}
      </div>
   ) : (
      <App />
   )
}
