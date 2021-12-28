import {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <div className='App'>
      <Header setWeatherData={setWeatherData}/>
      <Main weatherData={weatherData}/>
    </div>
  );
}

export default App;
