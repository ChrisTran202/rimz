import Clip from '../assets/clips/clip.mp4'

const Bgvideo = () => {
  return (

    <div className="container-fluid p-0">
        <video  autoPlay muted loop>
          <source src={Clip} type="video/mp4" />
        </video>
      </div>

    
  )
}

export default Bgvideo
