import Clip from '../assets/clips/rimzclipz-2.mp4'

const Bgvideo = () => {
  return (
    
      <div className=" flex flex-row items-centerjustify-center overflow-auto  container-lg:block h-[30vh] md:h-[50vh] lg:h-[80vh]  ">
        <video  autoPlay muted loop playsInline className='absolute overflow-hidden w-auto z-10 '>
          <source src={Clip} type="video/mp4" />
        </video>
      </div>
    
    
  )
}

export default Bgvideo
