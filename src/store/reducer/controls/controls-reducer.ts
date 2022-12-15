import { ControlsAction, ControlsEnum, ControlsState } from './controls-types';

const initialState: ControlsState = {
  search: '',
};

export const controlsReducer = (
  state: ControlsState = initialState,
  { type, payload }: ControlsAction,
): ControlsState => {
  switch (type) {
    case ControlsEnum.SET_SEARCH:
      return { ...state, search: payload };
    case ControlsEnum.CLEAR_CONTROLS:
      return initialState;
    default:
      return state;
  }
};
