import React from "react";

/* para este caso puedes no usar llaves si no usas código javascript */
const Footer = ({fecha}) =>  ( 
    <footer>
        <p>Todos los derechos reservados &copy {fecha}</p>
    </footer>
    );
 
export default Footer;