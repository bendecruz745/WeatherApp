import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function LocationListItem({ locationItem, fetchWeatherData }) {
  const handleClick = () => {
    fetchWeatherData(locationItem);
  };
  return (
    <div className="locationItem m-1" onClick={handleClick}>
      {locationItem.name}, {locationItem.region}, {locationItem.country}
    </div>
  );
}

export default LocationListItem;
