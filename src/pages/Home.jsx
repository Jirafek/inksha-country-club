import { Dialog, Transition } from "@headlessui/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { Fragment, useEffect, useReducer, useState } from "react"
import { Helmet } from "react-helmet"
import { isItWinterNow } from "utils/helpers"
import { v4 as uuidv4 } from "uuid"
// import About from "../components/Home/About"
// import Blog from "../components/Home/Blog"
import routes from "../utils/Home/routes"


import loadable from '@loadable/component'

const Welcome = loadable(() => import("../components/Home/Welcome"))
const YandexMap = loadable(() => import("../components/Home/YandexMap"))
const Calculate = loadable(() => import("../components/Home/Calculate"))
const Dates = loadable(() => import("../components/Home/Dates"))
const FixedFuter = loadable(() => import("../components/Home/FixedFuter"))
const Events = loadable(() => import("../components/Home/Events"))
const EventsFromFireBase = loadable(() => import("../components/Home/EventsFromFireBase"))
const Eat = loadable(() => import("../components/Home/Eat"))
const Footer = loadable(() => import("../components/Home/Footer"))
const Happy = loadable(() => import("../components/Home/Happy"))
const Spec = loadable(() => import("../components/Home/Spec"))
const Responce = loadable(() => import("../components/Home/Responce"))
const Gallery = loadable(() => import("../components/Home/Gallery"))
const Locations = loadable(() => import("../components/Home/locations/Locations"))
const Help = loadable(() => import("../components/Home/Help"))
const About = loadable(() => import("../components/Home/About"))
const Blog = loadable(() => import("../components/Home/Blog"))
const Map = loadable(() => import("../components/Home/Map/Map"))
const Home = () => {



   const parallaxActivate = (document) => {
      const sections = Array.from(document.querySelectorAll(".section"))
      gsap.registerPlugin(ScrollTrigger)
      const timeline = gsap.timeline()

      for (const i in sections) {
         // if(i !== 0)
         timeline.fromTo(sections[i], { y: "100vh" }, { y: "0" })
      }

      ScrollTrigger.create({
         animation: timeline,
         trigger: "#root",
         start: "top top",
         invalidateOnRefresh: true,
         end: "bottom",
         scrub: 1,
         pin: true,
      })
   }
   const [locationState, setLocationState] = useState(false)

   const [isVisible, setIsVisible] = useState(false)
   const [sidebarOpen, toggle] = useReducer((s) => !s, false)

   useEffect(() => {
      const handleScroll = () => {
         const scrollPosition = window.scrollY
         const triggerPosition = 1000 // define the scroll position where you want to show the block

         setIsVisible(scrollPosition > triggerPosition)
      }

      window.addEventListener("scroll", handleScroll)

      // parallaxActivate(document);

      return () => {
         window.removeEventListener("scroll", handleScroll)
      }
   }, [])

   const [burgerState, setBurgerState] = useState(false)

   function handleBurgerClick() {
      setBurgerState(!burgerState)
   }

   function closeBurger() {
      setBurgerState(false)
   }

   // function onRenderCallback(
   //    id, // уникальный идентификатор примечания для этого профилирования
   //    phase, // "mount" (если профилирование происходит во время монтирования) или "update" (если профилирование происходит во время обновления)
   //    actualDuration, // время, затраченное на рендеринг компонента
   //    baseDuration, // оценочное время, которое React считает необходимым для рендеринга компонента
   //    startTime, // когда React начал рендеринг этого компонента
   //    commitTime, // когда React зафиксировал результаты этого рендеринга
   //    interactions // множество взаимодействий, связанных с этим рендерингом
   // ) {
   //    // Здесь вы можете отправить данные профилирования аналитике или логгеру
   //    console.log(id, phase, 'actual ', actualDuration, '///', 'base ' + baseDuration, startTime, commitTime, interactions)
   // }

   return (
      <>
         {/* <Profiler id="home" onRender={onRenderCallback}> */}
         <Helmet>
            <title>
               Загородный клуб Икша Кантри Клаб - Отдых в Подмосковье на берегу
               Икшинского водохранилища.
            </title>
            <meta
               name="description"
               content="Загородный клуб Икша Кантри Клаб - Рыбалка, Баня и СПА, водные виды спорта. Приезжайте отдохнуть на берегу Икшинского водохранилища
            и убедитесь сами.  Уютные домики, Шашлыки, красивые закаты. Выбирайте свой незабываемый отдых недалеко от Москвы"
            />
            <meta
               name="title"
               content="Загородный клуб Икша Кантри Клаб -Отдых в подмосковье, Рыбалка, Баня и СПА, водные виды спорта на Икшинском водохранилище."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
         корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>
         <Fragment>
            <div
               id='welcome'
               style={{ display: `${locationState ? "none" : "block"}` }}
               className="sections-container relative"
            >
               <Transition.Root as={Fragment} show={sidebarOpen}>
                  <Dialog
                     as="div"
                     className="fixed inset-0 z-[2000]"
                     onClose={toggle}
                  >
                     <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                     >
                        <div
                           style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                           className="absolute inset-0 h-screen w-full overflow-y-auto"
                        >
                           <nav className="flex h-full w-full flex-col items-center justify-center">
                              <button
                                 className="outline-none"
                                 style={{
                                    display: `${sidebarOpen ? "block" : "none"
                                       }`,
                                 }}
                                 onClick={toggle}
                              >
                                 <picture>
                                    <source
                                       srcSet="/avif/close_icon.avif 1x"
                                       type="image/avif"
                                    />
                                    <img
                                       className="fixed right-[2px] top-[2px] z-[2001] w-[45px]"
                                       src="/image/close_icon.webp"
                                       alt="Иконка закрытия"
                                    />
                                 </picture>
                              </button>
                              <ul
                                 className={`flex w-[305px] flex-col gap-[10px] rounded-[20px] bg-[#FFEFE4] py-[24px] pl-[21px]`}
                              >
                                 {routes.map((el, i) => {
                                    return (
                                       <li key={uuidv4()}>
                                          <a
                                             // to={el.link}
                                             href={el.link}
                                             onClick={toggle}
                                             className="flex gap-[1px] outline-none"
                                          >
                                             <p className="monterey">
                                                {el.text}
                                             </p>
                                             {el.icon && (
                                                <img
                                                   src={el.icon}
                                                   alt="Иконка пункта меню"
                                                />
                                             )}
                                          </a>
                                       </li>
                                    )
                                 })}
                              </ul>
                           </nav>
                        </div>
                     </Transition.Child>
                  </Dialog>
               </Transition.Root>
               <button
                  className="fixed left-3 top-8 z-[2001] cursor-pointer outline-none"
                  onClick={toggle}
               >
                  <picture>
                     <source srcSet="/avif/burger.avif 1x" type="image/avif" />
                     <img
                        style={{ display: `${sidebarOpen ? "none" : "block"}` }}
                        src="/image/burger.webp"
                        alt="Иконка меню"
                     />
                  </picture>
               </button>

               <h1 className="visually__hidden">
                  Загородный клуб Икша Кантри Клаб - Отдых в Подмосковье на
                  берегу Икшинского водохранилища
               </h1>

               <Welcome />
               <About />
               <Map />
               <Happy />
               <Gallery />
               <Eat />
               <Locations />
               <Events />
               <EventsFromFireBase />
               <Help />
               <Calculate />
               {!isItWinterNow() && <Spec />}
               <Dates />
               <Responce />
               <Blog />
               <YandexMap />
               <Footer />
               {/* <div className="h-[60px]"></div> */}
               {isVisible && <FixedFuter link="#book" needRotate={false} />}
            </div>
         </Fragment>
         {/* </Profiler> */}
      </>
   )
}

export default Home
