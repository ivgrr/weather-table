export const GEOCODING_BASE_URL = 'https://geocoding-api.open-meteo.com/v1';
export const getCitiesByName = (name: string) => `${GEOCODING_BASE_URL}/search?name=${name}`;

export const WEATHER_BASE_URL = 'https://api.open-meteo.com/v1';
export const getCityWeatherByCoords = (latitude: number, longitude: number) =>
  `${WEATHER_BASE_URL}/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&past_days=0`;
