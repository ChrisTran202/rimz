import Clip from '../assets/clips/rimzclips.mp4'

const Bgvideo = () => {
  return (

    <div className=" flex flex-row items-center justify-center container-fluid p-0 ">
        <video  autoPlay muted loop className='h-[70rem]'>
          <source src={Clip} type="video/mp4" />
        </video>
      </div>

    
  )
}

export default Bgvideo
