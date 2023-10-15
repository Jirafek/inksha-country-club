import React, { useReducer, Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import routes from "../utils/Home/routes";
import { v4 as uuidv4 } from "uuid";
import FixedFuter from "../components/Home/FixedFuter";
import Welcome from "../components/Home/Welcome";
import Map from "../components/Home/Map/Map";
import About from "../components/Home/About";
import Happy from "../components/Home/Happy";
import Gallery from "../components/Home/Gallery";
import Eat from "../components/Home/Eat";
import Locations from "../components/Home/Locations";
import Events from "../components/Home/Events";
import EventsFromFireBase from "../components/Home/EventsFromFireBase";
import Help from "../components/Home/Help";
import Calculate from "../components/Home/Calculate";
import Spec from "../components/Home/Spec";
import Dates from "../components/Home/Dates";
import Responce from "../components/Home/Responce";
import Blog from "../components/Home/Blog";
import YandexMap from "../components/Home/YandexMap";
import Footer from "../components/Home/Footer";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { updateData, URLData } from "../utils/URLData";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Home = () => {
   useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      console.log(urlParams.get("utm_source"));
      updateData(
         URLData.utm_source
            ? URLData.utm_source
            : urlParams.get("utm_source") || "Сайт",
         URLData.utm_campaign
            ? URLData.utm_campaign
            : urlParams.get("utm_campaign") || "",
         URLData.utm_content
            ? URLData.utm_content
            : urlParams.get("utm_content") || ""
      );
   }, []);

   const parallaxActivate = (document) => {
      const sections = Array.from(document.querySelectorAll(".section"));
      gsap.registerPlugin(ScrollTrigger);
      const timeline = gsap.timeline();

      for (const i in sections) {
         // if(i !== 0)
         timeline.fromTo(sections[i], { y: "100vh" }, { y: "0" });
      }

      ScrollTrigger.create({
         animation: timeline,
         trigger: "#root",
         start: "top top",
         invalidateOnRefresh: true,
         end: "bottom",
         scrub: 1,
         pin: true,
      });
   };
   const [locationState, setLocationState] = useState(false);

   const [isVisible, setIsVisible] = useState(false);
   const [sidebarOpen, toggle] = useReducer((s) => !s, false);

   useEffect(() => {
      const handleScroll = () => {
         const scrollPosition = window.scrollY;
         const triggerPosition = 1000; // define the scroll position where you want to show the block

         setIsVisible(scrollPosition > triggerPosition);
      };

      window.addEventListener("scroll", handleScroll);

      // parallaxActivate(document);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const [burgerState, setBurgerState] = useState(false);

   function handleBurgerClick() {
      setBurgerState(!burgerState);
   }

   function closeBurger() {
      setBurgerState(false);
   }

   return (
      <>
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
                                    display: `${
                                       sidebarOpen ? "block" : "none"
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
                                          <Link
                                             to={el.link}
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
                                          </Link>
                                       </li>
                                    );
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
               <Map />
               <About />
               <Happy />
               <Gallery />
               <Eat />
               <Locations />
               <Events />
               <EventsFromFireBase />
               <Help />
               <Calculate />
               <Spec />
               <Dates />
               <Responce />
               <Blog />
               <YandexMap />
               <Footer />
               {/* <div className="h-[60px]"></div> */}
               {isVisible && <FixedFuter link="#book" needRotate={false} />}
            </div>
         </Fragment>
      </>
   );
};

export default Home;
