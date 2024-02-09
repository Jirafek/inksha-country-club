
import map from 'images/fishing/map.webp'



const ValenMap = () => {
   return (
      <div id='map' className='text-black '>
         <div className='text-ChillHeadBrown font-bold text-center mt-[10vh] mb-[5vh] text-lg'>Локации</div>

         <img className='w-full min-h-[500px] h-full object-left md:object-center object-cover' src={map} alt="" />

      </div>
   )
}

export default ValenMap