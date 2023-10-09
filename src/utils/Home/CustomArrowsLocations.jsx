import React from "react";

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="arrow next-arrow rotate-180 h-[50px] w-[50px] absolute top-[10rem] right-2 z-20"
      onClick={onClick}
      style={ { backgroundImage: "url(/image/slider_locations.webp)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
    ></div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="arrow prev-arrow h-[50px] w-[50px] absolute top-[10rem] left-2 z-20"
      onClick={onClick}
      style={{ backgroundImage: "url(/image/slider_locations.webp)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
    ></div>
  );
};

export { CustomNextArrow, CustomPrevArrow };