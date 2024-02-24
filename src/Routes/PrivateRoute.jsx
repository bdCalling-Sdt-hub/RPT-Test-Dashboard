
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const location = useLocation();
    const user ={
        email : "ahad.aiman2@gmail.com"
    }
    if(user?.email){
        return children;
    }
    return <Navigate to='/' state={{from:location}} />
}

export default PrivateRoute;
