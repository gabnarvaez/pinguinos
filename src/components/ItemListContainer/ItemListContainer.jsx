import React, { useState, useEffect } from 'react';
import { pedirDatos } from '../../helpers/DataRequest';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("productos");
  const categoria = useParams().categoria;

  useEffect(() => {

    const productosRef = collection(db, "productos");
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;


    getDocs(q)
    .then((resp) => {
     
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })
      )
    })
    
   
         }, [categoria]);



  return (
    <div>
      <ItemList productos={productos} titulo={titulo}/>
    </div>
  );
}

export default ItemListContainer;

