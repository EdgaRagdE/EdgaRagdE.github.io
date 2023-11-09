import React, {useState} from "react";
import axios from "axios";
import "./climaAPI.css"

function ClimaAPI() {

    // Estado para almacenar los datos del clima
    const [weatherData, setWeatherData] = useState(null);
    const [ciudad, setCiudad] = useState("Guatemala");

    //Función para hacer la solicitud a la API
    const getWeatherData = () => {
        axios.get('https://api.weatherapi.com/v1/current.json?key=614a6dbb71474167937164438233008&q='+ciudad+'&aqi=no')
        .then(Response => {
            //actualizamos el estado con los datos recibidos
            setWeatherData(Response.data)
            console.log(Response.data)
        })
        .catch(error => {
            console.error("Hubo un error al obtener los datos:", error)
        })
    }
    
    return (
        <div>
            <div className="alinear">
            <input className="input"
            type="text"
            placeholder="Ingresa una ciudad"
            onChange={(e) => setCiudad(e.target.value)}/>

            <button className="buttonClassPrimary" onClick={() => getWeatherData(ciudad)}>Obtener Clima</button>
            </div>
            {/*Mostrar los datos si existen*/}
            {weatherData &&(
                <div>
                    <h1 className="alinear">{weatherData.location.name} - {weatherData.location.country}</h1>
                    <p style={{textAlign: 'center'}}>Temperatura: {weatherData.current.temp_c}°C</p>
                </div>
            )}
        </div>
    )
}

export default ClimaAPI;
