import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Stats from "../Pages/Stats";
import Dashboard from "../Pages/Dashboard";
import Gadgets from "../Compos/Gadgets";
import GadgetDetails from "../Pages/GadgetDetails";
import ErrorPage from "../Pages/ErrorPage";
import Faq from "../Pages/Faq";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <Dashboard></Dashboard>,
                loader: () => fetch('../gadgets.json')
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/gadgets/:id',
                element: <GadgetDetails></GadgetDetails>,
                loader: () => fetch('../gadgets.json')
            },
        ]
    }
])
export default routes;