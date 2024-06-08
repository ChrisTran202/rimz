import Clip from '../assets/clips/rimzclipz-2.mp4'

const Bgvideo = () => {
  return (

    <div className=" flex flex-row items-center playsinline justify-center container-fluid pb-10 ">
        <video  autoPlay muted loop className='w-[100vw]'>
          <source src={Clip} type="video/mp4" />
        </video>
      </div>

    
  )
}

export default Bgvideo
