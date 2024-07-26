import React, { useState, useEffect } from 'react';
import { pedirDatos } from '../../helpers/DataRequest';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("productos");
  const categoria = useParams().categoria;

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if (categoria) {
          setProductos( res.filter((prod) => prod.categoria === categoria) );
          setTitulo(categoria);
        } else { 
          setProductos(res);
          setTitulo("productos");
        }
        
      })
     
  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo}/>
    </div>
  );
}

export default ItemListContainer;

