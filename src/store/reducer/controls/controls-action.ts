import { ControlsEnum } from './controls-types';

export const setSearch = (search: string) => ({
  type: ControlsEnum.SET_SEARCH,
  payload: search,
});

export const clearControls = () => ({
  type: ControlsEnum.CLEAR_CONTROLS,
});
