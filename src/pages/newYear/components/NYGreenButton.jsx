/* eslint-disable react/prop-types */

import Button from 'common/Button';
const NYGreenButton = ({ children, style, onClick, className }) => {

   return (
      <Button onClick={onClick} style={style} className={`${className || ''} yaes w-[180px] 370p:w-[240px] font-semibold  h-[40px] md:text-[26px] md:min-w-[400px] text-NYcream md:h-[100px] bg-NYgreen`}>{children}</Button>
   )
}

export default NYGreenButton