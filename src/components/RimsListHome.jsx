
import { rimsImages } from '../data/rimsData'



const  RimsListHome= () => {

 

  return (
    // <div className='mt-[10rem] md:mt-[8rem] whitespace-nowrap overflow-clip 2xl:mt-[25rem] h-[8vh] flex overflow-x-scroll  rounded-md scrollbar-hide  '>
    //         { rimsImages.map((rim) => (
    //           <div key={rim.id} className='m-1 md:m-2 w-[50vw]  rounded-2xl flex flex-col text-center items-center contents-center  text-xl font-semibold  hover:bg-[#8c8c8c] hover:scale-100 transition-all duration-500 ease-out cursor-pointer '>
    //             <img src={rim.img} alt={rim.title} className='pt-8 flex justify-center rounded-lg  '/>
    //             <h1 className='bg-[#8c8c8c] text-[.rem] pt-1 md:pt-3 w-[8vw]  rounded-md text-wrap  '>{rim.title}</h1>
    //           </div>
      
    //   ))}
    // </div>
    <div className='flex flex-col items-center '>
      <div className=' text-white w-[50vw] mt-[5rem] lg:mt-[5rem] xl:mt-[12rem] text-[1.5rem] md:text-[2rem] lg:text-[3rem] flex flex-col items-center'>
        <h1> "If you can leave two black stripes from the exit of one corner to the braking zone of the next, you have enough horsepower."</h1>
        <h1> Mark Donohue</h1>
      </div>
    </div>
  )
}

export default RimsListHome
