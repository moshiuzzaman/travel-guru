import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AllContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [exactLocation, setExactLocation, loginUser, setLoginUser] = useContext(AllContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loginUser.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;