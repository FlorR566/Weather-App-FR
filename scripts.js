"use strict";

const apiKey = "0d98bc0fd808960695ebd65c3d1831f8";
const apiUrl =
	"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const input = document.getElementById("searchInput");
const button = document.getElementById("searchButton");

async function checkWeather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	document.body.className = ""; // Borra clases anteriores

	if (response.status == 404) {
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	} else {
		var data = await response.json();

		document.querySelector(".city").innerHTML = data.name;
		document.querySelector(".temp").innerHTML =
			Math.round(data.main.temp) + "°c";
		document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
		document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

		if (data.weather[0].main == "Drizzle") {
			weatherIcon.src = "images/drizzle.png";
			document.body.classList.add("drizzle");
		} else if (data.weather[0].main == "Mist") {
			weatherIcon.src = "images/mist.png";
			document.body.classList.add("mist");
		} else if (data.weather[0].main == "Rain") {
			weatherIcon.src = "images/rain.png";
			document.body.classList.add("rain");
		} else if (data.weather[0].main == "Clouds") {
			weatherIcon.src = "images/clouds.png";
			document.body.classList.add("clouds");
		} else if (data.weather[0].main == "Clear") {
			weatherIcon.src = "images/clear.png";
			document.body.classList.add("clear");
		} else if (data.weather[0].main == "Snow") {
			weatherIcon.src = "images/snow.png";
			document.body.classList.add("snow");
			document.querySelector(".titlePage").style.color = "#000000";
		}

		document.querySelector(".weather").style.display = "block";
		document.querySelector(".error").style.display = "none";
	}
}

searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value);
});

// Formula para eliminar los estilos aplicados apenas empezamos a borrar la ciudad
input.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		event.preventDefault(); // Previene Enter
		const button = document.querySelector(".search button");
		if (button) button.click();
	} else {
		document.body.className = ""; // Borra clases anteriores
		document.querySelector(".weather").style.display = "none"; // Esconde los datos de la card
		document.querySelector(".titlePage").style.color = "#dbe4ff"; // Supuestamente cambia el color del título.
		// Cualquier otra tecla (incluye Delete, Backspace, letras, etc.)
		const error = document.querySelector(".error");
		if (error) error.style.display = "none";
	}
});

// const h1 = document.querySelector("h1");
// console.log(h1); // ¿es null o existe?

// if (h1) {
// 	h1.classList.remove("algo");
// 	h1.classList.add("highlight");
// } else {
// 	console.warn("No se encontró el h1");
// }
