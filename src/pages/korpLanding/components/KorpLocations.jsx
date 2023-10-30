import loc1 from "images/korpLanding/locations/003.webp";
import loc2 from "images/korpLanding/locations/001.webp";
import loc3 from "images/korpLanding/locations/002.webp";
import loc4 from "images/korpLanding/locations/004.webp";
import longarrow from "icons/longarrow.png";
import brownarrow from "icons/brownarrow.png";
import arrow from "icons/arrow.png";
import Button from "common/Button";
import { Link } from "react-router-dom";

// const LocationsBlocks = () => {
//    return (
//       <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
//          <div className="flex gap-[10px] md:gap-[30px] md:max-h-[216px] max-w-[500px] md:max-w-[580px] rounded-[19px] bg-korpPrimary">
//             <img
//                className="w-[100px] sm:w-[130px] md:w-auto md:h-auto"
//                src={locations[0].img}
//                alt=""
//             />
//             <div className="flex flex-col justify-between py-5">
//                <div className="text-md font-bold text-brown">
//                   {locations[0].title}
//                </div>
//                <div className="flex items-center gap-5 text-sm font-bold text-white">
//                   <div className="flex flex-col gap-5">
//                      <div>{locations[0].people}</div>
//                      <div>{locations[0].price}</div>
//                   </div>
//                   <img
//                      className="w-7 md:w-[120px] pr-1"
//                      src={longarrow}
//                      alt=""
//                   />
//                </div>
//             </div>
//          </div>

//          <div className="flex gap-[10px] md:gap-[30px] md:max-h-[216px] max-w-[500px] md:max-w-[580px] rounded-[19px] bg-korpPrimary">
//             <img
//                className="w-[100px] sm:w-[130px] md:w-auto md:h-auto"
//                src={locations[1].img}
//                alt=""
//             />
//             <div className="flex flex-col justify-between py-5">
//                <div className="text-md font-bold text-brown">
//                   {locations[1].title}
//                </div>
//                <div className="flex items-center gap-5 text-sm font-bold text-white">
//                   <div className="flex flex-col gap-5">
//                      <div>{locations[1].people}</div>
//                      <div>{locations[1].price}</div>
//                   </div>
//                   <img
//                      className="w-7 md:w-[120px] pr-1"
//                      src={longarrow}
//                      alt=""
//                   />
//                </div>
//             </div>
//          </div>

//          <div className="flex gap-[10px] md:gap-[30px] md:max-h-[216px] max-w-[500px] md:max-w-[580px] rounded-[19px] bg-korpPrimary">
//             <img
//                className="w-[100px] sm:w-[130px] md:w-auto md:h-auto"
//                src={locations[2].img}
//                alt=""
//             />
//             <div className="flex flex-col justify-between py-5">
//                <div className="text-md font-bold text-brown">
//                   {locations[2].title}
//                </div>
//                <div className="flex items-center gap-5 text-sm font-bold text-white">
//                   <div className="flex flex-col gap-5">
//                      <div>{locations[2].people}</div>
//                      <div>{locations[2].price}</div>
//                   </div>
//                   <img
//                      className="w-7 md:w-[120px] pr-1"
//                      src={longarrow}
//                      alt=""
//                   />
//                </div>
//             </div>
//          </div>

//          <div className="flex gap-[10px] md:gap-[30px] md:max-h-[216px] max-w-[500px] md:max-w-[580px] rounded-[19px] bg-korpPrimary">
//             <img
//                className="w-[100px] sm:w-[130px] md:w-auto md:h-auto"
//                src={locations[3].img}
//                alt=""
//             />
//             <div className="flex flex-col justify-between py-5">
//                <div className="text-md font-bold text-brown">
//                   {locations[3].title}
//                </div>
//                <div className="flex items-center gap-5 text-sm font-bold text-white">
//                   <div className="flex flex-col gap-5">
//                      <div>{locations[3].people}</div>
//                      <div>{locations[3].price}</div>
//                   </div>
//                   <img
//                      className="w-7 md:w-[120px] pr-1"
//                      src={longarrow}
//                      alt=""
//                   />
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };

const locations = [
   {
      title: "ЛЕСНАЯ РЕЗИДЕНЦИЯ",
      people: "До 30 чел",
      price: "от 15 000 руб",
      img: loc1,
      link: '/locations-about',
   },
   {
      title: "КОТТЕДЖ",
      people: "До 30 чел",
      price: "от 15 000 руб",
      img: loc2,
      link: '/locations-about',
   },
   {
      title: "ШАЛЕ",
      people: "До 30 чел",
      price: "от 15 000 руб",
      img: loc3,
      link: '/locations-about',
   },
   {
      title: "ОЛИМПИЙСКАЯ ДЕРЕВНЯ",
      people: "До 30 чел",
      price: "от 15 000 руб",
      img: loc4,
      link: '/locations-about',
   },
];
const KorpLocations = () => {
   return (
      <div id="locations" className="location ">
         <div className="wrapper py-[10vh]">
            <h1 className="text-center text-lg">Локации</h1>
            <h2 className="text-center font-bold text-36px mb-10">
               У нас есть локации{" "}
               <span className="text-brown"> специально для вас</span>
            </h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
               {locations.map((loc, i) => {
                  return (
                     <Link
                        to={loc.link}
                        className="flex gap-[10px]  md:gap-[20px] md:max-h-[216px] max-w-[500px]  md:max-w-[580px]  rounded-[19px] bg-korpPrimary"
                        key={i}
                     >
                        <img
                           className="  w-[100px] sm:w-[130px]  md:w-auto md:h-auto"
                           src={loc.img}
                           alt=""
                        />
                        <div className="flex flex-col justify-between    py-5">
                           <div className="text-md font-bold text-brown">
                              {loc.title}
                           </div>
                           <div className="flex items-center  gap-5 text-sm font-bold text-white">
                              <div className="flex flex-col gap-5">
                                 <div>{loc.people}</div>
                                 <div>{loc.price}</div>
                              </div>
                              <img
                                 className="w-7 md:max-w-[120px] lg:w-[100px] pr-1"
                                 src={longarrow}
                                 alt=""
                              />
                           </div>
                        </div>
                     </Link>
                  );
               })}
            </div>
            {/* <LocationsBlocks /> */}
            <a href="#form"> 
               <Button className="bg-brown bg-opacity-70 w-auto h-[40px] md:h-[60px] gap-10 md:min-w-[600px]   mx-auto montserrat z-20 text-black">
                  Узнать подробнее
                  <img src={brownarrow} alt="" />
               </Button>
            </a>
         </div>
      </div>
   );
};

export default KorpLocations;
