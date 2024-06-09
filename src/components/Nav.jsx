import logo from '../assets/images/wheellogo.png'
const Nav = () => {
  return (
    <div className=' relative z-30 p-2 '>
      <div className='flex flex-row flex-no-wrap items-center text-center justify-between '>
        
        <h2 className='text-1.5xl font-bold text-white '>
        <img src={logo} alt="logo" className='w-40' />
          Make it look good, going fast!
        </h2>
        <ul className=' text-white flex flex-row gap-2  text-2xl text-center '>
        <li>Home</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
      </div>
      
      
    </div>
  )
}

export default Nav
