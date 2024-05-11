// eslint-disable-next-line react/prop-types
const Button = ({ children, className, onClick, style, href = "" }) => {
   return (
      <div>
         {href === "" ? <div
            style={style}
            onClick={onClick}
            className={`z-10 active:bg-slate-400 mt-10 flex text-md-
          min-h-[30px] text-center  cursor-pointer  items-center justify-center gap-1 rounded-[100px] px-4  font-bold duration-500 hover:opacity-80   ${className || ""
               } `}
         >
            {children}
            {/* <img src={arrow} alt="" /> */}
         </div> : <a
            style={style}
            href={href}
            className={`z-10 active:bg-slate-400 mt-10 flex text-md-
            min-h-[30px] text-center  cursor-pointer  items-center justify-center gap-1 rounded-[100px] px-4  font-bold duration-500 hover:opacity-80   ${className || ""
               } `}
         >
            {children}
            {/* <img src={arrow} alt="" /> */}
         </a>
         }
      </div>

   )
}

export default Button
