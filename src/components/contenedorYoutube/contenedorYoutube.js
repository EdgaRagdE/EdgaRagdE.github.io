import React from "react";
import './contenedorYoutube.css';

function contenedorYoutube({ titulo, fechaPublicacion, antiguedad, nombreCanal, cantSuscriptores, descripcion, iconoCanal }){

    //Pueden colocar JS
    function mostrarMas(e){
        e.preventDefault();
        //e.target.previousSibling.style.maxHeight = 'none';
        document.getElementById("parrafo").style.maxHeight = 'none';
        e.target.style.display = 'none';
    }
    return(
        //Pueden colocar HTML (JSX)
        <div>
            <div className='youtube-container'>
                <iframe 
                    width="70%" 
                    height="600px" 
                    src="https://www.youtube.com/embed/eho0uOI4Gu0?si=azXw356vO-ATt9z7" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
            <div className='contenedorBase'>
                <h3>{titulo}</h3>
                <h4>{fechaPublicacion} - {antiguedad}</h4>

                <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                    <div className='iconoCanal'>
                        <img id="imgIcono" src={iconoCanal} />
                    </div>
                    <div className='iconoCanal'>
                        <h4>{nombreCanal} - {cantSuscriptores} suscriptores</h4>
                    </div>
                </div>
                

                <p style={{ maxHeight: '20px', overflow: 'hidden' }} id="parrafo">
                    {descripcion}
                </p>
                <a href="#" onClick={mostrarMas}>Mostrar más</a>
            </div>
        </div>
        
    );
}

export default contenedorYoutube;
