import { CitiesAction, CitiesEnum, CitiesState } from './cities-types';

const initialState: CitiesState = {
  status: 'idle',
  error: null,
  cities: [],
  selectableCityInfo: {
    name: '',
    latitude: 0,
    longitude: 0,
  },
};

export const citiesReducer = (
  state: CitiesState = initialState,
  { type, payload }: CitiesAction,
): CitiesState => {
  switch (type) {
    case CitiesEnum.SET_LOADING:
      return { ...state, error: null, status: 'loading' };
    case CitiesEnum.SET_ERROR:
      return { ...state, error: payload, status: 'rejected' };
    case CitiesEnum.SET_SELECTABLE_CITY_INFO:
      return {
        ...state,
        selectableCityInfo: {
          name: payload.name,
          latitude: payload.latitude,
          longitude: payload.longitude,
        },
        status: 'idle',
        error: null,
      };
    case CitiesEnum.SET_CITIES:
      return { ...state, error: null, cities: payload, status: 'loaded' };
    default:
      return state;
  }
};
