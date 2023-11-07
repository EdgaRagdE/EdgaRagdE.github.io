import React from "react";
import "./proyectos.css"
import PostBlog from "../postBlog/postBlog"
import imagenes from '../assets/imagenes';

function proyectos(){
    return(
        <div className="contenedo">
            <PostBlog contenedor="contene" contenedorImagen="contenedorImagens" imagen={imagenes.youtube} nomImagen="P1" contenedorTexto="contenedorTexto"textoTitulo="Youtube" texto="textos" textoBlog="Se desarrolló un contenedor de Youtube." ProYecto="contenedorYoutube" ProyecTo="/youtube"/>
            <PostBlog contenedor="contene" contenedorImagen="contenedorImagens" imagen={imagenes.nasa} nomImagen="P2" contenedorTexto="contenedorTexto" textoTitulo="Nasa API" texto="textos" textoBlog="Se extrajeron datos de una API de la Nasa." ProYecto="nasaAPI" ProyecTo="/nasa"/>
            <PostBlog contenedor="contene" contenedorImagen="contenedorImagens" imagen={imagenes.clima} nomImagen="P3" contenedorTexto="contenedorTexto" textoTitulo="Clima API" texto="textos" textoBlog="Se creó una API para ver la temperatura de una ciudad." ProYecto="climaAPI" ProyecTo="/clima"/>
        </div>
    );
}

export default proyectos;
