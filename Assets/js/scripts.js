const apiKey = '106663c2e8a74900868104220232008'; // Replace with your actual API key

document.getElementById('getWeatherBtn').addEventListener('click', async () => {
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');
    
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=106663c2e8a74900868104220232008&q=${cityInput}`);
        const data = await response.json();
        const temperatureCelsius = data.current.temp_c;
        const temperatureFahrenheit = data.current.temp_f;
        const windSpeed = data.current.wind_kph;
        const precipiation = data.current.precip_mm;
        const weatherIcon = data.current.condition.icon
        weatherInfo.innerHTML = `<p>TemperatureC: ${temperatureCelsius}°C</p><p>windSpeed: ${windSpeed}</p> <p>TemperatureF: ${temperatureFahrenheit}</p> <p>precipitation: ${precipiation}mm</p> <p>Icon: <img src= "${weatherIcon}"</p> `;
    } catch (error) {
        weatherInfo.innerHTML = '<p>Unable to fetch weather data</p>';
    }
});