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
    img: img1,
    description: 'Lightweight forged monoblock wheel with a classic 10-spoke design for optimal strength and weight reduction.',
    sizes: ['15x6.5', '16x7', '17x8', '18x9', '19x9.5']
  },
  {
    title: 'KANSEI - KNP',
    id: 2,
    img: img2,
    description: 'A timeless 5-spoke wheel with a deep concave design and a durable flow-formed construction.',
    sizes: ['17x8', '18x9', '19x10.5']
  },
  {
    title: 'KANSEI - CORSA',
    id: 3,
    img: img3,
    description: 'Inspired by motorsports, the Corsa features a split 6-spoke design with enhanced strength and lightweight performance.',
    sizes: ['17x9', '18x9.5', '19x10']
  },
  {
    title: 'KANSEI - ROKU',
    id: 4,
    img: img4,
    description: 'A six-spoke wheel designed for aggressive fitment and strength while maintaining lightweight performance.',
    sizes: ['17x9', '18x9.5']
  },
  {
    title: 'KANSEI - KNP',
    id: 5,
    img: img5,
    description: 'Another version of the classic KNP with a concave profile and precision-machined finishes.',
    sizes: ['18x9', '19x10']
  },
  {
    title: 'RAYS - NE24 club sport',
    id: 6,
    img: img6,
    description: 'A modern motorsports wheel with an intricate multi-spoke pattern for maximum weight savings and rigidity.',
    sizes: ['18x9', '19x9.5', '19x10']
  },
  {
    title: 'RAYS - TE37 SAGA S-plus',
    id: 7,
    img: img7,
    description: 'An evolution of the iconic TE37, featuring improved rigidity and a revised spoke profile for modern vehicles.',
    sizes: ['17x9', '18x9.5', '19x10']
  },
  {
    title: 'RAYS - TE37 ultra X',
    id: 8,
    img: img8,
    description: 'Designed for high-performance vehicles, the ultra X enhances the classic TE37 with a stronger and lighter structure.',
    sizes: ['18x9.5', '19x10.5']
  },
  {
    title: 'RAYS - TE37 ultra LARGE P.C.D. M-SPEC',
    id: 9,
    img: img9,
    description: 'Specially designed for larger PCD vehicles, maintaining the legendary TE37 strength and performance.',
    sizes: ['18x9.5', '20x10.5']
  },
  {
    title: 'RAYS - ZE40',
    id: 10,
    img: img10,
    description: 'A multi-spoke performance wheel with improved spoke thickness and enhanced weight distribution.',
    sizes: ['18x9', '19x10']
  }
];




function  RimsList() {

  return (
    <div className=' flex flex-col items-center  mt-[3rem] md:mt-[8rem] lg:mt-[20rem] p-10'>
      <p className='text-[#ffffff] text-[1.8rem] md:text-4xl '>
          Beauty is in the eye of the beholder
        </p>
      <div className='bg-[rgb(255,255,255)] w-[70vw] rounded-2xl pt-5 border-red-900 border-2 '>
        <div className=' flex-col grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 pt-10   justify-center content-center '>
          { RimsImages.map((rim) => (
          <div key={rim.id} className=' flex flex-col text-center contents-center  text-xl font-semibold hover:scale-110 transition-all duration-500 ease-out cursor-pointer '>
            <img src={rim.img} alt={rim.title} className='h-[vh] w-[30vw] flex justify-center '/>
            <h1 className='text-[1.5rem] md:text-[1.8rem]'>{rim.title}</h1>
            <h1 className='font-[roboto] weight-bold text-[.8rem] md:text-[1rem]'>{rim.description}</h1>
              <div>
                <select>
                  {rim.sizes.map((size) => (
                    <option className='weight-light' key={size}>{size}</option>
                  ))}
                </select>
                <button className='background-[#000000] text-[#7d1e1c] p-2 rounded-md'>Add To Cart</button>
              </div>
          </div>
        )) }
        </div>
      </div>
    </div>
  )
}

export default RimsList