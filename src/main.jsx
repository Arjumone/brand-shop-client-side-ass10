import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PrivateRoute from "./route/PrivateRoute";
import AddProducts from "./pages/AddProducts/AddProducts";
import AuthProvider from "./Provider/AuthProvider";
import MyCart from "./MyCart/MyCart";
import Product from "./pages/Home/Product";
import Brands from "./pages/Brands/Brands";
import UpdateBrand from "./pages/UpdateBrand/UpdateBrand";
import Details from "./pages/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://brand-shop-server-side-taupe.vercel.app/products"),
      },
      {
        path: "/addProducts",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/carts",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://brand-shop-server-side-taupe.vercel.app/carts"),
      },
      {
        path: "/product",
        element: (
          <PrivateRoute>
            <Product></Product>
          </PrivateRoute>
        ),
      },
      {
        path: "/brands/:brandName",
        element: <Brands></Brands>,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-side-taupe.vercel.app/products/${params.brandName}`
          ),
      },
      {
        path: "/updateBrand/:id",
        element: (
          <PrivateRoute>
            <UpdateBrand></UpdateBrand>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-side-taupe.vercel.app/products/details/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-side-taupe.vercel.app/products/details/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

