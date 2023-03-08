import { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon";

const Weather = ({ data, weatherIcon, setWeatherIcon }) => {
  const { humidity, pressure, temp } = data.main;
  const { main, description } = data.weather[0];

  return (
    <div className="weatherBox">
      <div className="weatherInfo">
        <article>
          <h1>{temp} °</h1>
          <h4>
            <span>Humedad </span>
            {humidity}
          </h4>
          <h4>
            <span>Presión </span>
            {pressure}
          </h4>
          <h4>{main}</h4>
          <h3>{description}</h3>
          <h2>
            {data.name}, {data.sys.country}
          </h2>
        </article>
        <WeatherIcon
          weatherIcon={weatherIcon}
          setWeatherIcon={setWeatherIcon}
        />
      </div>
    </div>
  );
};

export default Weather;
