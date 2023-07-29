import React from "react";

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="arrow next-arrow rotate-180 h-[37px] w-[43px] absolute top-[20px] right-2 z-20"
      onClick={onClick}
      style={ { backgroundImage: "url(/image/arrow_gallery.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
    ></div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="arrow prev-arrow h-[37px] w-[43px] absolute top-[20px] left-2 z-20"
      onClick={onClick}
      style={{ backgroundImage: "url(/image/arrow_gallery.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
    ></div>
  );
};

export { CustomNextArrow, CustomPrevArrow };