import './App.css'
import { Provider } from 'react-redux';
import  store  from './store/store.js';
import {  Routes, Route } from 'react-router-dom';
import { BgVideoClip } from './components/BgVideoClip.jsx';
import Navbar from './components/Navbar';
import RimsListShop from './components/RimsListShop'
import RimsListHome from './components/RimsListHome.jsx';
import CartIcon from './features/cart/CartIcon.jsx';
import CartPage from './features/cart/CartPage.jsx';


function App() {
  return (
    <>
    <Provider store={store}>
        <Navbar />
           

        <Routes>
          <Route path="/" element={
            <div>
              <div>
                <BgVideoClip />
                
              </div>
              <div>
                <RimsListHome />
              </div>
            </div>}
          />
          
          <Route path="/shop" element={ <div> <RimsListShop /></div> } /> 
          <Route path="/cartpage" element={ <div> <CartPage /></div> } />
            

        </Routes>
        
      
    </Provider>
    </>
  )
}

export default App
