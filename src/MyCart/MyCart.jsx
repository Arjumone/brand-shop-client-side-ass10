// import { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";

import { useLoaderData } from "react-router-dom";


const MyCart = () => {

  const carts = useLoaderData()
  console.log(carts);
  
    return (
        <div>
          my cart{carts.length}  
        </div>
    );
};

export default MyCart;