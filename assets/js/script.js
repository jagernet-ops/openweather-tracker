"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// API KEY: 93c71cac1fd4a57c64cd081205620eea
var openweather_api_node_1 = require("openweather-api-node");
var weather = new openweather_api_node_1.default({
    key: "93c71cac1fd4a57c64cd081205620eea",
    lang: "en",
    locationName: "Milwaukee",
    units: "imperial"
});
function displayTemp() {
    weather.getCurrent().then(function (value) { alert(value); });
}
