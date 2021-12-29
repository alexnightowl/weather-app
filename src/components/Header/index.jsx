import React from "react";
import Search from "../Search";
import ToggleMetricSystem from "../ToggleUnits";
import logo from "../../assets/logo.svg";

const Header = ({
  units,
  setUnits,
  updateWeatherData,
}) => {
  return (
    <div>
      <img src={logo} alt='' />
      <Search
        updateWeatherData={updateWeatherData}
        units={units}
      />
      <ToggleMetricSystem
        units={units}
        setUnits={setUnits}
        updateWeatherData={updateWeatherData}
      />
    </div>
  );
};

export default Header;
