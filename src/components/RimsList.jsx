import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.webp'
import img3 from '../assets/images/3.webp'
import img4 from '../assets/images/4.webp'
import img5 from '../assets/images/5.webp'
import img6 from '../assets/images/6.jpg'
import img7 from '../assets/images/7.jpg'
import img8 from '../assets/images/8.jpg'
import img9 from '../assets/images/9.jpg'
import img10 from'../assets/images/10.jpg'

export const RimsImages = [
  {
    title: 'Rim 1',
    id: 1,
    img: img1
  },
  {
    title: 'Rim 2',
    id: 2,
    img: img2
  },
  {
    title: 'Rim 3',
    id: 3,
    img: img3
  },
  {
    title: 'Rim 4',
    id: 4,
    img: img4
  },
  {
    title: 'Rim 5',
    id: 5,
    img: img5
  },
  {
    title: 'Rim 6',
    id: 6,
    img: img6
  }, 
  {
    title: 'Rim 7',
    id: 7,
    img: img7
  },
  {
    title: 'Rim 8',
    id: 8,
    img: img8
  },
  {
    title: 'Rim 9',
    id: 9,
    img: img9
  },
  {
    title: 'Rim 10',
    id: 10,
    img: img10
  }
];



function RimsList() {

  return (
    <div className='flex justify-center'>
      <div className='bg-[rgb(255,255,255)] w-[70vw] rounded-2xl  '>
        <div className='flex flex-col grid grid-cols-3 '>
          { RimsImages.map((rim) => (
          <div key={rim.id} className='text-center text-xl font-semibold '>
            <img src={rim.img} alt={rim.title} className='h-[30vh] flex justify-center '/>
            <h1>{rim.title}</h1>
          </div>
        )) }
        </div>
      </div>
    </div>
  )
}

export default RimsList