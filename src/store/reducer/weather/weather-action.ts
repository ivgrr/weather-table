import { WeatherEnum } from './weather-types';
import { v4 as uuid } from 'uuid';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../index';
import { Action } from 'redux';
import { ExtraArgumentsInterface } from '../root-types';
import { WeatherInterface } from '../../../models/WeatherInterface';
import { AxiosResponse } from 'axios';

export const setError = (error: Error) => ({
  type: WeatherEnum.SET_ERROR,
  payload: error,
});

export const setLoading = () => ({
  type: WeatherEnum.SET_LOADING,
});

export const setWeatherItems = (weatherItems: {
  id: string;
  name: string;
  temperature: number[];
}) => ({
  type: WeatherEnum.SET_WEATHER_ITEMS,
  payload: weatherItems,
});

export const loadWeatherItem =
  (): ThunkAction<void, RootState, any, Action> =>
  (
    dispatch: ThunkDispatch<RootState, void, Action>,
    getState: () => RootState,
    { axios, api }: ExtraArgumentsInterface,
  ) => {
    dispatch(setLoading());
    const state = getState();
    const { name, latitude, longitude } = state.cities.selectableCityInfo;
    console.log('state,', state);
    axios
      .get(api.getCityWeatherByCoords(latitude, longitude))
      .then(({ data }: AxiosResponse<WeatherInterface>) => {
        if (latitude || longitude) {
          return dispatch(
            setWeatherItems({
              id: uuid(),
              name,
              temperature: data.hourly.temperature_2m,
            }),
          );
        }
      })
      .catch((error: Error) => dispatch(setError(error)));
  };
