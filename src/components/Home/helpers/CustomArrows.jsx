
const CustomNextArrow = (props) => {
   const { onClick } = props
   return (
      <div
         className="arrow next-arrow absolute bottom-[40px] right-2 z-20 h-7 w-[45px] rotate-90"
         onClick={onClick}
         style={{
            backgroundImage: "url(/image/locations_arrow.webp)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
         }}
      ></div>
   )
}

const CustomPrevArrow = (props) => {
   const { onClick } = props
   return (
      <div
         className="arrow prev-arrow absolute bottom-[40px] left-2 z-20 h-7 w-[45px] -rotate-90"
         onClick={onClick}
         style={{
            backgroundImage: "url(/image/locations_arrow.webp)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
         }}
      ></div>
   )
}

export { CustomNextArrow, CustomPrevArrow }

