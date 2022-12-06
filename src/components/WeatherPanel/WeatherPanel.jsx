import { useState } from "react"
import Form from "../Form/Form";
import Card from "../Card/Card";

const WeatherPanel = () => {
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=4b4dc0de1867843c946e7ed036c10e60&lang=es";
    let cityUrl = "&q=";
    let urlForecast = "https://api.openweathermap.org/data/2.5/weather?appid=4b4dc0de1867843c946e7ed036c10e60&lang=es";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        //llamar a weather

        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) =>{
           /*  console.log(weatherData); */
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        // llamar al forecast

        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            /* console.log(forecastData); */
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

    }
    return (
        <>
            <Form
                newlocation = {getLocation}
            />
            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />
        </>
    );
}

export default WeatherPanel