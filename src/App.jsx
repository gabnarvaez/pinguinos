import React from 'react';
import "./main.css";
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const nombre = "ay que";

  return (
    <div className="App">
      <BrowserRouter>

     <Navbar/>
     <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path="/productos" element={<ItemListContainer />} />
      <Route path="/productos/:categoria" element={<ItemListContainer />} />
     </Routes>
   

     </BrowserRouter>
    </div>
    
  );
}

export default App;
