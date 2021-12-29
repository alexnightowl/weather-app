import React from "react";

const Main = ({weatherData = null, units}) => {
  return (
    <div>
      {weatherData ? (
        <div>
          <h2>{weatherData?.name}</h2>
          <h1>{weatherData?.main?.temp} {units === "metric" ? "C" : "F"}°</h1>
        </div>
      ) : (
        <p>Choose city</p>
      )}
    </div>
  );
};

export default Main;
