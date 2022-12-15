const searchButton = document.querySelector(".search");
const mainContainer = document.querySelector(".main-container")

const getWeather = async () => {
    const weatherInput = document.querySelector(".weather").value;
    const weatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${weatherInput}&appid=ff1cadec65d9f10c3aafc2a01b14612c`
        );
        const json = await weatherData.json();
        const cityHeader = document.createElement("h1");
        cityHeader.innerText = `It's ${json.main.temp} F in ${json.name}`;
        mainContainer.append(cityHeader)
};

searchButton.addEventListener("click", getWeather);