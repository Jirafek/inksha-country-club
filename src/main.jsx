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


function onRenderCallback(
   id, // уникальный идентификатор примечания для этого профилирования
   phase, // "mount" (если профилирование происходит во время монтирования) или "update" (если профилирование происходит во время обновления)
   actualDuration, // время, затраченное на рендеринг компонента
   baseDuration, // оценочное время, которое React считает необходимым для рендеринга компонента
   startTime, // когда React начал рендеринг этого компонента
   commitTime, // когда React зафиксировал результаты этого рендеринга
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

      window.location.href = "https://ikshacountryclub.com" + window.location.pathname
      console.log(window.location.pathname)

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
