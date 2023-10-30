import menu from "./../assets/menu.png";


import { AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { opacity } from "../constants/motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


import Menu from 'common/Menu'


// eslint-disable-next-line react/prop-types
const Header = ({ toggleMenu, isMenuOpen, className,MenuClassName, links }) => {

   return (
      <div className={` ${className} `}>
         <AnimatePresence>
            <div className="wrapper  ">
               {isMenuOpen && (
                  <Menu toggleMenu={toggleMenu} MenuClassName={MenuClassName} links={links}/>
               )}
               <Reveal duration={2} variants={opacity()}>
                  <div className=" flex justify-between py-5">
                     <Link to="/">Икша Кантри Kлаб</Link>
                     <ul className="hidden gap-10 md:flex">
                        {links.map((link, i) => {
                           return (
                              <li key={i} className="cursor-pointer">
                                 <ScrollLink
                                    to={link.link}
                                    smooth={true}
                                    className="underlineOnHoverHeader"
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
