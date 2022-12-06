import "./styles.css"
import Spinner from "../Spiner/Spinner"

const Card = ({loadingData, showData, weather, forecast}) => {

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;

    let url = "";
    let iconUrl = "";

    let iconUrl3 = "";
    let iconUrl6 = "";
    let iconUrl9 = "";

    let forecastDate3 = "";
    let forecastDate6 = "";
    let forecastDate9 = "";

    if(loadingData){
        return  <Spinner />;
    }
    
    if(showData){

        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
        
        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
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
                                    <p className="png">
                                        <img className="icono" src={iconUrl} alt="icon"/>
                                    </p>     
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
                                        <h4>Prediccion para las proximas 3 hs</h4>
                                        <div className="padreIcon">
                                            <div className="col">
                                                <p className="prediccion">{forecastDate3}h</p>
                                                <p className="prediccion"><img className="icono2" src={iconUrl3} alt="icon"/></p>
                                                <p className="prediccion">{forecast.list[1].weather[0].description}</p>
                                                <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                                            </div>
                                            <div className="col">
                                                <p className="prediccion">{forecastDate6}h</p>
                                                <p className="prediccion"><img className="icono2" src={iconUrl6} alt="icon"/></p>
                                                <p className="prediccion">{forecast.list[2].weather[0].description}</p>
                                                <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                            </div>
                                            <div className="col">
                                                <p className="prediccion">{forecastDate9}h</p>
                                                <p className="prediccion"><img className="icono2" src={iconUrl9} alt="icon"/></p>
                                                <p className="prediccion">{forecast.list[3].weather[0].description}</p>
                                                <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                            </div>
                                        </div>
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