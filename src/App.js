//React methods
import React, {useState} from "react";
//Components
import Weather from "./components/Weather";
import DisplayCurrent from "./components/DisplayCurrent";
import PreviousSearches from "./components/PreviousSearches";
import DisplayThreeDay from "./components/DisplayThreeDay";
//Styling
import "./App.css"

const App = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});
  console.log(weather)

  return (
    <div className="App">
      <header className="App-header">
       <h1>Weather App</h1>
      </header>
      <Weather location={location} setLocation={setLocation} setWeather={setWeather}/>
      <DisplayCurrent weather={weather} />
      <DisplayThreeDay weather={weather}/>
      <PreviousSearches location={location} weather={weather}/>
    </div>
  );
}

export default App;
