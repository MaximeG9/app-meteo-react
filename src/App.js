import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";

function App() {
  const baseUri = process.env.REACT_APP_WEATHER_BASE_URI;
  const apiKey = process.env.REACT_APP_API_KEY;

  const [city, setCity] = useState(["Lyon"]);
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    const fetchWeatherData = () => {
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setCity(data.location.name);
          setTemp(data.current.temp_c)
        });
    };
    fetchWeatherData();
  }, [city, temp]);

  // console.log(data.location.name);

  return (
    <div className="App">
      <Header />

      {typeof data.location != "undefined" ? (
        <Weather city={city} temp={temp} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
