import { useContext } from "react";
import {  useLoaderData} from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Details = () => {
    const {user,signIn}=useContext(AuthContext)
    // console.log(user);

    const details = useLoaderData()

    const {image,name,brandName,typeOfProduct,price,shortDescription,rating} =details;
    
    const handleAddToCart = ()=>{
        fetch(`https://brand-shop-server-side-taupe.vercel.app/carts`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(details)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return (
        <div className=" max-w-6xl mx-auto rounded-lg ">
           <div className="hero min-h-screen  px-5 bg-red-100 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="py-6">{shortDescription}</p>
      
      <button onClick={()=>handleAddToCart(details)} className="btn btn-primary">Add to Cart</button>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;