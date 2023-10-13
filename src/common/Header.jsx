import menu from "./../assets/menu.png";
import close from "./../assets/close.png";

import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { opacity } from "../constants/motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const menuVars = {
   initial: {
      opacity: 0,
   },

   animate: {
      opacity: 1,
      transition: {
         duration: 0.5,
         staggerChildren: 0.35,
      },
   },

   exit: {
      opacity: 0,
      transition: {
         duration: 0.5, // Adjust the exit animation duration as needed
      },
   },
};

const navVars = {
   initial: {
      opacity: 0,
      // y: 50,
   },

   animate: {
      opacity: 1,
      // y: 0,
      transition: {
         duration: 0.5,
      },
   },

   exit: {
      opacity: 0,
      transition: {
         duration: 0.5, // Adjust the exit animation duration as needed
      },
   },
};

const links = [
   { title: "Программа", link: "Programa" },
   { title: "Тарифы", link: "Tariff" },
   { title: "Связаться со мной", link: "Form" },
];
// eslint-disable-next-line react/prop-types
const Header = ({ toggleMenu, isMenuOpen }) => {
   return (
      <div className="bg-darkViolet">
         <AnimatePresence>
            <div className="wrapper  ">
               {isMenuOpen && (
                  <div className="fixed inset-0 z-20 flex h-full w-full bg-slate-100 bg-opacity-60 md:hidden">
                     <motion.div
                        key="menu" // Make sure to specify a unique key
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed left-1/2 top-1/2 z-20 flex h-[40%] w-[70%] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-[5px] bg-violet p-5 duration-300"
                     >
                        <div
                           className="absolute right-2 top-2"
                           onClick={toggleMenu}
                        >
                           <img src={close} alt="" />
                        </div>
                        <ul className="gap-10 text-center text-grey">
                           {links.map((link, i) => {
                              return (
                                 <motion.li
                                    onClick={toggleMenu}
                                    className="druk cursor-pointer text-[25px]"
                                    variants={navVars}
                                    key={i}
                                 >
                                    <ScrollLink
                                       onClick={toggleMenu}
                                       to={link.link}
                                       smooth={true}
                                       duration={1000} // Длительность анимации скролла (в миллисекундах)
                                    >
                                       {link.title}
                                    </ScrollLink>
                                 </motion.li>
                              );
                           })}
                        </ul>
                     </motion.div>
                  </div>
               )}
               <Reveal duration={2} variants={opacity()}>
                  <div className="druk flex justify-between py-5">
                     <Link to="/">Икша Кантри Kлаб</Link>
                     <ul className="hidden gap-10 md:flex">
                        {links.map((link, i) => {
                           return (
                              <li key={i} className="cursor-pointer">
                                 <ScrollLink
                                    to={link.link}
                                    smooth={true}
                                    duration={1000} // Длительность анимации скролла (в миллисекундах)
                                 >
                                    {link.title}
                                 </ScrollLink>
                              </li>
                           );
                        })}
                     </ul>
                     <div onClick={toggleMenu} className="flex md:hidden">
                        <img src={menu} alt="" />
                     </div>
                  </div>
               </Reveal>
            </div>
         </AnimatePresence>
      </div>
   );
};

export default Header;
