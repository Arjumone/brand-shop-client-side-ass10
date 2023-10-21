

import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const MyCart = () => {
const {user}= useContext(AuthContext)
  const carts = useLoaderData()
  console.log(carts);

  const myCart = carts?.filter(cart=>cart.userEmail==user.email)
  console.log(myCart);

  const [updateCard,setUpdateCard] =useState(myCart)
  
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-6xl mx-auto gap-4">
         {
          myCart.map(cart=><Cart key={cart._id}cart={cart} updateCard={updateCard} setUpdateCard={setUpdateCard}></Cart>)
         } 
        </div>
    );
};

export default MyCart;