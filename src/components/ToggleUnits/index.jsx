import React, {useEffect} from 'react';
import './style.scss';

const ToggleUnits = ({units, setUnits, updateWeatherData}) => {
    const isCelcium = units === "metric";

    const toggleUnits = () => {
        setUnits(units === "metric" ? "imperial" : "metric");
    };

    return (
        <div onClick={toggleUnits} className="toggle-button">
            <span className={`${isCelcium && "bold"}`}>°C</span>/<span className={`${!isCelcium && "bold"}`}>°F</span>
        </div>
    )
}

export default ToggleUnits;
