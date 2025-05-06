
import { createBrowserRouter } from 'react-router';
import App from '../App';
import mainLayout from '../layout/mainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ServiceDetails from '../pages/ServiceDetails';
import Loading from '../components/Loading';
import PrivateRoute from '../provider/PrivateRoute';
import ErrorPage from '../pages/ErrorPage';
import MyProfile from '../pages/MyProfile';

 export const Router = createBrowserRouter([
    {
        path:'/',
        Component:mainLayout,
        children:[{
            index:true,
            path:'/',
            Component:Home,
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/service/:id',
            element:(<PrivateRoute>
                <ServiceDetails></ServiceDetails></PrivateRoute>),
            loader: ()=> fetch('data.json'),
            hydrateFallbackElement: <Loading></Loading>
        },
        {
            path:'/myprofile',
            element:(<PrivateRoute>
                <MyProfile></MyProfile>
            </PrivateRoute>)
        }
    ]
    },
   
    {
        path: '/*',
        element:<ErrorPage></ErrorPage>
    }
 ])


