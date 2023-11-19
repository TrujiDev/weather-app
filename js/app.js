const container = document.querySelector('.container');
const result = document.querySelector('#result');
const form = document.querySelector('#form');

window.addEventListener('load', () => {
	form.addEventListener('submit', searchWeather);
});

/**
 * Performs a weather search based on the provided city and country.
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

	fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === '404') {
        showError('City not found');
        return;
      }

      // Print the result
      showWeather(data);
    });
}

function showWeather(data) { }

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
