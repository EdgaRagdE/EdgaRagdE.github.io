import React from "react";
import './header.css';
import { Link } from "react-router-dom";

function header(){
    return(
        <div className="conten">
            <h2>Edgar <span>Estrada</span></h2>
                <Link className="Link" to="/">Inicio</Link>
                <Link className="Link" to="/Sobre_mi">Sobre mí</Link>
                <Link className="Link" to="/Proyectos">Proyectos</Link>
        </div>
    );
}

export default header;
