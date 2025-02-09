import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from "react-router-dom";
import './index.css'


import routes from './routes/Routes';


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
    <ToastContainer 
    position="top-center"
    autoClose={2000}/>
  </StrictMode>
  ,
)
