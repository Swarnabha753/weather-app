import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./SearchBox.css";


export default function SearchBox ({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "fd60e8a8f29056982fd66cce841c7b01";

    let getWeatherInfo = async () => {
        // try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
            lathitude: jsonResponse.coord.lat,
            longitude: jsonResponse.coord.lon,
        };
        console.log(result);
        return result;
        // } catch(err) {
        //     throw err;
        // };
        
    };

    let handleCity = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async(event) => {
        try {
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
        
    };


    return (
        <div className="SearchBox">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField  id="city" label="City Name" variant="outlined"  required value={city} onChange={handleCity}/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color: "red"}}>No such place exists in the API</p>}
            </form>
            
        </div>
    );
}