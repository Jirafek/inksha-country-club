import React from "react";

const V2 = () => {
    return <>
        <div className="map-wrapper">
            <figure className="map-figure">
                <img src="/image/shk.webp" alt="" className="map_image" />
            </figure>
            <div className="map-controls">
                {/* <svg className="map-controls-list" viewBox="0 0 2160 3840">
                </svg> */}
                <svg className="map-controls-list" viewBox="0 0 4320 7680">
                    <g data-position="1" className="map_button">
                        <path d="m 2181" />
                        <path d="m 2616.6065,3669.0253 187.148,-108.5921 185.9928,123.6101 -8.0866,55.4513 5.7761,155.9567 -38.1227,137.4729 -11.4258,-22.8884 -6.9434,-2.0422 -1.6338,-17.5628 -16.3375,-12.2531 -17.1543,1.6337 -3.676,2.8591 -17.9712,-20.0135 -14.2953,-2.4506 -17.5628,2.0422 -12.2531,7.3519 -7.3519,10.2109 -12.6615,-14.7037 -15.5207,-2.4507 -11.8446,2.4507 -12.2531,5.3096 -4.0844,11.8447 -13.07,-2.0422 -9.8025,5.3097 -4.4928,11.4363 -5.7181,3.2675 -9.8025,-3.676 4.4928,-19.605 -1.2253,-23.6893 -13.4784,-14.2953 -16.3375,-5.3097 -8.9856,5.7181 -10.6194,-13.4784 -19.1966,-9.8025 -20.8302,-1.6337 -17.1544,10.2109 -7.7603,7.3519 -12.2531,-7.7603 -22.0556,-5.3097 -24.9147,8.9856 -3.6759,-18.7881z" />
                    </g>
                    <g data-position="17" className="map_button">
                        <path d="m 2181" />
                        <path d="m 2841.0887,3526.4462 8.1687,-14.7038 31.0412,1.6338 41.6606,-40.0268 63.7162,6.535 17.1544,-13.8869 56.3643,3.2675 26.14,-26.14 73.5187,7.3519 35.9424,-35.1256 62.8994,1.6337 4.0843,48.1956 -13.07,9.8025 -5.7181,-17.1544 -26.14,35.1256 0.8169,22.8725h -14.7037l -2.4506,-18.7881 -36.7594,-1.6337 -2.4506,20.4218 -17.9712,-1.6337 1.6337,-16.3375 -6.535,-5.7181 -22.8725,24.5062 -0.8168,25.3231 -16.3375,0.8169v -20.4219l -40.8437,-2.4506 0.8168,22.0556h -14.7037l -1.6338,-21.2387 -12.2531,17.1543 1.6338,20.4219 -17.1544,2.4506 -0.8168,-17.9712 -36.7594,-1.6338 1.6338,20.4219 -17.9713,1.6337 -3.2675,-24.5062 -13.8868,11.4362 3.2675,23.6894 -22.8725,1.6337v -20.4218l -35.1256,-2.4506v 23.6893h -19.605l 0.8169,-22.8725z" />
                    </g>
                    <g data-position="39" className="map_button">
                        <path d="m 2181" />
                        <path d="m 2575.0181,3751.0469 14.296,0.7221 -46.2094,157.2563 1.9495,24.2599 -11.1914,14.8737 -21.3718,-2.8881 -25.9928,10.5415 -16.1733,25.4151 -2.9562,25.9493 -21.2387,26.8996 -6.9435,26.6057 4.9013,21.6471 20.4218,18.7881 -179.7123,-13.4784 -183.7967,-11.4362 -135.1927,-89.8562 50.6462,-244.7559 428.6548,5.5139 12.2196,-13.6748 29.6029,-1.5884 5.1986,-5.9206 30.3249,1.0108 5.3429,5.343 36.5343,4.9097z" />
                    </g>
                    <g data-position="5" className="map_button">
                        <path d="m 2181" />
                        <path d="m 2018.1949,3736.0289 426.2816,4.6209 9.5307,-11.5523 4.9098,-2.0217 25.4151,0.2888 6.6426,-5.7761 32.9242,0.8664 6.9314,6.065 33.5018,4.6209 12.4188,-55.4513 61.2274,-108.0144 60.6499,-76.8231 40.4332,-46.787 22.5271,-38.1228 -205.0542,-11.5523 -233.3574,-15.5957 -231.6245,-12.1299z" />
                    </g>
                    <g data-position="1" className="map_button">
                        <path d="m 2181" />
                        <path d="m 3533.8628,4476.5343 27.7257,-261.083 69.314,-88.9531v -28.8809l 36.9675,-11.5523v 30.0361l 307.2925,13.8628 8.0866,168.6643 -93.574,344.2599 -337.3285,-31.1913 -9.2419,-130.5416z" />
                    </g>
                    <g data-position="8" className="map_button">
                        <path d="m 2181" />
                        <path d="m 2181.083,2715.9567 48.5199,-159.4224 35.8123,-15.0181 -32.3466,-43.8989 28.8809,-11.5523 18.4837,5.7762 -17.3285,-57.7618 25.4152,-12.7076 28.8808,47.3647 2.3105,41.5884 45.0541,-12.7076 -8.0866,38.1228h 122.4549l -18.4838,-41.5885h 32.3466l 33.5018,-56.6065 31.1913,17.3286 -28.8808,56.6064 38.1227,-15.018 -12.7076,41.5884 212.5632,6.9315 58.917,19.6389 17.3285,58.917 -15.0181,177.9061 -56.6065,213.7185 -34.657,39.2779 -101.6606,1.1553 -347.7257,-15.0181 -127.3646,-18.4837 -32.0578,-42.7437 3.4657,-47.3646z" />
                    </g>
                </svg>
            </div>
        </div>
    </>;
}

export default V2;
