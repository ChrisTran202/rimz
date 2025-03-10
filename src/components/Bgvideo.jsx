import Clip from '../assets/clips/rimzclipz-2.mp4'

const bgVideo = () => {
  return (
    
      <div className=" flex flex-col items-center justify-center overflow-auto  container-lg:block h-[30vh] md:h-[40vh]  lg:h-[70vh] ">
        <video  autoPlay muted loop playsInline className='absolute overflow-hidden w-[auto]  z-10 '>
          <source src={Clip} type="video/mp4" />
        </video>
        
      </div>
    
    
  )
}

export default bgVideo
