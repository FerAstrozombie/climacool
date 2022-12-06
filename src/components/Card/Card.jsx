import "./styles.css"
import Spinner from "../Spiner/Spinner"

const Card = ({loadingData, showData, weather}) => {

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;

    if(loadingData){
        return  <Spinner />;
    }
        
    return (
        <div className="padre">
            {
                showData === true ? (
                    <div className="container">
                        <div className="card">
                            <div className="imagen">
                                <div className="contenedorImagen">
                                    <h3 className="nombre">{weather.name}</h3>
                                    <p className="fecha">{date}</p>
                                    <h1 className="temperatura">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                    <p className="png">{weather.weather[0].description}</p>
                                    <img className="imagenTamaño" src="https://images.pexels.com/photos/2921136/pexels-photo-2921136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="ciudad" />
                                </div>
                                <div className="contenedorInfo">
                                    <div className="cardBody">
                                        <h5 className="cardText">Temperatura maxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="cardText">Temperatura minima: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="cardText">Sensacion termica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="cardText">Velocidad del viento: {weather.wind.speed} m/s</h5>
                                        <h5 className="cardText">Humedad: {weather.main.humidity}% </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ):(
                    <h2>Sin datos disponibles</h2>
                )
            }
        </div>
    )
};

export default Card