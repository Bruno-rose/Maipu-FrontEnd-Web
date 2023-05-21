import axios from "axios";

export const constGenericQuery = (params) => {
  return axios.get(params.endpoint, params.params);
};

export const getLongitudeLatitude = async (calle, numero, comuna) => {
  const apiKey = "b142c27558554720853fd441d3dbd7ab";
  const address = `${calle} ${numero}, ${comuna}, Region Metropolitana, Chile`;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    address
  )}&key=${apiKey}&countrycode=cl`;

  return axios
    .get(url)
    .then((response) => {
      // Parse the JSON response
      const data = response.data;

      // Extract the latitude and longitude coordinates
      if (data.results.length > 0) {
        const latitude = data.results[0].geometry.lat;
        const longitude = data.results[0].geometry.lng;
        return [latitude, longitude];
      } else {
        console.log("No results found.");
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};
