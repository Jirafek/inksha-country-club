import loc1 from "images/korpLanding/locations/003.webp"
import loc2 from "images/korpLanding/locations/001.webp"
import loc3 from "images/korpLanding/locations/002.webp"
import loc4 from "images/korpLanding/locations/004.webp"
import longarrow from "icons/longbrownarrow.png"

// import arrow from "icons/arrow.png"
import Button from "common/Button"
import { Link } from "react-router-dom"


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
]
const ChillLocations = () => {
   return (
      <div id="locations" className=" text-black ">
         <div className="wrapper py-[10vh]">

            <div className="grid grid-rows-1 grid-cols-1 md:place-items-start place-items-center gap-10 md:grid-cols-2">
               {locations.map((loc, i) => {
                  return (
                     <Link
                        to={loc.link}
                        className={`flex md:place-self-start gap-[10px] sm:max-w-[550px] h-[82] md:h-[182px]  md:gap-[20px] md:max-h-[216px]   w-full  rounded-[19px] bg-[#F5F5F5]`}
                        key={i}
                     >
                        <img
                           className="  w-[110px] sm:w-[150px] h-full"
                           src={loc.img}
                           alt=""
                        />
                        <div className="flex flex-col justify-between    py-3">
                           <div className="text-md font-bold text-black">
                              {loc.title}
                           </div>
                           <div className="flex items-center  gap-5 text-sm font-bold text-white">
                              <div className="flex flex-col text-[#785E4E] gap-5">
                                 <div className='text-[#785E4E]'>{loc.people}</div>
                                 <div className='text-[#785E4E]'>{loc.price}</div>
                              </div>
                              <img
                                 className="w-12 md:w-[80px] lg:w-[100px] pr-1"
                                 src={longarrow}
                                 alt=""
                              />
                           </div>
                        </div>
                     </Link>
                  )
               })}
            </div>
            {/* <LocationsBlocks /> */}
            <a href="#form">
               <Button className="bg-ChillBrown text-md  w-auto h-[40px] md:h-[60px] gap-10 md:min-w-[600px]   mx-auto montserrat z-20 text-white">
                  Забронировать

               </Button>
            </a>
         </div>
      </div>
   )
}

export default ChillLocations
