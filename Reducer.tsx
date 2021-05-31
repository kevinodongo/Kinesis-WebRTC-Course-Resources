import { State } from "./state";
import { Actions, ActionType } from "./Actions";

export function reducer(state: State, action: Actions) {
  switch (action.type) {
    case ActionType._login:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated
      };
    case ActionType._logout:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated
      };
    default:
      return state;
  }
}

export const _login = (value: any) => ({
  type: ActionType._login,
  payload: value
});

export const _logout = (value: any) => ({
  type: ActionType._login,
  payload: value
});
