// eslint-disable-next-line react/prop-types
const SingleWordButton = ({ children, className, onClick, style, href = "" }) => {
   return (
      <div>
         {href === "" ? <div
            style={style}
            onClick={onClick}
            className={`z-10 active:bg-slate-400 mt-5 text-md-
          min-h-[30px] text-center rounded-[100px]  cursor-pointer  px-4 duration-500 hover:opacity-80   ${className || ""} `}
         >
            {children}
            {/* <img src={arrow} alt="" /> */}
         </div> : <a
            style={style}
            href={href}
            className={`z-10 active:bg-slate-400 mt-5 text-md-
            min-h-[30px] text-center rounded-[100px] cursor-pointer px-4 duration-500 hover:opacity-80   ${className || ""} `}>
            {children}
            {/* <img src={arrow} alt="" /> */}
         </a>
         }
      </div>

   )
}

export default SingleWordButton
