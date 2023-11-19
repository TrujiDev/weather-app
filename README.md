# Weather Fetch API Project

This project allows users to search for weather information based on a specific city and country using the OpenWeatherMap API. It includes a user-friendly web interface with a form for input and dynamic updates of weather data.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have the following installed:

- Web browser
- Code editor (e.g., Visual Studio Code)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/weather-fetch-api.git
```

2. Open the project in your code editor.

3. Customize the API key:

   - Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api).
   - Replace the placeholder API key in `app.js` with your actual API key.

```javascript
// Replace 'your-api-key' with your actual API key
const appId = 'your-api-key';
```

### Usage

1. Open the `index.html` file in a web browser.
2. Enter the city and select the country from the form.
3. Click the "Get Weather" button to fetch and display the weather information.

## Built With

- HTML
- CSS (Tailwind CSS)
- JavaScript

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Acknowledgments

- Thanks to [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- Special thanks to the Tailwind CSS community for the styling framework.