//Fetch function to get weather info from wttr API
export const getWeather = (location) => {
    return fetch(`https://wttr.in/${location}?format=j1`)
    .then((res) => res.json())
}