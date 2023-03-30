import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";

function LocationListItem({ locationItem }) {
  const handleClick = () => {
    console.log(
      "Yo you just clicked on " +
        locationItem.Name +
        " located at " +
        locationItem.region +
        " in the country of " +
        locationItem.country
    );
  };
  return (
    <div className="locationItem" onClick={handleClick}>
      {locationItem.name}, {locationItem.region}, {locationItem.country}
    </div>
  );
}

export default LocationListItem;
