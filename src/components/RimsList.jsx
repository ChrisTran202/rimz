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
    sizes: [
      { size: '15x6.5', pricePerRim: 400 },
      { size: '16x7', pricePerRim: 450 },
      { size: '17x8', pricePerRim: 500 },
      { size: '18x9', pricePerRim: 600 },
      { size: '19x9.5', pricePerRim: 700 }
    ]
  },
  {
    title: 'KANSEI - KNP',
    id: 2,
    img: img2,
    description: 'A timeless 5-spoke wheel with a deep concave design and a durable flow-formed construction.',
    sizes: [
      { size: '17x8', pricePerRim: 480 },
      { size: '18x9', pricePerRim: 580 },
      { size: '19x10.5', pricePerRim: 750 }
    ]
  },
  {
    title: 'KANSEI - CORSA',
    id: 3,
    img: img3,
    description: 'Inspired by motorsports, the Corsa features a split 6-spoke design with enhanced strength and lightweight performance.',
    sizes: [
      { size: '17x9', pricePerRim: 500 },
      { size: '18x9.5', pricePerRim: 620 },
      { size: '19x10', pricePerRim: 750 }
    ]
  },
  {
    title: 'KANSEI - ROKU',
    id: 4,
    img: img4,
    description: 'A six-spoke wheel designed for aggressive fitment and strength while maintaining lightweight performance.',
    sizes: [
      { size: '17x9', pricePerRim: 520 },
      { size: '18x9.5', pricePerRim: 630 }
    ]
  },
  {
    title: 'KANSEI - KNP',
    id: 5,
    img: img5,
    description: 'Another version of the classic KNP with a concave profile and precision-machined finishes.',
    sizes: [
      { size: '18x9', pricePerRim: 580 },
      { size: '19x10', pricePerRim: 720 }
    ]
  },
  {
    title: 'RAYS - NE24 club sport',
    id: 6,
    img: img6,
    description: 'A modern motorsports wheel with an intricate multi-spoke pattern for maximum weight savings and rigidity.',
    sizes: [
      { size: '18x9', pricePerRim: 640 },
      { size: '19x9.5', pricePerRim: 760 },
      { size: '19x10', pricePerRim: 780 }
    ]
  },
  {
    title: 'RAYS - TE37 SAGA S-plus',
    id: 7,
    img: img7,
    description: 'An evolution of the iconic TE37, featuring improved rigidity and a revised spoke profile for modern vehicles.',
    sizes: [
      { size: '17x9', pricePerRim: 550 },
      { size: '18x9.5', pricePerRim: 670 },
      { size: '19x10', pricePerRim: 800 }
    ]
  },
  {
    title: 'RAYS - TE37 ultra X',
    id: 8,
    img: img8,
    description: 'Designed for high-performance vehicles, the ultra X enhances the classic TE37 with a stronger and lighter structure.',
    sizes: [
      { size: '18x9.5', pricePerRim: 690 },
      { size: '19x10.5', pricePerRim: 850 }
    ]
  },
  {
    title: 'RAYS - TE37 ultra LARGE P.C.D. M-SPEC',
    id: 9,
    img: img9,
    description: 'Specially designed for larger PCD vehicles, maintaining the legendary TE37 strength and performance.',
    sizes: [
      { size: '18x9.5', pricePerRim: 710 },
      { size: '20x10.5', pricePerRim: 900 }
    ]
  },
  {
    title: 'RAYS - ZE40',
    id: 10,
    img: img10,
    description: 'A multi-spoke performance wheel with improved spoke thickness and enhanced weight distribution.',
    sizes: [
      { size: '18x9', pricePerRim: 630 },
      { size: '19x10', pricePerRim: 780 }
    ]
  }
];





function  RimsList() {

  return (
    <div className=' flex flex-col items-center  mt-[3rem] md:mt-[8rem] lg:mt-[20rem] md:p-10'>
      <div className='flex flex-row text-center'>
        <p className='text-[#ffffff] text-[1.3rem] w-[100vw] md:text-5xl lg:text-7xl  pb-[5vh] md:pb-[20vh] '>
          Beauty is in the eye of the beholder!
        </p>
      </div>
      <div className='bg-[rgb(255,255,255)] w-[80vw] rounded-2xl pt-5 border-red-900 border-2  '>
        <div className=' flex-col grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 pt-10   justify-center content-center '>
          { RimsImages.map((rim) => (
          <div key={rim.id} className='m-1 md:m-2 rounded-2xl flex flex-col text-center contents-center  text-xl font-semibold  hover:bg-[#8c8c8c] hover:scale-110 transition-all duration-500 ease-out cursor-pointer '>
            <img src={rim.img} alt={rim.title} className='h-[vh] w-[30vw]flex justify-center '/>
            <h1 className='text-[1.3rem] md:text-[1.8rem] pt-1 md:pt-3 tracking-tighter md:tracking-normal'>{rim.title}</h1>
              
                <div className='flex flex-col items-center'>
                  <h1 className=' font-[SchibstedGrotesk] weight-bold  text-[.6rem] md:text-[.8rem] tracking-[.02rem] md:tracking-normal w-[20vw] md:w-[23vw] m-5'>{rim.description}</h1>
                </div>
                <div>
                  <select className='border-2 border-[#000000] rounded-md w-auto text-[.8rem] ' >
                    {rim.sizes.map((s) => (
                      <option className=' weight-light ' key={s.size && s.pricePerRim}>{s.size} -  ${s.pricePerRim}/rim</option>
                    ))}
                  </select>
                  <button  className='tracking-[.01rem] text-[#7d1e1c] text-[13px] md:text-[1.3rem] p-2 rounded-md w-[13vw]'>Add To Cart</button>
                </div>
              </div>
          
        )) }
        </div>
      </div>
    </div>
  )
}

export default RimsList