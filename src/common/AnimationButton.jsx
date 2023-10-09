// eslint-disable-next-line react/prop-types
const Button = ({ children, className, onClick, style }) => {
   return (
      <div
         style={style}
         onClick={onClick}
         className={`droid z-10 mt-10 flex h-[50px] w-[270px] cursor-pointer  items-center justify-center gap-1 rounded-[100px] px-4 text-small font-bold duration-300 hover:opacity-40 md:h-[75px]  ${
            className || ""
         } `}
      >
         {children}
         {/* <img src={arrow} alt="" /> */}
      </div>
   );
};

export default Button;
