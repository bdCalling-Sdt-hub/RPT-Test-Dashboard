import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import ForgotPassword from "../pages/auth/SignIn/ForgotPassword";
import VerifyEmail from "../pages/auth/SignIn/Verifyemail";
import SetNewPassword from "../pages/auth/SignIn/SetNewPassword";
import DashboardPage from "../pages/dashboard/DashboardPage";
import Notification from "../pages/dashboard/Notification/Notification";
import ProfileInformation from "../pages/dashboard/ProfileInformation/ProfileInformation";
import EditProfile from "../pages/dashboard/EditProfile/EditProfile";
import UserList from "../pages/users/UserList/UserList";
import UserDetails from "../pages/users/UserDetails/UserDetails";
import Appointments from "../pages/dashboard/Appointments/Appointments";
import AppointmentDetails from "../pages/dashboard/Appointments/AppointmentDetails";
import Earnings from "../pages/dashboard/Earnings/Earnings";
import TransactionDetails from "../pages/dashboard/Earnings/TransactionDetails";
import Membership from "../pages/dashboard/Membership/Membership";
import AddMemberShip from "../pages/dashboard/Membership/AddMemberShip";
import EditMemberShip from "../pages/dashboard/Membership/EditMemberShip";
import Blog from "../pages/dashboard/Blog/Blog";
import AddBlog from "../pages/dashboard/Blog/AddBlog/AddBlog";
import EditBlog from "../pages/dashboard/Blog/EditBlog";
import Setting from "../pages/dashboard/Setting/Setting";
import AboutUs from "../pages/dashboard/Setting/AboutUs";
import EditAboutUs from "../pages/dashboard/Setting/EditAboutUs";
import PrivateRoute from "./PrivateRoute";
import SignIn from "../pages/auth/SignIn/SignIn";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<SignIn/>
            },{
              path:'/forgot_password',
              element:<ForgotPassword/>
            },
            {
              path:'/verify_email',
              element:<VerifyEmail/>
            },
            {
              path:'/set_new_password',
              element:<SetNewPassword/>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
              // admin routes
            {
                path: '',
                element: <DashboardPage/>
              },
              {
                path:'notification',
                element:<Notification/>
              },
              {
                path:'profileinformation',
                element:<ProfileInformation/>
              },
              {
                path:'editprofile',
                element:<EditProfile/>
              },
              {
                path:'users',
                element:<UserList/>
              },
              {
                path:'users/usersdetails',
                element:<UserDetails/>
              },
              {
                path: 'appointments', 
                element: <Appointments/>
              },
              {
                path: 'appointments/appointmentdetails', 
                element: <AppointmentDetails/>
              },
              {
                path:'earnings',
                element: <Earnings/>
              },
              {
                path:'earnings/transactiondetails',
                element: <TransactionDetails/>
              },
            
              {
                path: 'typesodtest',
                element:  <></>
              },
              {
                path: 'membership',
                element:  <Membership/>
              },
              {
                path: 'membership/addmembership',
                element:  <AddMemberShip/>
              },
              {
                path: 'membership/editmembership',
                element:  <EditMemberShip/>
              },
              {
                path: 'blog', 
                element:  <Blog/>
              },
              {
                path: 'blog/add-blog', 
                element:  <AddBlog/>
              },
              {
                path: 'blog/edit-blog', 
                element:  <EditBlog />
              },
              {
                path: 'settings',
                element:  <Setting/>
              },
              {
                path: 'settings/about-us',
                element:  <AboutUs/>
              },
              {
                path: 'settings/edit-about-us',
                element: <EditAboutUs/>
              }
              
        ]
    }
])