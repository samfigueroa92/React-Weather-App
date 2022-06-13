const DisplayThreeDay = ({weather}) => {
    if(Object.keys(weather).length !== 0){
        return (
            <div className="three-day">
                <section className="today">
                <h4>Today</h4>
                <p>Average Temperature: {weather.weather[0].avgtempF}{'\u00B0'}F</p>
                <p>Max Temperature: {weather.weather[0].maxtempF}{'\u00B0'}F</p>
                <p>Min Temperature: {weather.weather[0].mintempF}{'\u00B0'}F</p>
                </section>
                <section className="tomorrow">
                <h4>Tomorrow</h4>
                <p>Average Temperature: {weather.weather[1].avgtempF}{'\u00B0'}F</p>
                <p>Max Temperature: {weather.weather[1].maxtempF}{'\u00B0'}F</p>
                <p>Min Temperature: {weather.weather[1].mintempF}{'\u00B0'}F</p>
                </section>
                <section className="day-after">
                <h4>Day After Tomorrow</h4>
                <p>Average Temperature: {weather.weather[2].avgtempF}{'\u00B0'}F</p>
                <p>Max Temperature: {weather.weather[2].maxtempF}{'\u00B0'}F</p>
                <p>Min Temperature: {weather.weather[2].mintempF}{'\u00B0'}F</p>
                </section>
            </div>
        )
    }
}

export default DisplayThreeDay;