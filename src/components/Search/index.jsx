import React from "react";

const appId = "4cc0164c3b94a872fad76529837d837a";
const unitSystem = "metric";
const lang = "ru";

const Search = ({setWeatherData}) => {
  const fetchWheather = (city) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=${unitSystem}&lang=${lang}`
    )
      .then((response) => response.json())
      .then((json) => json);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    setWeatherData(await fetchWheather(event.target[0].value));

    event.target[0].value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default Search;
