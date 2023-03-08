import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import DegreeChange from "./components/DegreeChange";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [weather, setWeather] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState();
  const [degree, setDegree] = useState("imperial");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${
            position.coords.latitude
          }&lon=${
            position.coords.longitude
          }&appid=${"72a117b4928e2361a4929aee7252eb35"}&units=${degree}&lang=sp`
        )
        .then((resp) => {
          setWeather(resp.data);
          setWeatherIcon(resp.data.weather[0].icon);
        })
        .catch((error) => console.log(error));
    });
  }, [degree]);

  return (
    <div className="App">
      {weather ? (
        <Weather
          data={weather}
          setWeatherIcon={weatherIcon}
          weatherIcon={weatherIcon}
        />
      ) : (
        <LoadingScreen />
      )}
      {weather ? <DegreeChange degree={degree} setDegree={setDegree} /> : NaN}
    </div>
  );
}

export default App;
