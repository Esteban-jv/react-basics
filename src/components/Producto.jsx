import React from 'react';

const Producto = ({producto, carrito, setItems, productos}) => {
    const { nombre, precio, id } = producto;
    // Agregar producto al carrito
    const seleccionaProducto = id => {
        const producto = productos.filter(producto => producto.id === id )[0];
        setItems([
            ...carrito,
            producto
        ]);
        // El state nunca se modifica
    }
    // Eliminar un producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id ); //filtra todo menos el id seleccionado
        setItems(productos);
    }
    return ( 
    <div>
        <h2>{nombre}</h2>
        <p>${precio}</p>
        {productos ?
            <button 
                type='button'
                onClick={ () => seleccionaProducto(id) }
            >Comprar</button>
        :
        <button 
            type='button'
            onClick={ () => eliminarProducto(id) }
        >Eliminar</button>
        }
    </div>
    );
}
 
export default Producto;