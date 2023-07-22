import React from "react";
import { v4 as uuidv4 } from 'uuid';

const NumberedItem = ({ arrayData }) => {
    return (
        <div className="flex justify-center gap-[10px]">
            {
                arrayData.map((el, i) => {
                    return (
                        <div key={uuidv4()} className="flex flex-col gap-[6px]">
                            <div
                                style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', backgroundColor: 'linear-gradient(217deg, rgba(255, 252, 252, 0.60) 0%, rgba(255, 252, 252, 0.30) 100%)' }}
                                className="h-[100px] border-[#FFF] border-[2px] w-[100px] flex justify-center items-center montaga text-[#000] font-normal text-[40px] rounded-full backdrop-blur-sm"
                            >
                                {el.number}
                            </div>
                            <div
                                style={{ border: '0.7px solid rgba(0, 0, 0, 0.60)' }}
                                className="rounded-[5px] bg-[#E1D0B8] backdrop-blur-[3.5px] monterey text-[12px] text-center font-normal text-[#000]"
                            >
                                {el.text}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default NumberedItem;
