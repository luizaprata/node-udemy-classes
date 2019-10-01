const request = require("request");

const url =
  "https://api.darksky.net/forecast/85886e2164439f383e8e0964315ba180/37.8267,-122.4233?lang=pt";
request({ url, json: true }, (error, response) => {
  if (error) return console.log("Error DarkSky service:", error);
  console.log(response.body);
});
