// api key
const API_KEY = `037746205efd6e063383c0c290b74d31`;
// getting the input value and api result
const weatherSearch = () => {
    const getCityInput = document.getElementById('get-input-value');
    const cityName = getCityInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data));

}
// common function to add innertext
const innerText = (idName, text) => {
    document.getElementById(idName).innerText = text;
}

// updating the result
const displayWeather = (tempData) => {
    const imgUrl = `http://openweathermap.org/img/wn/${tempData.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-img');
    imgIcon.setAttribute('src', imgUrl);
    innerText('city-name', tempData.name);
    innerText('city-temp', tempData.main.temp);
    innerText('city-weather', tempData.weather[0].main);
}