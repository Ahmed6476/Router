import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import './weather.css'
import Forcast from "./forcast";

function Weather() {
  return (
    <React.Fragment>
      <div className="container_app">
        <CurrentLocation />
      </div>
    </React.Fragment>
  );
}

export default Weather;



// function Weather(){
//     return(
//         <h2>Weather</h2>
//     )
// }
// export default Weather