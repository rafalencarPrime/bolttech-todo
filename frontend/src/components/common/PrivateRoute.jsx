
import { useAuth } from '../../hooks/useAuth.js';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Header from "./Header";

const PrivateRoutes = () => {

    const auth = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

        if (!auth.user) {
            navigate('/login', { replace: true, state: { from: location } });
        }
        
    }, [auth, location, navigate])
    
    return (
        <>
        {auth.user && <Header />}
        <Outlet/>
        </>
    )
}

export default PrivateRoutes;
