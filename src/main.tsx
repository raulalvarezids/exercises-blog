import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ShowExe from './pages/ShowExe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:'/muscle/:muscle',
    element:<ShowExe></ShowExe>
  }
]);



ReactDOM.createRoot(document.getElementById('root')!).render(  
      
      <RouterProvider router={router} />
    
)
