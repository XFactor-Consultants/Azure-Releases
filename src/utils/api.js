// If this gets abused we will have to disable it
const OWM_KEY = "d45ec2af74a1c62e2f24a14ebe22ae63";

export const fetchWeather = async (lat, lon) => {
  const base = new URL("https://api.openweathermap.org/data/2.5/onecall?");
  const resp = await fetch(
    `${base}${new URLSearchParams({
      lat,
      lon,
      appid: OWM_KEY,
      units: "imperial",
    })}`
  );
  return resp.json();
};

export const search = async (q) => {
  const base = new URL("https://api.openweathermap.org/geo/1.0/direct?");
  const resp = await fetch(
    `${base}${new URLSearchParams({
      q,
      limit: 3,
      appid: OWM_KEY,
    })}`
  );
  return resp.json();
  //?q={city name},{state code},{country code}&limit={limit}&appid={API key}";
};
