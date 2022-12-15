import { CitiesEnum } from './cities-types';
import { CityInterface } from '../../../models/CityInterface';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { RootState } from '../../index';
import { Action } from 'redux';
import { CityDataInterface, ExtraArgumentsInterface } from '../root-types';
import { AxiosResponse } from 'axios';

export const setCities = (cities: CityInterface[]) => ({
  type: CitiesEnum.SET_CITIES,
  payload: cities,
});

export const setSelectableCityInfo = ({
  name,
  latitude,
  longitude,
}: {
  name: string;
  latitude: number;
  longitude: number;
}) => ({
  type: CitiesEnum.SET_SELECTABLE_CITY_INFO,
  payload: {
    name: name,
    latitude: latitude,
    longitude: longitude,
  },
});

export const setLoading = () => ({
  type: CitiesEnum.SET_LOADING,
});

export const setError = (error: Error) => ({
  type: CitiesEnum.SET_ERROR,
  payload: error,
});

export const loadCitiesBySearch =
  (name: string): ThunkAction<void, RootState, any, Action> =>
  (
    dispatch: ThunkDispatch<RootState, void, Action>,
    getState: () => RootState,
    { axios, api }: ExtraArgumentsInterface,
  ) => {
    dispatch(setLoading());
    axios
      .get(api.getCitiesByName(name))
      .then(({ data }: AxiosResponse<CityDataInterface>) => {
        return dispatch(setCities(data.results));
      })
      .catch((error: Error) => dispatch(setError(error)));
  };
