import { CityInterface } from '../../../models/CityInterface';

export enum CitiesEnum {
  SET_SELECTABLE_CITY_INFO = '@@cities/SET_SELECTABLE_CITY_INFO',
  SET_CITIES = '@@cities/SET_CITIES',
  SET_LOADING = '@@cities/SET_LOADING',
  SET_ERROR = '@@cities/SET_ERROR',
}

export interface CitiesState {
  status: 'idle' | 'loading' | 'rejected' | 'loaded';
  error: null | Error;
  cities: CityInterface[];
  selectableCityInfo: {
    name: string;
    latitude: number;
    longitude: number;
  };
}

interface SetCitiesAction {
  type: CitiesEnum.SET_CITIES;
  payload: CityInterface[];
}

interface SetLoadingAction {
  type: CitiesEnum.SET_LOADING;
  payload: 'idle' | 'loading' | 'rejected';
}

interface SetErrorAction {
  type: CitiesEnum.SET_ERROR;
  payload: Error | null;
}

interface SetSelectableCityInfo {
  type: CitiesEnum.SET_SELECTABLE_CITY_INFO;
  payload: {
    name: string;
    latitude: number;
    longitude: number;
  };
}

export type CitiesAction =
  | SetCitiesAction
  | SetLoadingAction
  | SetErrorAction
  | SetSelectableCityInfo;
