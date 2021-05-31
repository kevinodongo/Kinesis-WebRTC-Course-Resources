import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { StoreContext } from "../App";


const ProtectedComponent = (props: any) => {
    const { component: Component, isLoading, ...rest } = props
    const { state, dispatch } = React.useContext(StoreContext);


        return (
            <Route
                {...rest}
                render={(props) => {
                    return state.isAuthenticated ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: props.location }
                            }}
                        />
                    );
                }}
            />
        )
}

export default ProtectedComponent
