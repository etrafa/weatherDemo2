const getWeatherInformationHourly = (city) => {
  fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},&key=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // todayMinTemperature.textContent = `${Math.round(data.data[0].min_temp)}°`;
      // firstDayMinTemperatureEl.textContent = `${Math.round(
      //   data.data[1].min_temp
      // )}°`;
      // secondDayMinTemperatureEl.textContent = `${Math.round(
      //   data.data[2].min_temp
      // )}°`;
      // thirdDayMinTemperatureEl.textContent = `${Math.round(
      //   data.data[3].min_temp
      // )}°`;
      // fourthDayMinTemperatureEl.textContent = `${Math.round(
      //   data.data[4].min_temp
      // )}°`;
      // fifthDayMinTemperatureEl.textContent = `${Math.round(
      //   data.data[5].min_temp
      // )}°`;
      // sixthDayMinTemperatureEl.textContent = `${Math.round(
      //   data.data[6].min_temp
      // )}°`;
      // seventhDayMinTemperatureEl.textContent = `${Math.round(
      //   data.data[7].min_temp
      // )}°`;
      // eighthDayMinTemperatureEl.textContent = `${Math.round(
      //   data.data[8].min_temp
      // )}°`;
      // ninethDayMinTemperatureEl.textContent = `${Math.round(
      //   data.data[9].min_temp
      // )}°`;
      // todayMaxTemperature.textContent = `${Math.round(data.data[0].max_temp)}°`;
      // firstDayMaxTemperatureEl.textContent = `${Math.round(
      //   data.data[1].max_temp
      // )}°`;
      // secondDayMinTemperatureEl.textContent = `${Math.round(
      //   data.data[2].max_temp
      // )}°`;
      // thirdDayMaxTemperatureEl.textContent = `${Math.round(
      //   data.data[3].max_temp
      // )}°`;
      // fourthDayMaxTemperatureEl.textContent = `${Math.round(
      //   data.data[4].max_temp
      // )}°`;
      // fifthDayMaxTemperatureEl.textContent = `${Math.round(
      //   data.data[5].max_temp
      // )}°`;
      // sixthDayMaxTemperatureEl.textContent = `${Math.round(
      //   data.data[6].max_temp
      // )}°`;
      // seventhDayMaxTemperatureEl.textContent = `${Math.round(
      //   data.data[7].max_temp
      // )}°`;
      // eighthDayMaxTemperatureEl.textContent = `${Math.round(
      //   data.data[8].max_temp
      // )}°`;
      // ninethDayMaxTemperatureEl.textContent = `${Math.round(
      //   data.data[9].max_temp
      // )}°`;
      // cityNameEl.textContent = data.city_name;
      // mainTemperatureEl.textContent = `${Math.round(data.data[0].temp)}°`;
      // mainWeatherConditionEl.textContent = data.data[0].weather.description;
      // mainMaxTemperatureEl.textContent = `${Math.round(data.data[0].max_temp)}`;
      // mainMinTemperatureEl.textContent = `${Math.round(data.data[0].min_temp)}`;
      // sunriseValueEl.textContent = data.data[0].sunrise_ts;
      // sunsetValueEl.textContent = data.data[0].sunset_ts;
      // visibilityValueEl.textContent = `${Math.round(data.data[0].vis)} km`;
      // windValueEl.textContent = `${data.data[0].wind_spd} km/h`;
      // pressureValueEl.textContent = `${Math.round(data.data[0].pres)}`;
      // humidityValueEl.textContent = data.data[0].rh;
      // feelsLikeValueEL.textContent = `${Math.round(data.data[0].temp)}°`;
      // console.log(data.data[0].weather.description);
    });
};

getWeatherInformationHourly("istanbul");

export {
  cityNameEl,
  mainTemperatureEl,
  mainWeatherConditionEl,
  mainMaxTemperatureEl,
  mainMinTemperatureEl,
  mainWeatherImage,
  todayWeatherImageEl,
  todayMinTemperature,
  todayMaxTemperature,
  firstDayNameEl,
  firstDayWeatherImageEl,
  firstDayMinTemperatureEl,
  firstDayMaxTemperatureEl,
  secondDayNameEl,
  secondDayWeatherImageEl,
  secondDayMinTemperatureEl,
  secondDayMaxTemperatureEl,
  thirdDayNameEl,
  thirdDayWeatherImageEl,
  thirdDayMinTemperatureEl,
  thirdDayMaxTemperatureEl,
  fourthDayNameEl,
  fourthDayWeatherImageEl,
  fourthDayMinTemperatureEl,
  fourthDayMaxTemperatureEl,
  fifthDayNameEl,
  fifthDayWeatherImageEl,
  fifthDayMinTemperatureEl,
  fifthDayMaxTemperatureEl,
  sixthDayNameEl,
  sixthDayWeatherImageEl,
  sixthDayMinTemperatureEl,
  sixthDayMaxTemperatureEl,
  seventhDayNameEl,
  seventhDayWeatherImageEl,
  seventhDayMinTemperatureEl,
  seventhDayMaxTemperatureEl,
  eighthDayNameEl,
  eighthDayWeatherImageEl,
  eighthDayMinTemperatureEl,
  eighthDayMaxTemperatureEl,
  ninethDayNameEl,
  ninethDayWeatherImageEl,
  ninethDayMinTemperatureEl,
  ninethDayMaxTemperatureEl,
  sunriseValueEl,
  sunsetValueEl,
  visibilityValueEl,
  windValueEl,
  pressureValueEl,
  humidityValueEl,
  feelsLikeValueEL,
};
