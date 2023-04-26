import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./Components/Main.js";
import { useState } from "react";
import { Button } from "react-bootstrap";
import LocationListItem from "./Components/LocationListItem";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const [locationData, setLocationData] = useState({});
  const [weatherData, setWeatherData] = useState();

  const fetchLocationData = async (cityToSearch) => {
    setDisableButton(true);
    const response = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=c41e0e9249d94ae59f462618233003&q=${cityToSearch}`
    );
    const jsonData = await response.json();
    setLocationData(jsonData);
    setDisableButton(false);
  };

  const fetchWeatherData = async (location) => {
    setDisableButton(true);
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=c41e0e9249d94ae59f462618233003&q=${location.lat}, ${location.lon}`
    );
    const jsonData = await response.json();
    setWeatherData(jsonData);
    setDisableButton(false);
  };

  const testDataReading = (data) => {
    let dataInfo = data.map((cityInfo) => {
      return {
        id: cityInfo.id,
        cityName: cityInfo.name,
        cityRegion: cityInfo.region,
        country: cityInfo.country,
      };
    });
  };

  const handleSubmit = (event) => {
    if (inputValue) {
      let city = inputValue;
      fetchLocationData(city);
    } else {
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <header>
        <h1>Ben's Weather app</h1>
      </header>
      <div className="countrySelectDropdown d-flex justify-content-center">
        <Button disabled={disableButton} onClick={handleSubmit}>
          Search
        </Button>
        <input
          id="CityInput"
          className="mt-0"
          type="text"
          value={inputValue}
          placeholder="Location"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSubmit(event);
            }
          }}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
      </div>
      <div className="locationList m-1">
        {locationData.length &&
          locationData.map((locationItem, index) => (
            <LocationListItem
              locationItem={locationItem}
              key={index}
              fetchWeatherData={fetchWeatherData}
            />
          ))}
      </div>
      {weatherData && <Main weatherData={weatherData} />}
    </div>
  );
}

export default App;
