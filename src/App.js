import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';

function App() {

  const [city, setCity] = useState(["Lyon"]);
  const [data, setData] = useState([]);

  const url = `http://api.weatherapi.com/v1/forecast.json?key=107f5288a33b4660b4e102805230611&q=${city}&days=3&aqi=no&alerts=no`;

  useEffect(() => {
    const fetchInfo = () => {
      return fetch(url)
              .then((res) => res.json())
              .then((d) => {
                setData(d)
                setCity(d.location.name);
              })
    }
    fetchInfo();
  }, [])


  // useEffect(() => {
  //   const fetchWeatherData = () => {
  //     fetch(
  //       ${apiUrl}?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no
  //     )
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setData(data);
  //         setCity(data.location.name);
  //       });
  //   };
  //   fetchWeatherData();
  // }, [city]);


  console.log(data.location.name);

  return (
    <div id="root">
      <div className="App">
        <Header />
        {typeof data.location.name != "undefined" ? (
            <Weather city={city} />
          ) : (
            <div></div>
          )}
      </div>
    </div>
    );
}

export default App;
