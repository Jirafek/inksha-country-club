import React, { useState } from "react";
import InputMask from "react-input-mask";

function TellInput({ value, onChange, isValid }) {
   return (
      <div>
         <InputMask
            mask="+7 (999) 999-99-99"
            placeholder="Телефон"
            className={`w-full border-b-[1px] border-[#7C6F61] bg-transparent ${
               !isValid ? "text-red-500" : ""
            }`}
            name="phone"
            value={value}
            onChange={onChange}
         />
         {/* {!isValid && <p className="error-message">Введите 11 цифр</p>} */}
      </div>
   );
}

export default TellInput;
