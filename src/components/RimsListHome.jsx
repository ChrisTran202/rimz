
import { rimsImages } from '../data/rimsData'



const  RimsListHome= () => {

  return (
    <div className=' w-[200%] h-auto pt-5'>
  <div className=' overflow-hidden'>
    <div className=' flex  overflow-hidden '>
              { rimsImages.map((rim) => (
              <div key={rim.id} className='m-1 md:m-2 rounded-2xl flex flex-col text-center items-center contents-center  text-xl font-semibold  hover:bg-[#8c8c8c] hover:scale-110 transition-all duration-500 ease-out cursor-pointer '>
                <img src={rim.img} alt={rim.title} className='h-[vh] w-[30vw] flex justify-center '/>
                <h1 className='text-[1rem] md:text-[1.8rem] pt-1 md:pt-3 tracking-tighter md:tracking-normal'>{rim.title}</h1>
              </div>
      
      ))}
      </div>
      </div>
    </div>
  )
}

export default RimsListHome
