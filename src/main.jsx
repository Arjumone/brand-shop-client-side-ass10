import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import MyCart from './pages/MyCart/MyCart';
import PrivateRoute from './route/PrivateRoute';
import AddProducts from './pages/AddProducts/AddProducts';
import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/products')
      },
      {
        path:'/addProducts',
        element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path:'/myCart/:id',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
     
  </React.StrictMode>,
)

// client repo:https://github.com/programming-hero-web-course-4/b8a10-brandshop-client-side-Arjumone

