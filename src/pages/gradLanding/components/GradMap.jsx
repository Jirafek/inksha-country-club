
import map from 'images/fishing/map.webp'



const GradMap = () => {
   return (
      <div id='map' className='text-black '>
         <div className='text-white font-bold text-center mt-[10vh] mb-[5vh] text-lg'>Локации</div>

         <img className='w-full md:min-h-[500px] md:h-full aspect-video md:aspect-auto object-left md:object-center object-cover' src={map} alt="" />

      </div>
   )
}

export default GradMap