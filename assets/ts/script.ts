// API KEY: 93c71cac1fd4a57c64cd081205620eea
import OpenWeatherAPI from "openweather-api-node";

let weather = new OpenWeatherAPI({
    key: "93c71cac1fd4a57c64cd081205620eea",
    lang: "en",
    locationName: "Milwaukee",
    units: "imperial"
});

function displayTemp(){
    weather.getCurrent().then((value) => {alert(value)});
}