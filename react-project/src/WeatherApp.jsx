import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Kolkata",
        feelsLike: 38.97,
        humidity: 74,
        temp: 31.97,
        tempMax: 31.97,
        tempMin: 31.97,
        weather:"haze",
    });

    let updateInfo= (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign : "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}