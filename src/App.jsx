import "./main.css";
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ubicacion from './components/Ubicacion/Ubicacion';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito/Carrito';


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
      <Route path="/ubicacion" element={<Ubicacion />}/>
      <Route path="/carrito" element={<Carrito />}/>
     </Routes>

     </BrowserRouter>
     </CartProvider>
    </div>
    
  );
}

export default App;
