import React from "react";
import Routes from "./routes/RoutesComponent";
import { reducer, _login } from "./store/Reducer";
import { initialState } from "./store/state";
import { Auth } from "aws-amplify"
import { store } from "./store";

export const StoreContext: any = React.createContext<any>(store);

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    async function checkAuth() {
      const authResponse = await Auth.currentAuthenticatedUser()
      dispatch(
        _login({
          user: authResponse,
          isAuthenticated: true
        })
      );
    }
    checkAuth()
  }, [])

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <Routes />
    </StoreContext.Provider>
  );
}

export default App;
