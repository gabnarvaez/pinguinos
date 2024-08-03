import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const enCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (enCarrito) {
            enCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    };

    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    };

    const precioFinal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadCarrito, precioFinal, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    );
};
