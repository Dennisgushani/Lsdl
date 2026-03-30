// Weather Dashboard JavaScript Code

// Function to fetch weather data
async function fetchWeather(city) {
    const apiKey = 'YOUR_API_KEY';
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    if (!response.ok) {
        throw new Error('Weather data not found.');
    }
    return response.json();
}

// Function to render weather data
function renderWeather(data) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
        <h2>${data.name} Weather</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Condition: ${data.weather[0].description}</p>
    `;
}

// Event listener for form submission
document.getElementById('weather-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = document.getElementById('city-input').value;
    try {
        const weatherData = await fetchWeather(city);
        renderWeather(weatherData);
    } catch (error) {
        console.error(error);
    }
});

// Add any additional functionality here