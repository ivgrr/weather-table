export enum ControlsEnum {
  SET_SEARCH = '@@controls/SET_SEARCH',
  CLEAR_CONTROLS = '@@controls/CLEAR_CONTROLS',
}

export interface ControlsState {
  search: string;
}

interface SetSearchAction {
  type: ControlsEnum.SET_SEARCH;
  payload: string;
}

interface ClearControlsAction {
  type: ControlsEnum.CLEAR_CONTROLS;
  payload?: 'string';
}

export type ControlsAction = SetSearchAction | ClearControlsAction;
