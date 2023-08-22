const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9c4a14402emshe196e28000c8124p1cd420jsn5785104e2d2a",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const max_temp = document.getElementById("max_temp");
const min_temp = document.getElementById("min_temp");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const temp = document.getElementById("temp");
const wind_degrees = document.getElementById("wind_degrees");
const wind_speed = document.getElementById("wind_speed");
const Submit = document.getElementById("submit2")
const City = document.getElementById("city")

const getWeather = (City) => {
    CityName.innerHTML = City
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +City,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

Submit.addEventListener("click" , (e) =>{
    e.preventDefault();
    getWeather(City.value);
})

getWeather("Delhi")


