const WeatherIcon = ({ weatherIcon, setWeatherIcon }) => {
  {
    return (
      <div className="icon">
        <img
          className="cloud"
          src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt=""
        />
      </div>
    );
  }
};

export default WeatherIcon;
