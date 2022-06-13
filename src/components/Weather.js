//API fetch function
import { getWeather } from "../api/fetch";
//React methods - do we need useEffect?
import { useEffect } from "react";

const Weather = ({location, setLocation, setWeather}) => {
    //will set location to user input
    const handleInput = (e) =>{
        const {value} = e.target;
        setLocation(value);
    }

    //will fetch the weather data for the user inputted location
    const handleClick = () =>{
        getWeather(location)
        .then(res => {
            setWeather(res)
        })
        .catch(err => alert(err))
        //should clear the input; not working??
        setLocation('')
    }

    return (
        <div className="weather">
            {/* how do you get the text to appear as one and not by letter? */}
            <h3>What's the weather like in {location ? location[0].toUpperCase() + location.slice(1) : "..."}?</h3>
            <input type='text' onChange={handleInput} placeholder="Enter a location..."></input>
            <input type='submit' value='Get Weather' onClick={handleClick}></input>
        </div>
    )
}

export default Weather;