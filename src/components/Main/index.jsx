import React, {useEffect} from "react";

const Main = ({weatherData = null}) => {
  return (
    <div>
      {weatherData ? (
        <div>
          <h2>{weatherData?.name}</h2>
          <h1>{weatherData?.main.temp} C°</h1>
        </div>
      ) : (
        <p>Введите город</p>
      )}
    </div>
  );
};

export default Main;
