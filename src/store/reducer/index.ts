import { citiesReducer } from './cities/cities-reducer';
import { controlsReducer } from './controls/controls-reducer';
import { weatherReducer } from './weather/weather-reducer';

export default {
  cities: citiesReducer,
  controls: controlsReducer,
  weather: weatherReducer,
};
