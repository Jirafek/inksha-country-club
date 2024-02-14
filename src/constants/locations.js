import loc1 from "images/korpLanding/locations/003.webp"
import loc2 from "images/korpLanding/locations/001.webp"
import loc3 from "images/korpLanding/locations/002.webp"
import loc4 from "images/korpLanding/locations/004.webp"

const getLocation = () => {
   const locations = [
      {
         title: "ЛЕСНАЯ РЕЗИДЕНЦИЯ",
         people: "До 30 чел",
         price: "от 10 000 руб",
         img: loc1,
         link: '/locations-about',
      },
      {
         title: "КОТТЕДЖ",
         people: "До 10 чел",
         price: "от 21 000 руб",
         img: loc2,
         link: '/locations-about',
      },
      {
         title: "ШАЛЕ",
         people: "До 15 чел",
         price: "от 11 000 руб",
         img: loc3,
         link: '/locations-about',
      },
      {
         title: "ОЛИМПИЙСКАЯ ДЕРЕВНЯ",
         people: "До 30 чел",
         price: "от 16 000 руб",
         img: loc4,
         link: '/locations-about',
      },
   ]

   return locations
}

export { getLocation }