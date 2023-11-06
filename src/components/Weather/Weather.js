import Days from "../Days/Days";
import "./Weather.css";

function Weather({city, temp}) {
  return (
    <div className="row">
      <div className="col s12 m6 push-m3">
        <div className="weather card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{city}</span>
            <p>
              <img src="icons/sun.svg" />
            </p>
            <span className="temperature">{temp}°</span>
            <div className="wind">Vent 1km/h (360°)</div>
          </div>
          <Days />
        </div>
      </div>
    </div>
  );
}

export default Weather;
