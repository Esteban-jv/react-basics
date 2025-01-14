import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {

  // Crear listado de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50},
    { id: 2, nombre: 'Camisa PHP', precio: 40},
    { id: 3, nombre: 'Camisa Python', precio: 55},
    { id: 4, nombre: 'Camisa TypeScript', precio: 49}
  ]);

  // State para un carrito de compras
  const [ carrito, setItems ] = useState([])

  //Obtener la fecha
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header titulo='Tienda virtual'/>
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          setItems={setItems}
        />
      ))}
      <Carrito
        carrito={carrito}
        setItems={setItems}
      />
      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
