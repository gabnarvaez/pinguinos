import React, { useState } from 'react';
import "./main.css";
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ubicacion from './components/Ubicacion/Ubicacion';
import { CartContext } from './context/CartContext';


function App() {
  

  const [carrito, setCarrito] = useState([])


  return (
    <div className="App">
    <CartContext.Provider value={{carrito, setCarrito}}>
      <BrowserRouter>

     <Navbar/>
     <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path="/productos" element={<ItemListContainer />} />
      <Route path="/productos/:categoria" element={<ItemListContainer />} />
      <Route path="/ubicacion" element={<Ubicacion />}/>
     </Routes>

     </BrowserRouter>
     </CartContext.Provider>
    </div>
    
  );
}

export default App;
