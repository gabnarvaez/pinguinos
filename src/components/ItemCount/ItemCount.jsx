import React from 'react'

const ItemCount = ({ cantidad, handleSumar, handleRestar, handleAgregar }) => {
    return (
<div>
  <div className="item-count">
  <button onClick={handleRestar}>-</button>
    <span>{cantidad}</span>
  <button onClick={handleSumar}>+</button>
    <div>
      <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar</button>
    </div>
  </div>
</div>
    );
  };

export default ItemCount