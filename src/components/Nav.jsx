import logo from '../assets/images/wheellogo.png'
const Nav = () => {
  return (
    <div className=' relative z-30 p-2 '>
      <div className='flex flex-row flex-no-wrap items-center text-center justify-between '>
        
        <h2 className='text-2xl font-bold m-5 text-white '>
          <img src={logo} alt="logo" className='w-40 xl:50' /> 
          Make it look good, going fast!
        </h2>
        <ul className=' text-white flex flex-row gap-5 text-2xl text-center font-bold m-5  '>
          <li className='hover:scale-110 transition-all duration-500 cursor-pointer hover:underline'>Home</li>
          <li className='hover:scale-110 transition-all duration-500 cursor-pointer hover:underline'>Shop</li>
          <li className='hover:scale-110 transition-all duration-500 cursor-pointer hover:underline'>Contact</li>
        </ul>
      </div>
      
      
    </div>
  )
}

export default Nav
