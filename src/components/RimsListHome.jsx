
import { rimsImages } from '../data/rimsData'



const  RimsListHome= () => {

  return (
    // <div className=' overflow-x-auto h-auto mt-[10rem]'>

    <div className='mt-[10rem] md:mt-[8rem] 2xl:mt-[25rem] overflow-x-auto whitespace-nowrap flex rounded-md   '>
            { rimsImages.map((rim) => (
              <div key={rim.id} className='m-1 md:m-2  w-[50vw]  rounded-2xl flex flex-col text-center items-center contents-center  text-xl font-semibold  hover:bg-[#8c8c8c] hover:scale-110 transition-all duration-500 ease-out cursor-pointer '>
                <img src={rim.img} alt={rim.title} className='w-[15vw] flex justify-center rounded-lg  '/>
                <h1 className='bg-[#8c8c8c] text-[.rem] pt-1 md:pt-3 w-[8vw]  rounded-md text-wrap '>{rim.title}</h1>
              </div>
      
      ))}
    </div>
    
  )
}

export default RimsListHome
