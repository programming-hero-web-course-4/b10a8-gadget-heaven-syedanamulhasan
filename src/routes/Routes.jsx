import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Stats from "../Pages/Stats";
import Dashboard from "../Pages/Dashboard";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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