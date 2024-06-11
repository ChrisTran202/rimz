import Clip from '../assets/clips/rimzclipz-2.mp4'

const Bgvideo = () => {
  return (
    <div className='  hidden lg:block'>
      <div className=" flex flex-row items-center playsinline justify-center container-fluid  h-[20vh]  ">
        <video  autoPlay muted loop className='w-[100vw] absolute z-10'>
          <source src={Clip} type="video/mp4" />
        </video>
      </div>
    </div>
    
  )
}

export default Bgvideo
