import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Stats from "../Pages/Stats";
import Dashboard from "../Pages/Dashboard";
import Gadgets from "../Compos/Gadgets";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <Gadgets></Gadgets>,
                        loader: () => fetch('../gadgets.json')
                    },
                    {
                        path: '/category/:category',
                        element: <Gadgets></Gadgets>,
                        loader: () => fetch('../gadgets.json')
                    }
                ]
            },
            {
                path: '/statistics',
                element: <Stats></Stats>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
        ]
    }
])
export default routes;