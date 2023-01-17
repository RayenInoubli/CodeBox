import {Outlet, Navigate} from 'react-router-dom';

const ProtectedRoute = () => {

    let isAuth = localStorage.getItem('userId');

    return(
        isAuth ? <Outlet/> : <Navigate to="/Login" />        
    );
}

export default ProtectedRoute;