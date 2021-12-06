"using strict";
const apiKey = "bdf242b5f8a7479e803c6946acddf02f";

const openWeatherApiKey = "2a0334cc025c20d71ecdbe65179ae11f";

const cityNameEl = document.querySelector(".city__name");
const mainTemperatureEl = document.querySelector(".main__temperature");
const mainWeatherConditionEl = document.querySelector(
  ".main__weather__condition"
);
const nowTextEl = document.querySelector(".now__text");
const firstHourTextEl = document.querySelector(".firstHour__text");
const secondHourTextEl = document.querySelector(".secondHour__text");
const thirdHourTextEl = document.querySelector(".thirdHour__text");
const fourthHourTextEl = document.querySelector(".fourthHour__text");
const fifthHourTextEl = document.querySelector(".fifthHour__text");
const sixthHourTextEl = document.querySelector(".sixthHour__text");
const seventhHourTextEl = document.querySelector(".seventhHour__text");
const eightHourTextEl = document.querySelector(".eightHour__text");
const ninethHourTextEl = document.querySelector(".ninethHour__text");
const nowValueEl = document.querySelector(".now__value");
const firstHourValueEl = document.querySelector(".firstHour__value");
const secondHourValueEl = document.querySelector(".secondHour__value");
const thirdHourValueEl = document.querySelector(".thirdHour__value");
const fourthHourValueEl = document.querySelector(".fourthHour__value");
const fifthHourValueEl = document.querySelector(".fifthHour__value");
const sixthHourValueEl = document.querySelector(".sixthHour__value");
const seventhHourValueEl = document.querySelector(".seventhHour__value");
const eightHourValueEl = document.querySelector(".eightHour__value");
const ninethHourValueEl = document.querySelector(".ninethHour__value");

const mainMaxTemperatureEl = document.querySelector(".main__max__temperature");
const mainMinTemperatureEl = document.querySelector(".main__min__temperature");
const mainWeatherImage = document.querySelector(".mainWeatherImage");
const todayWeatherImageEl = document.querySelector(".todayWeatherImage");
const todayMinTemperature = document.querySelector(".today__min__temperature");
const todayMaxTemperature = document.querySelector(".today__max__temperature");
const firstDayNameEl = document.querySelector(".firstDayName");
const firstDayWeatherImageEl = document.querySelector(".firstDayWeatherImage");
const firstDayMinTemperatureEl = document.querySelector(
  ".firstDayMinTemperature"
);
const firstDayMaxTemperatureEl = document.querySelector(
  ".firstDayMaxTemperature"
);
const secondDayNameEl = document.querySelector(".secondDayName");
const secondDayWeatherImageEl = document.querySelector(
  ".secondDayWeatherImage"
);
const secondDayMinTemperatureEl = document.querySelector(
  ".secondDayMinTemperature"
);
const secondDayMaxTemperatureEl = document.querySelector(
  ".secondDayMaxTemperature"
);
const thirdDayNameEl = document.querySelector(".thirdDayName");
const thirdDayWeatherImageEl = document.querySelector(".thirdDayWeatherImage");
const thirdDayMinTemperatureEl = document.querySelector(
  ".thirdDayMinTemperature"
);
const thirdDayMaxTemperatureEl = document.querySelector(
  ".thirdDayMaxTemperature"
);
const fourthDayNameEl = document.querySelector(".fourthDayName");
const fourthDayWeatherImageEl = document.querySelector(".fourtDayWeatherImage");
const fourthDayMinTemperatureEl = document.querySelector(
  ".fourthDayMinTemperature"
);
const fourthDayMaxTemperatureEl = document.querySelector(
  ".fourthDayMaxTemperature"
);
const fifthDayNameEl = document.querySelector(".fifthDayName");
const fifthDayWeatherImageEl = document.querySelector(".fifthDayWeatherImage");
const fifthDayMinTemperatureEl = document.querySelector(
  ".fifthDayMinTemperature"
);
const fifthDayMaxTemperatureEl = document.querySelector(
  ".fifthDayMaxTemperature"
);
const sixthDayNameEl = document.querySelector(".sixthDayName");
const sixthDayWeatherImageEl = document.querySelector(".sixthDayWeatherImage");
const sixthDayMinTemperatureEl = document.querySelector(
  ".sixthDayMinTemperature"
);
const sixthDayMaxTemperatureEl = document.querySelector(
  ".sixthDayMaxTemperature"
);
const seventhDayNameEl = document.querySelector(".seventhDayName");
const seventhDayWeatherImageEl = document.querySelector(
  ".seventhDayWeatherImage"
);
const seventhDayMinTemperatureEl = document.querySelector(
  ".seventhDayMinTemperature"
);
const seventhDayMaxTemperatureEl = document.querySelector(
  ".seventhDayMaxTemperature"
);
const eighthDayNameEl = document.querySelector(".eighthDayName");
const eighthDayWeatherImageEl = document.querySelector(
  ".eighthDayWeatherImage"
);
const eighthDayMinTemperatureEl = document.querySelector(
  ".eighthDayMinTemperature"
);
const eighthDayMaxTemperatureEl = document.querySelector(
  ".eighthDayMaxTemperature"
);
const ninethDayNameEl = document.querySelector(".ninethDayName");
const ninethDayWeatherImageEl = document.querySelector(
  ".ninethDayWeatherImage"
);
const ninethDayMinTemperatureEl = document.querySelector(
  ".ninethDayMinTemperature"
);
const ninethDayMaxTemperatureEl = document.querySelector(
  ".ninethDayMaxTemperature"
);
const sunriseValueEl = document.querySelector(".sunrise__value");
const sunsetValueEl = document.querySelector(".sunset__value");
const visibilityValueEl = document.querySelector(".visibility__value");
const windValueEl = document.querySelector(".wind__value");
const pressureValueEl = document.querySelector(".pressure__value");
const humidityValueEl = document.querySelector(".humidity__value");
const feelsLikeValueEL = document.querySelector(".feels__like__value");

const nowImageEl = document.querySelector(".now__image");
const firstHourImageEl = document.querySelector(".firstHour__image");
const secondHourImageEl = document.querySelector(".secondHour__image");
const thirdHourImageEl = document.querySelector(".thirdHour__image");
const fourthHourImageEl = document.querySelector(".fourthHour__image");
const fifthHourImageEl = document.querySelector(".fifthHour__image");
const sixthHourImageEl = document.querySelector(".sixthHour__image");
const seventhHourImageEl = document.querySelector(".seventhHour__image");
const eightHourImageEl = document.querySelector(".eightHour__image");
const ninethHourImageEl = document.querySelector(".ninethHour__image");

const getWeatherInformationDaily = (city) => {
  fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},&key=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      todayMinTemperature.textContent = `${Math.round(data.data[0].min_temp)}°`;
      firstDayMinTemperatureEl.textContent = `${Math.round(
        data.data[1].min_temp
      )}°`;
      secondDayMinTemperatureEl.textContent = `${Math.round(
        data.data[2].min_temp
      )}°`;
      thirdDayMinTemperatureEl.textContent = `${Math.round(
        data.data[3].min_temp
      )}°`;
      fourthDayMinTemperatureEl.textContent = `${Math.round(
        data.data[4].min_temp
      )}°`;
      fifthDayMinTemperatureEl.textContent = `${Math.round(
        data.data[5].min_temp
      )}°`;
      sixthDayMinTemperatureEl.textContent = `${Math.round(
        data.data[6].min_temp
      )}°`;
      seventhDayMinTemperatureEl.textContent = `${Math.round(
        data.data[7].min_temp
      )}°`;
      eighthDayMinTemperatureEl.textContent = `${Math.round(
        data.data[8].min_temp
      )}°`;
      ninethDayMinTemperatureEl.textContent = `${Math.round(
        data.data[9].min_temp
      )}°`;
      todayMaxTemperature.textContent = `${Math.round(data.data[0].max_temp)}°`;
      firstDayMaxTemperatureEl.textContent = `${Math.round(
        data.data[1].max_temp
      )}°`;
      secondDayMinTemperatureEl.textContent = `${Math.round(
        data.data[2].max_temp
      )}°`;
      thirdDayMaxTemperatureEl.textContent = `${Math.round(
        data.data[3].max_temp
      )}°`;
      fourthDayMaxTemperatureEl.textContent = `${Math.round(
        data.data[4].max_temp
      )}°`;
      fifthDayMaxTemperatureEl.textContent = `${Math.round(
        data.data[5].max_temp
      )}°`;
      sixthDayMaxTemperatureEl.textContent = `${Math.round(
        data.data[6].max_temp
      )}°`;
      seventhDayMaxTemperatureEl.textContent = `${Math.round(
        data.data[7].max_temp
      )}°`;
      eighthDayMaxTemperatureEl.textContent = `${Math.round(
        data.data[8].max_temp
      )}°`;
      ninethDayMaxTemperatureEl.textContent = `${Math.round(
        data.data[9].max_temp
      )}°`;
      cityNameEl.textContent = data.city_name;
      mainTemperatureEl.textContent = `${Math.round(data.data[0].temp)}°`;
      nowValueEl.textContent = `${Math.round(data.data[0].temp)}°`;
      mainWeatherConditionEl.textContent = data.data[0].weather.description;
      mainMaxTemperatureEl.textContent = `H:${Math.round(
        data.data[0].max_temp
      )}°`;
      mainMinTemperatureEl.textContent = `L:${Math.round(
        data.data[0].min_temp
      )}°`;
      sunriseValueEl.textContent = data.data[0].sunrise_ts;
      sunsetValueEl.textContent = data.data[0].sunset_ts;
      visibilityValueEl.textContent = `${Math.round(data.data[0].vis)} km`;
      windValueEl.textContent = `${data.data[0].wind_spd} km/h`;
      pressureValueEl.textContent = `${Math.round(data.data[0].pres)} hPa`;
      humidityValueEl.textContent = `${data.data[0].rh} %`;
      feelsLikeValueEL.textContent = `${Math.round(data.data[0].temp)}°`;
      console.log(data.data[0].weather.description);
      mainWeatherImage.src = `./weather-api-images/${data.data[0].weather.icon}.png`;
      nowImageEl.src = `./weather-api-images/${data.data[0].weather.icon}.png`;
      firstDayWeatherImageEl.src = `./weather-api-images/${data.data[1].weather.icon}.png`;
      secondDayWeatherImageEl.src = `./weather-api-images/${data.data[2].weather.icon}.png`;
      thirdDayWeatherImageEl.src = `./weather-api-images/${data.data[3].weather.icon}.png`;
      fourthDayWeatherImageEl.src = `./weather-api-images/${data.data[4].weather.icon}.png`;
      fifthDayWeatherImageEl.src = `./weather-api-images/${data.data[5].weather.icon}.png`;
      sixthDayWeatherImageEl.src = `./weather-api-images/${data.data[6].weather.icon}.png`;
      seventhDayWeatherImageEl.src = `./weather-api-images/${data.data[7].weather.icon}.png`;
      eighthDayWeatherImageEl.src = `./weather-api-images/${data.data[8].weather.icon}.png`;
      ninethDayWeatherImageEl.src = `./weather-api-images/${data.data[9].weather.icon}.png`;
    });
};

const getInformationHourly = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${openWeatherApiKey}`
  ).then((response) =>
    response.json().then((data) => {
      console.log(data);
      firstHourTextEl.textContent = data.list[0].dt_txt.substring(11, 13);
      secondHourTextEl.textContent = data.list[1].dt_txt.substring(11, 13);
      thirdHourTextEl.textContent = data.list[2].dt_txt.substring(11, 13);
      fourthHourTextEl.textContent = data.list[3].dt_txt.substring(11, 13);
      fifthHourTextEl.textContent = data.list[4].dt_txt.substring(11, 13);
      sixthHourTextEl.textContent = data.list[5].dt_txt.substring(11, 13);
      seventhHourTextEl.textContent = data.list[6].dt_txt.substring(11, 13);
      eightHourTextEl.textContent = data.list[7].dt_txt.substring(11, 13);
      ninethHourTextEl.textContent = data.list[8].dt_txt.substring(11, 13);
      firstHourValueEl.textContent = `${Math.round(data.list[0].main.temp)}°`;
      secondHourValueEl.textContent = `${Math.round(data.list[1].main.temp)}°`;
      thirdHourValueEl.textContent = `${Math.round(data.list[2].main.temp)}°`;
      fourthHourValueEl.textContent = `${Math.round(data.list[3].main.temp)}°`;
      fifthHourValueEl.textContent = `${Math.round(data.list[4].main.temp)}°`;
      sixthHourValueEl.textContent = `${Math.round(data.list[5].main.temp)}°`;
      seventhHourValueEl.textContent = `${Math.round(data.list[6].main.temp)}°`;
      eightHourValueEl.textContent = `${Math.round(data.list[7].main.temp)}°`;
      ninethHourValueEl.textContent = `${Math.round(data.list[8].main.temp)}°`;
      firstHourImageEl.src = `./openWeather-images/${data.list[0].weather[0].icon}.png`;
      secondHourImageEl.src = `./openWeather-images/${data.list[1].weather[0].icon}.png`;
      thirdHourImageEl.src = `./openWeather-images/${data.list[2].weather[0].icon}.png`;
      fourthHourImageEl.src = `./openWeather-images/${data.list[3].weather[0].icon}.png`;
      fifthHourImageEl.src = `./openWeather-images/${data.list[4].weather[0].icon}.png`;
      sixthHourImageEl.src = `./openWeather-images/${data.list[5].weather[0].icon}.png`;
      seventhHourImageEl.src = `./openWeather-images/${data.list[6].weather[0].icon}.png`;
      eightHourImageEl.src = `./openWeather-images/${data.list[7].weather[0].icon}.png`;
      ninethHourImageEl.src = `./openWeather-images/${data.list[8].weather[0].icon}.png`;
    })
  );
};

const searchButtonEl = document.querySelector(".search__bar");
const searchInputEl = document.querySelector(".search__input");
searchButtonEl.addEventListener("click", function () {
  searchInputEl.classList.toggle("search__input");
});

const hamburgerMenuLeftEl = document.querySelector(".hamburger__menu__left");
const hamburgerMenuEl = document.querySelector(".hamburger__menu");

hamburgerMenuLeftEl.addEventListener("click", function () {
  hamburgerMenuEl.classList.toggle("hamburger__menu");
});

searchInputEl.addEventListener("click", function () {
  let userSearch = searchInputEl.value;
  getWeatherInformationDaily(userSearch);
  getInformationHourly(userSearch);
});
