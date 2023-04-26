import { useState, useEffect } from "react";
import React from "react";
import { Button } from "react-bootstrap";

function Main({ weatherData }) {
  const [degreesDisplay, setDegreesDisplay] = useState(true);
  const [temperature, setTemperature] = useState(weatherData.current.temp_c);

  const toggleDegrees = () => {
    setDegreesDisplay(!degreesDisplay);
  };

  useEffect(() => {
    if (degreesDisplay === true) {
      setTemperature(weatherData.current.temp_c);
    } else {
      setTemperature(weatherData.current.temp_f);
    }
  }, [degreesDisplay, weatherData]);

  return (
    <div className="weatherData p-3 border">
      <h1>
        {weatherData.location.name}, {weatherData.location.region},
        {weatherData.location.country}
      </h1>
      <div className="weatherDisplay d-flex flex-column">
        <div className="localTime">
          <div class="">Local Time: {weatherData.location.localtime}</div>
          <div class="">Last Update: {weatherData.current.last_updated}</div>
        </div>
        <div className="temperature d-flex justify-content-between align-items-center">
          Temperature: {temperature}°{degreesDisplay ? "C" : "F"}
          <Button onClick={toggleDegrees}>Toggle Degrees</Button>
        </div>
      </div>
    </div>
  );
}

export default Main;
