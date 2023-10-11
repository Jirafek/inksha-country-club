import React from "react";
import Select from "react-select";
const SelectComponent = ({
   value,
   options,
   placeholder,
   onChange,
   style,
   className,
}) => {
   return (
      <Select
         style={style}
         className={` rounded-[10px] text-start font-[600] text-[#7C6F61] ${
            className || ""
         }`}
         placeholder={placeholder}
         options={options}
         value={value} // Устанавливаем выбранное значение
         onChange={onChange} // Передаем обработчик события
      />
   );
};

export default SelectComponent;
