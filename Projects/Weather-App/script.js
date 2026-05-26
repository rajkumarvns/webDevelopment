const API_KEY = "Use your API...";

async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();

  if (cityName === "") {
    alert("Please enter city name");

    return;
  }

  try {
    const { Lattitude, Longitude } = await getGeoLocation(cityName);

    const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Lattitude}&lon=${Longitude}&appid=${API_KEY}`;

    const response = await fetch(WEATHER_API);

    const data = await response.json();

    const temperature = data.main.temp - 273.15;

    document.getElementById("Temperature").innerText = temperature.toFixed(1);

    document.getElementById("cityText").innerText = data.name;

    document.getElementById("humidity").innerText = data.main.humidity + "%";

    document.getElementById("wind").innerText = data.wind.speed + " km/h";
  } catch (error) {
    alert("City not found");

    console.log(error);
  }
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(GEO_LOC_API);

  const data = await response.json();

  const Lattitude = data[0].lat;

  const Longitude = data[0].lon;

  return {
    Lattitude,
    Longitude,
  };
}


