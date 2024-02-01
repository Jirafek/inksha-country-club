// eslint-disable-next-line react/prop-types
const Button = ({ children, className, onClick, style }) => {
   return (
      <div
         style={style}
         onClick={onClick}
         className={`z-10 active:bg-slate-400 mt-10 flex text-md min-h-[30px] text-center  w-[80%] sm:w-[270px] cursor-pointer  items-center justify-center gap-1 rounded-[100px] px-4  font-bold duration-500 hover:opacity-80  md:h-[40px]  ${className || ""
            } `}
      >
         {children}
         {/* <img src={arrow} alt="" /> */}
      </div>
   )
}

export default Button
