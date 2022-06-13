const DisplayCurrent = ({weather}) => {
    let img = ''
    if(Object.keys(weather).length !== 0 && weather.current_condition[0].FeelsLikeF >= 65){
        //sunny icon
        img = 'https://icons-for-free.com/iconfiles/png/512/sunny+temperature+weather+icon-1320196637430890623.png'
    }else{
        img = 'https://flyclipart.com/thumb2/partly-cloudy-day-partly-cloudy-anticyclone-weather-forecast-119979.png'
    } 
    
    
    // else if(Object.keys(weather).length !== 0 && weather.weather[0].hourly[0].cloudcover > 30){
    //     //cloudy icon
    //     img = 'https://w7.pngwing.com/pngs/77/936/png-transparent-weather-forecasting-weather-map-computer-icons-sunny-clouds-text-weather-forecasting-meteorology.png'
    // }else if(Object.keys(weather).length !== 0 && weather.weather[0].hourly[0].chanceofrain > 30){
    //     //rain icon
    //     img = 'https://image.pngaaa.com/623/1027623-middle.png'
    // }else if(Object.keys(weather).length !== 0 && weather.weather[0].hourly[0].chanceofsnow > 30){
    //     //snow icon
    //     img = 'https://www.nicepng.com/png/detail/127-1278067_weather-snow-icon.png'
    // }else if(Object.keys(weather).length !== 0 && weather.weather[0].hourly[0].chanceofthunder > 30){
    //     //thunder icon
    //     img = 'https://www.pngfind.com/pngs/m/678-6786410_simple-weather-icons-mixed-rain-and-thunderstorms-svg.png'
    // }

    //Object.keys returns an array of all the keys within an object
    if(Object.keys(weather).length !== 0){
        return (
            <div className="current">
                <img src={img} alt="weather-icon"/>
                <p><span>Area:</span> {weather.nearest_area[0].areaName[0].value}</p>
                <p><span>Region:</span> {weather.nearest_area[0].region[0].value}</p>
                <p><span>Country:</span> {weather.nearest_area[0].country[0].value}</p>
                <p><span>Currently:</span> Feels like {weather.current_condition[0].FeelsLikeF}{'\u00b0'}F</p>
            </div>
        )
    } else{
        return (
            <div className="current">
                <p>Choose a location to view the weather.</p>
            </div>
        )
    }
}

export default DisplayCurrent;