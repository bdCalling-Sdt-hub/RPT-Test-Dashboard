
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    // const {isSuccess,user} = useSelector((state)=>state.login);

    const location = useLocation();
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("login-user"))
    // console.log(user);
    // console.log(token);
    // const user ={
    //     email : "ahad.aiman2@gmail.com"
    // }
    console.log(user);
    if(user?.user?.isEmailVerified && user?.user?.role=="admin"){
        return children;
    }
    return <Navigate to='/' state={{from:location}} />
}

export default PrivateRoute;
