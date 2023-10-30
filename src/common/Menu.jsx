import React from 'react'
import {motion} from 'framer-motion'
import close from "assets/close.png";

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

const Menu = ({toggleMenu, links, MenuClassName}) => {
  return (
   <div>


    <div
                     onClick={toggleMenu}
                     className="fixed inset-0 z-20 flex h-full w-full bg-slate-100 bg-opacity-60 md:hidden"
                  >
                     <motion.div
                        key="menu" // Make sure to specify a unique key
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className={`${MenuClassName || ''} fixed left-1/2 top-1/2 z-[400] flex h-[40%] w-[80%] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-[5px] p-5 duration-300`}
                     >
                        <div
                           className="absolute right-2 z-[2000] top-2"
                           onClick={toggleMenu}
                        >
                           <img   onClick={toggleMenu} src={close} alt="" />
                        </div>
                        <ul className="gap-10 text-center text-white">
                           {links?.map((link, i) => {
                              return (
                                 <motion.li
                                    onClick={toggleMenu}
                                    className=" cursor-pointer text-[25px]"
                                    variants={navVars}
                                    key={i}
                                 >
                                    <ScrollLink
                                       onClick={toggleMenu}
                                       to={link.link}
                                       smooth={true}
                                       className="underlineOnHoverHeader"
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
   </div>
  )
}

export default Menu