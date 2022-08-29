const API_KEY = '5eaccb1d866d1ab41ea7d94135f03e95';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log('You live in', lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector('#weather span:last-child');
      const weather = document.querySelector('#weather span:first-child');

      city.innerText = data.name;
      weather.innerText = `Weather : ${data.weather[0].main} / 온도 : ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
