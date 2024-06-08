import logo from '../assets/images/wheellogo.png'
const Nav = () => {
  return (
    <div>
      <div className='flex flex-row items-center text-center '>
        
        <h2 className='text-1.5xl font-bold text-white '>
        <img src={logo} alt="logo" className='w-40' />
          Make it look good, going fast!
        </h2>
        <ul className=' text-white flex flex-row gap-2  text-2xl text-center justify-center '>
        <li>Home</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
      </div>
      
      
    </div>
  )
}

export default Nav
