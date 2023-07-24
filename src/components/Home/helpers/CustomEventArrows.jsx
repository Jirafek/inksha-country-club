import React from "react";

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="arrow next-arrow rotate-180 h-[50px] w-10 absolute top-[200px] right-2 z-20"
      onClick={onClick}
      style={{ backgroundImage: "url(/image/custom_arrow_events.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
    ></div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="arrow prev-arrow h-[50px] w-10 absolute top-[200px] left-2 z-20"
      onClick={onClick}
      style={{ backgroundImage: "url(/image/custom_arrow_events.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
    ></div>
  );
};

export { CustomNextArrow, CustomPrevArrow };