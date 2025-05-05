
import { createBrowserRouter } from 'react-router';
import App from '../App';
import mainLayout from '../layout/mainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

 export const Router = createBrowserRouter([
    {
        path:'/',
        Component:mainLayout,
        children:[{
            index:true,
            path:'/',
            Component:Home
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
    ]
    },
   
    {
        path: '/*',
        element:<h2>error 404</h2>
    }
 ])


