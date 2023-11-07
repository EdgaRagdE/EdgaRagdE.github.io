import React, {useState} from "react";
import axios from "axios";
import './nasaAPI.css'

function ClimaAPI() {

    // Estado para almacenar los datos del clima
    const [nasaData, setNasaData] = useState(null);

    //Función para hacer la solicitud a la API
    const getNasaData = () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(Response => {
            //actualizamos el estado con los datos recibidos
            setNasaData(Response.data)
            console.log(Response.data)
        })
        .catch(error => {
            console.error("Hubo un error al obtener los datos:", error)
        })
    }
    
    return (
        <div> 
            <button className="buttonClassPrimary" onClick={getNasaData}>Obtener Imagen</button>

            {/*Mostrar los datos si existen*/}
            {nasaData &&(        
            <div className="contenedor">
                <div className="contenedorTexto">
                    <h1 className="aa">{nasaData.copyright} - {nasaData.date}</h1>
                    <p className="texto">{nasaData.explanation}</p> 
                </div>
                <div>
                <img className="contenedorImagen" src={nasaData.url} alt="foto"/>
                <h1 className="nombre">{nasaData.title}</h1>
                </div>
            </div>
            )}
        </div>
    )
}

export default ClimaAPI;
