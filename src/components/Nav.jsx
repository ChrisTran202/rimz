import logo from '../assets/images/wheellogo.png'
const Nav = () => {
  return (
    <div>
      <div className='flex flex-col items-center text-center'>
        <img src={logo} alt="logo" className='w-80' />
        <h2 className='text-1.5xl font-bold text-white'>
          Make it look good, going fast!
        </h2>
      </div>
      
      <ul className='bg-gray-500 flex fle-row gap-2 pr-4 text-2xl justify-end '>
        <li>Home</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Nav
