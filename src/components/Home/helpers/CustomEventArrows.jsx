import React from "react";

const CustomNextArrow = (props) => {
  const { onClick, isTop=false, isBottom="" } = props;
  console.log(isBottom)
  return (
    <div
      className="arrow next-arrow rotate-180 h-[50px] w-10 absolute right-2 z-20"
      onClick={onClick}
      style={isTop ? { top: '40px', right: '1.5rem', backgroundImage: "url(/image/custom_arrow_events.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } : isBottom ? 
      { bottom: isBottom, backgroundImage: "url(/image/custom_arrow_events.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } :
      { backgroundImage: "url(/image/custom_arrow_events.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', top: '160px' }}
    ></div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick, isTop=false, isBottom="" } = props;
  return (
    <div
      className="arrow prev-arrow h-[50px] w-10 absolute left-2 z-20"
      onClick={onClick}
      style={isTop ? { top: '40px', right: '1.5rem', backgroundImage: "url(/image/custom_arrow_events.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } : isBottom ? 
      { bottom: isBottom, backgroundImage: "url(/image/custom_arrow_events.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } :
      { backgroundImage: "url(/image/custom_arrow_events.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', top: '160px' }}
    ></div>
  );
};

export { CustomNextArrow, CustomPrevArrow };