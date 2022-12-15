import { Axios } from 'axios';
import { CityInterface } from '../../models/CityInterface';

export interface ApiInterface {
  GEOCODING_BASE_URL: string;
  getCitiesByName: (name: string) => string;
  WEATHER_BASE_URL: string;
  getCityWeatherByCoords: (latitude: number, longitude: number) => string;
}

export interface ExtraArgumentsInterface {
  axios: Axios;
  api: ApiInterface;
}

export interface CityDataInterface {
  results: CityInterface[];
}
