export enum ActionType {
  _login,
  _logout
}

export interface _login {
  type: ActionType._login;
  payload: { user: any; isAuthenticated: boolean };
}

export interface _logout {
  type: ActionType._logout;
  payload: { user: null; isAuthenticated: boolean };
}

export type Actions = _logout | _login;
