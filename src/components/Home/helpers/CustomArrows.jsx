import React from "react";

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="arrow next-arrow rotate-90 h-7 w-[45px] absolute bottom-[40px] right-2 z-20"
      onClick={onClick}
      style={{ backgroundImage: "url(/image/locations_arrow.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
    ></div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="arrow prev-arrow -rotate-90 h-7 w-[45px] absolute bottom-[40px] left-2 z-20"
      onClick={onClick}
      style={{ backgroundImage: "url(/image/locations_arrow.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
    ></div>
  );
};

export { CustomNextArrow, CustomPrevArrow };