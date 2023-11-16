/* eslint-disable react/prop-types */

import Button from 'common/Button';
const NYCreamButton = ({ children, onClick, className }) => {

   return (
      <Button onClick={onClick} className={`${className || ''} yaes w-[180px] 370p:w-[240px] font-semibold   text-[20px ] md:text-[26px] h-[40px] md:min-w-[400px] text-black md:h-[100px] bg-NYcream`}>{children}</Button>
   )
}

export default NYCreamButton