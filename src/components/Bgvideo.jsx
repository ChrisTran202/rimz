import Clip from '../assets/clips/rimzclipz-2.mp4'

const Bgvideo = () => {
  return (
    
      <div className=" flex flex-row items-center playsinline justify-center overflow-auto  container-lg:block h-[30vh] ">
        <video  autoPlay muted loop playsInline className='w-[100vw] absolute z-10'>
          <source src={Clip} type="video/mp4" />
        </video>
      </div>
    
    
  )
}

export default Bgvideo
