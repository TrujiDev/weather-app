const container = document.querySelector('.container');
const result = document.querySelector('#result');
const form = document.querySelector('#form');

window.addEventListener('load', () => {
	form.addEventListener('submit', searchWeather);
});

/**
 * Function to search weather information based on the provided city and country.
 * @param {Event} event - The event object.
 */
function searchWeather(event) {
	event.preventDefault();

	const city = document.querySelector('#city').value;
	const country = document.querySelector('#country').value;

	if (city === '' || country === '') {
		showError('All fields are required');
		return;
	}

	// Consult API
	consultAPI(city, country);
}

/**
 * Consults the OpenWeatherMap API to retrieve weather data for a specific city and country.
 * @param {string} city - The name of the city.
 * @param {string} country - The name of the country.
 */
function consultAPI(city, country) {
	const appId = '6c7d35566bf62a26ee9c0ce600f27cdc';
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

	spinner();

	fetch(url)
		.then(response => response.json())
		.then(data => {
			clearHTML();
			if (data.cod === '404') {
				showError('City not found');
				return;
			}

			// Print the result
			showWeather(data);
		});
}

/**
 * Displays weather information on the webpage.
 * 
 * @param {Object} data - The weather data object.
 */
function showWeather(data) {
	const {
		name,
		main: { temp, temp_max, temp_min },
	} = data;

	// Convert Kelvin to Centigrade
	const centigrade = kelvinToCentigrade(temp);
	const max = kelvinToCentigrade(temp_max);
	const min = kelvinToCentigrade(temp_min);

	const cityName = document.createElement('P');
	cityName.innerHTML = `Weather in ${name}`;
	cityName.classList.add('font-bold', 'text-2xl');

	const current = document.createElement('P');
	current.innerHTML = `${centigrade} &#8451;`;
	current.classList.add('font-bold', 'text-6xl');

	const tempMax = document.createElement('P');
	tempMax.innerHTML = `Max: ${max} &#8451;`;
	tempMax.classList.add('text-xl');

	const tempMin = document.createElement('P');
	tempMin.innerHTML = `Min: ${min} &#8451;`;
	tempMin.classList.add('text-xl');

	const resultDiv = document.createElement('DIV');
	resultDiv.classList.add('text-center', 'text-white');
	resultDiv.appendChild(cityName);
	resultDiv.appendChild(current);
	resultDiv.appendChild(tempMax);
	resultDiv.appendChild(tempMin);

	result.appendChild(resultDiv);
}

/**
 * Converts temperature in Kelvin to Centigrade.
 * @param {number} degrees - The temperature in Kelvin.
 * @returns {number} - The temperature in Centigrade.
 */
const kelvinToCentigrade = degrees => parseInt(degrees - 273.15);

/**
 * Displays an error message on the page.
 *
 * @param {string} message - The error message to be displayed.
 */
function showError(message) {
	const alert = document.querySelector('.bg-red-100');

	if (!alert) {
		const alert = document.createElement('DIV');
		alert.classList.add(
			'bg-red-100',
			'border-red-400',
			'text-red-700',
			'px-4',
			'py-3',
			'rounded',
			'max-w-md',
			'mx-auto',
			'mt-6',
			'text-center'
		);

		alert.innerHTML = `
      <strong class="font-bold">Error!</strong>
      <span class="block">${message}</span>
    `;

		container.appendChild(alert);

		setTimeout(() => {
			alert.remove();
		}, 3000);
	}
}

/**
 * Displays a spinner on the page.
 */
function spinner() {
	clearHTML();

	const divSpinner = document.createElement('DIV');
	divSpinner.classList.add('sk-fading-circle');

	divSpinner.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>`;

	result.appendChild(divSpinner);
}

/**
 * Clears the HTML content of the 'result' element.
 */
function clearHTML() {
	while (result.firstChild) {
		result.removeChild(result.firstChild);
	}
}
