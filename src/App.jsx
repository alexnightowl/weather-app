import {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

const appId = "4cc0164c3b94a872fad76529837d837a";
const lang = "ru";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [units, setUnits] = useState("metric");
  const [date, setDate] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  const getCoordinates = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 0,
      maximumAge: 0,
    };

    const error = (error) => console.log(error);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoordinates(pos.coords);
      },
      error,
      options
    );
  };

  useEffect(() => {
    getCoordinates();
  }, []);

  useEffect(() => {
    console.log(coordinates);
    if (coordinates) {
      fetchWeatherByCoordinates(coordinates.latitude, coordinates.longitude);
    }
  }, [coordinates]);

  const fetchWeather = (city) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=${units}&lang=${lang}`
    )
      .then((response) => response.json())
      .then((json) => json);
  };

  const fetchWeatherByCoordinates = (lat, lon) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=${units}&lang=${lang}`
    )
      .then((response) => response.json())
      .then((json) => setWeatherData(json));
  };

  const updateWeatherData = async (city) => {
    setWeatherData(await fetchWeather(city));
  };

  useEffect(() => {
    if (weatherData) {
      setDate(new Date(weatherData?.dt * 1000));
    }
  }, [weatherData]);

  useEffect(() => {
    if (weatherData?.name) {
      updateWeatherData(weatherData?.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [units]);

  return (
    <div className='App'>
      <Header
        setWeatherData={setWeatherData}
        fetchWeather={fetchWeather}
        updateWeatherData={updateWeatherData}
        units={units}
        setUnits={setUnits}
      />
      <Main weatherData={weatherData} units={units} />
      <p>{`${days[date?.getDay()]} ${date?.getTime()}`}</p>
    </div>
  );
}

export default App;
