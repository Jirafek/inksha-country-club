
import map from 'images/fishing/map.webp'

const FishMap = () => {
   return (
      <div id='map' className='bg-FBlack text-white'>
         <div className='text-white font-bold text-center mb-[10vh] text-36px'>Карта территории</div>

         <img className='w-full min-h-[500px] h-full object-left md:object-center object-cover' src={map} alt="" />

      </div>
   )
}

export default FishMap