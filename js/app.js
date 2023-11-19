const container = document.querySelector('.container');
const result = document.querySelector('#result');
const form = document.querySelector('#form');

window.addEventListener('load', () => {
	form.addEventListener('submit', searchWeather);
});

function searchWeather(event) {
	event.preventDefault();

	const city = document.querySelector('#city').value;
	const country = document.querySelector('#country').value;

	if (city === '' || country === '') {
		showError('All fields are required');
		return;
	}
}

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
