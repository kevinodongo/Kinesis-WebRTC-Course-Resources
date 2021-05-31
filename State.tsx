// declare state of the store
export interface State {
  user: any,
  isAuthenticated: boolean,
  messages: (any)[],
}

export const initialState: State = {
  user: null,
  isAuthenticated: true,
  messages: []
}
