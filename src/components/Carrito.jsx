import React from 'react';
import './carrito.css'
import Producto from './Producto';

const Carrito = ({carrito, setItems}) =>  ( 
    <div className='carrito'>
        <h1>Tu carrito de compras</h1>

        {carrito.length === 0 ?
            <p>Vacío</p>
        :
            carrito.map(producto => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    setItems={setItems}
                />
            ))
        }
    </div>
 );
 
export default Carrito;