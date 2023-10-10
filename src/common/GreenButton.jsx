// eslint-disable-next-line react/prop-types
const GreenButton = ({ children, className, onClick, style }) => {
   return (
      <div
         style={style}
         onClick={onClick}
         className={`border-1 montery z-10 flex
h-[40px] w-[180px] items-center
justify-center gap-1 rounded-[20px] border border-[#433E6A] bg-[#79E718] font-[700] duration-300 hover:bg-opacity-50 ${
            className || ""
         } `}
      >
         {children}
         {/* <img src={arrow} alt="" /> */}
      </div>
   );
};

export default GreenButton;
