import React from "react";

const CustomNextArrow = (props) => {
   const { onClick, isTop = false, isBottom = "" } = props;
   return (
      <div
         className=" arrow next-arrow absolute right-2 z-20 h-[43px] w-10 rotate-180"
         onClick={onClick}
         style={
            isTop
               ? {
                    top: "40px",
                    right: "1.5rem",
                    backgroundImage: "url(/image/custom_arrow_events.webp)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                 }
               : isBottom
               ? {
                    bottom: isBottom,
                    backgroundImage: "url(/image/custom_arrow_events.webp)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                 }
               : {
                    backgroundImage: "url(/image/custom_arrow_events.webp)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    top: "160px",
                 }
         }
      ></div>
   );
};

const CustomPrevArrow = (props) => {
   const { onClick, isTop = false, isBottom = "" } = props;
   return (
      <div
         className=" arrow prev-arrow absolute left-2 z-20 h-[43px] w-10"
         onClick={onClick}
         style={
            isTop
               ? {
                    top: "40px",
                    right: "1.5rem",
                    backgroundImage: "url(/image/custom_arrow_events.webp)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                 }
               : isBottom
               ? {
                    bottom: isBottom,
                    backgroundImage: "url(/image/custom_arrow_events.webp)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                 }
               : {
                    backgroundImage: "url(/image/custom_arrow_events.webp)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    top: "160px",
                 }
         }
      ></div>
   );
};

export { CustomNextArrow, CustomPrevArrow };
