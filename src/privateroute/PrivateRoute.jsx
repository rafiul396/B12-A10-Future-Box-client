import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const {user, loading} = use(AuthContext)
    const location = useLocation();
    
    

    if(loading){
        return <h1>Loaing...</h1>
    }

    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;