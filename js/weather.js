const apiKey = "9cd40f8424d05abd9edf511e9a0d5c9c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".input-group input");
const searchBtn = document.querySelector(".input-group button");
const errorMessage = document.getElementById("error-message");

async function checkWeather(city) {
    try {
        const response = await fetch(apiURL + city + `&appid=${apiKey}`);
        var data = await response.json();

        if (response.ok) {
            errorMessage.style.display = "none";

            const city = data.name;
            const country = data.sys.country;
            const lat = data.coord.lat;
            const lon = data.coord.lon;
            const geoResponse = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`);
            const geoData = await geoResponse.json();
            
            const state = geoData[0].state || '';

            document.querySelector(".location").innerHTML = `${city}, ${state} ${country}`;
            document.querySelector(".temperature").innerHTML = data.main.temp;
            document.querySelector(".temperature-max").innerHTML = data.main.temp_max;
            document.querySelector(".temperature-min").innerHTML = data.main.temp_min;
            document.querySelector(".humidity").innerHTML = data.main.humidity;
            document.querySelector(".wind-speed").innerHTML = data.wind.speed;
            document.querySelector(".sea-level").innerHTML = data.main.sea_level;

            document.getElementById("map-frame").src = `https://openweathermap.org/weathermap?basemap=map&cities=true&layer=radar&lat=${lat}&lon=${lon}&zoom=10`;
        } else {
            throw new Error("Invalid city name");
        }
    } catch (error) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Please enter a valid city name.";
    }
}


searchBtn.addEventListener("click", () => {
    if (searchBox.value) {
        checkWeather(searchBox.value);
    } else {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "City name cannot be empty.";
    }
});
