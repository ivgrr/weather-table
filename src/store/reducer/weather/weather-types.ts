export enum WeatherEnum {
  SET_ERROR = '@@weather/SET_ERROR',
  SET_LOADING = '@@weather/SET_LOADING',
  SET_WEATHER_ITEMS = '@@weather/SET_WEATHER_ITEMS',
}

interface WeatherItemInterface {
  id: string;
  name: string;
  temperature: number[];
}

export interface WeatherState {
  status: 'idle' | 'loading' | 'loaded' | 'rejected';
  error: Error | null;
  temperature: number[];
  weatherItems: WeatherItemInterface[];
}

interface SetErrorAction {
  type: WeatherEnum.SET_ERROR;
  payload: Error;
}

interface SetLoadingAction {
  type: WeatherEnum.SET_LOADING;
  payload?: string;
}

interface SetWeatherItems {
  type: WeatherEnum.SET_WEATHER_ITEMS;
  payload: WeatherItemInterface;
}

export type WeatherActions = SetLoadingAction | SetErrorAction | SetWeatherItems;
