import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const { cantidadCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/carrito">
        <FaShoppingCart/>
            <span className="numerito">{cantidadCarrito()}</span>
        </Link>
    </div>
  )
}

export default CartWidget