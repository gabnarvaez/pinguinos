import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {

    const { carrito, precioFinal, vaciarCarrito } = useContext(CartContext);

    const vaciar = () => {
vaciarCarrito();
    }
return(

    <div className="container"> 
    <h1 className="main-title">Carrito</h1>

{

    carrito.map((prod) => (
        <div key={prod.id}>
                    <br />
                    <h3>{prod.titulo}</h3>
                    <p>Precio unit: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
         </div>
    ))
}

<h2>Precio final: ${precioFinal()}</h2>
<button  className= "vaciar" onClick={vaciar}>Vaciar</button>
<Link className="checkout" to="/checkout">Finalizar compra</Link>

    </div>
)
};

export default Carrito
