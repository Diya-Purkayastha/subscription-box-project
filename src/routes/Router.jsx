
import { createBrowserRouter } from 'react-router';
import App from '../App';
import mainLayout from '../layout/mainLayout';
import Home from '../pages/Home';

 export const Router = createBrowserRouter([
    {
        path:'/',
        Component:mainLayout,
        children:[{
            index:true,
            path:'/',
            Component:Home
        }]
    },
    {
        path:'app',
        element: <h2>hello</h2>
    }
 ])


