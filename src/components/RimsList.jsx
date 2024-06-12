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
    title: 'RAYS - CE28N-plus',
    id: 1,
    img: img1
  },
  {
    title: 'KANSEI - KNP',
    id: 2,
    img: img2
  },
  {
    title: 'KANSEI - CORSA',
    id: 3,
    img: img3
  },
  {
    title: 'KANSEI - ROKU',
    id: 4,
    img: img4
  },
  {
    title: 'KANSEI - KNP',
    id: 5,
    img: img5
  },
  {
    title: 'RAYS - NE24 club sport',
    id: 6,
    img: img6
  }, 
  {
    title: 'RAYS - TE37 SAGA S-plus',
    id: 7,
    img: img7
  },
  {
    title: 'RAYS - TE37 ultra X',
    id: 8,
    img: img8
  },
  {
    title: 'RAYS - TE37 ultra LARGE P.C.D. M-SPEC',
    id: 9,
    img: img9
  },
  {
    title: 'RAYS - ZE40',
    id: 10,
    img: img10
  }
];



function  RimsList() {

  return (
    <div className='flex justify-center md:mt-[10rem] lg:mt-[50vh] p-10'>
      <div className='bg-[rgb(255,255,255)] w-[70vw] rounded-2xl pt-5 '>
        <div className=' flex-col grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 pt-10   justify-center content-center '>
          { RimsImages.map((rim) => (
          <div key={rim.id} className=' flex flex-col text-center contents-center  text-xl font-semibold hover:scale-110 transition-all duration-500 ease-out cursor-pointer '>
            <img src={rim.img} alt={rim.title} className='h-[vh] w-[30vw] flex justify-center '/>
            <h1 className='text-[.7em] sm:text-[1.2rem]'>{rim.title}</h1>
          </div>
        )) }
        </div>
      </div>
    </div>
  )
}

export default RimsList