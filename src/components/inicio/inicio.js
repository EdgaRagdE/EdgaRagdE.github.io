import React from "react";
import './inicio.css'
import imagenes from '../assets/imagenes';

function inicio(){
    return(
        <div className="contenedo">
            <div className="contenedorTexto">
                <h1>Hola</h1>
                <h1>Soy Edgar Estrada</h1>
                <h2 className="textoo">Estoy iniciando en el Desarrollo Web.</h2> 
                <h2 className="textoo">Puedes contactarme al correo: eestradag16@miumg.edu.gt</h2> 
            </div>
            <div>
                <img className="contenedorImagenI" src={imagenes.muestra} alt="foto"/>
            </div>
        </div>
    );
}

export default inicio;
