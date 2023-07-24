import React from "react";

// change TITLE

const EventsFromFireBase = () => {
    return (
        <section style={{ backgroundImage: 'url(/image/bg-eve.png)' }} className="min-h-[855px] back_settings relative">
            <div className="flex flex-col items-center"> {/* pt-[4.5rem]  */}
                <img src="/image/happy_title.png" alt="" />
            </div>
            <div className="absolute -bottom-[52px] w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="62" viewBox="0 0 390 62" fill="none">
                    <g filter="url(#filter0_d_1273_6018)">
                        <path d="M0.144531 0.324219H390.314V50.1611C236.788 6.91459 0.144531 31.705 0.144531 50.1611C0.144531 68.6173 0.144531 0.324219 0.144531 0.324219Z" fill="#EAAB7F" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1273_6018" x="-3.85547" y="0.324219" width="398.17" height="61.002" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1273_6018" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1273_6018" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    );
}

export default EventsFromFireBase;
