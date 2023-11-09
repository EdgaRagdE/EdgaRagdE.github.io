import React from "react";
import './sobre.css'
import imagenes from '../assets/imagenes';

function sobre(){
    return(
    <div className="contenedore">
        <div className="contenedorTexto">
            <h1>Estudiante de la carrera Ingieneria en Sistemas</h1>
            <p className="textoss">Graduado en bachillerato en ciencias y letras con orientación en computación en el año 2019. Actualmente cursando el octavo ciclo de la carrera Universitaria.
            Actualmente me enfoco en finalizar mis estudios para amplear mis conocimientos.</p> 
        </div>
        <div>
            <img className="contenedorImagene" src={imagenes.Mifoto} alt="foto"/>
            <h1 className="nombre">Edgar Leonardo Estrada Gudiel</h1>
        </div>
    </div>
    );
}

export default sobre;
