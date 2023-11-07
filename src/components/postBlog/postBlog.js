import React from "react";
import './postBlog.css';
import { Link } from "react-router-dom";

function postBlog({contenedor, contenedorImagen, imagen, nomImagen, contenedorTexto, textoTitulo, texto, textoBlog, ProYecto, ProyecTo}){
    return(
        <div className={contenedor}>
            <img className={contenedorImagen} src={imagen} alt={nomImagen}/>
            <div className={contenedorTexto}>
                <h1 className="letra">{textoTitulo}</h1>
                <p className={texto}>{textoBlog}</p> 
                <Link className="Link" to={ProyecTo}>{ProYecto}</Link>
            </div>
        </div>
    );
}

export default postBlog;
