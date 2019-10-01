const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoibHVpemFwcmF0YSIsImEiOiJjamlydDNxemwxbTE0M3ZvNzBjbDNsMzE1In0.5utVxIlDtjLllWCu79joxA`;

  console.log(url);

  request({ url: url, json: true }, (error, response) => {
    if (error)
      return callback("Unable to connect to location services!", undefined);

    if (!response.body.features || response.body.features.length === 0)
      return callback(
        "Unable to find location. Try another search.",
        undefined
      );

    const { center, place_name } = response.body.features[0];

    return callback(undefined, {
      latitude: center[0],
      longitude: center[1],
      location: place_name
    });
  });
};

module.exports = geocode;
