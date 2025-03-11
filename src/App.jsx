import './App.css'
import { Provider } from 'react-redux';
import  store  from './store/store.js';
import {  Routes, Route } from 'react-router-dom';
import BgVideo from './components/BgVideo.jsx';
import Navbar from './components/Navbar';
import RimsListShop from './components/RimsListShop'
// import CartPage from './features/cart/CartPage.jsx';
import RimsListHome from './components/RimsListHome.jsx';


function App() {
  return (
    <>
    <Provider store={store}>
      <Navbar/>
      
        <Routes>
          <Route path="/" element={
            <div>
              <div>
                <BgVideo />
              </div>
              <div>
                <RimsListHome />
              </div>
            </div>}
          />
          
          <Route path="/shop" element={ <div> <RimsListShop /></div> } /> 
          {/* <Route path="/cart" element={<CartPage />} />   */}

        </Routes>
        
      
    </Provider>
    </>
  )
}

export default App
