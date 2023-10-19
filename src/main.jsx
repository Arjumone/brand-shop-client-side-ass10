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
import PrivateRoute from './route/PrivateRoute';
import AddProducts from './pages/AddProducts/AddProducts';
import AuthProvider from './Provider/AuthProvider';
import MyCart from './MyCart/MyCart';
import Product from './pages/Home/Product';
import Brands from './pages/Brands/Brands';

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
        path:'/myCart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path:'/product',
        element:<PrivateRoute><Product></Product></PrivateRoute>
      },
      {
        path:'/brands/:brandName',
        element:<PrivateRoute><Brands></Brands></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.brandName}`)
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
// server repo:https://github.com/programming-hero-web-course-4/b8a10-brandshop-server-side-Arjumone
