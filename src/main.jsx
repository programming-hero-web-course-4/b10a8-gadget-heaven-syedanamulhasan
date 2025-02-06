import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from "react-router-dom";
import './index.css'

// import Root from './Components/Root/Root';
// import ErrorPage from './Components/ErrorPage/ErrorPage';
// import Home from './Components/Home/Home';
// import Statistics from './Components/Statistics/Statistics';
// import Dashboard from './Components/Dashboard/Dashboard';
// import GadgetDetails from './Components/GadgetDetails/GadgetDetails';
import routes from './routes/Routes';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     errorElement: <ErrorPage></ErrorPage>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>
//       },
//       {
//         path: 'gadgets/:gadgetId',
//         element: <GadgetDetails></GadgetDetails>,
//         loader: () => fetch('gadgets.json')
//       },
//       {
//         path: "statistics",
//         element: <Statistics></Statistics>
//       },
//       {
//         path: "dashboard",
//         element: <Dashboard></Dashboard>,
//         loader: () => fetch('gadgets.json')
//       }
//     ]
//   },
// ])
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
    <ToastContainer />
  </StrictMode>
  ,
)
