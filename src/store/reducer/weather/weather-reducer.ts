import { WeatherActions, WeatherEnum, WeatherState } from './weather-types';

const initialState: WeatherState = {
  status: 'idle',
  error: null,
  temperature: [],
  weatherItems: [],
};

export const weatherReducer = (
  state: WeatherState = initialState,
  { type, payload }: WeatherActions,
): WeatherState => {
  switch (type) {
    case WeatherEnum.SET_LOADING:
      return { ...state, error: null, status: 'loading' };
    case WeatherEnum.SET_ERROR:
      return { ...state, error: payload, temperature: [], status: 'rejected' };
    case WeatherEnum.SET_WEATHER_ITEMS:
      return {
        ...state,
        weatherItems: [
          ...state.weatherItems,
          { id: payload.id, name: payload.name, temperature: payload.temperature },
        ],
        status: 'loaded',
        error: null,
      };
    default:
      return state;
  }
};
