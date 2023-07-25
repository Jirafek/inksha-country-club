import React from "react";

const CustomNextArrow = (props) => {
  const { onClick, isTop=false } = props;
  return (
    <div
      className="arrow next-arrow rotate-180 h-[50px] w-10 absolute top-[160px] right-2 z-20"
      onClick={onClick}
      style={!isTop ? { backgroundImage: "url(/image/custom_arrow_events.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } : 
      { top: '40px', right: '1.5rem', backgroundImage: "url(/image/custom_arrow_events.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
    ></div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick, isTop=false } = props;
  return (
    <div
      className="arrow prev-arrow h-[50px] w-10 absolute top-[160px] left-2 z-20"
      onClick={onClick}
      style={!isTop ? { backgroundImage: "url(/image/custom_arrow_events.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } : 
      { top: '40px', left: '1.5rem', backgroundImage: "url(/image/custom_arrow_events.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
    ></div>
  );
};

export { CustomNextArrow, CustomPrevArrow };