import "./main.css";
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from "./components/contacto/contacto";
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito/Carrito';
import Checkout from "./components/Checkout/checkout";
import Footer from "./components/footer/footer";


function App() {
  

  

  return (
    <div className="App">
    <CartProvider>
      <BrowserRouter>

     <Navbar/>
     <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path="/productos" element={<ItemListContainer />} />
      <Route path="/productos/:categoria" element={<ItemListContainer />} />
      <Route path="/contacto" element={<Contacto />}/>
      <Route path="/carrito" element={<Carrito />}/>
      <Route path="/checkout" element={<Checkout />}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
     </CartProvider>
     
    </div>
    
  );
}

export default App;
