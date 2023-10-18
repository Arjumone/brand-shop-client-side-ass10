import { useLoaderData } from "react-router-dom";


const MyCart = () => {

    const product = useLoaderData()
    const {_id,name,image,brandName,price,rating,shortDescription,typeOfProduct,} =product
    return (
        <div className=" max-w-6xl mx-auto ">
            <div className="card bg-red-100 p-3 shadow-xl h-[600px]">
  <figure><img className=" md:rounded-full md:h-64 md:w-64" src={image} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className=" text-3xl font-bold">Name:{name}</h2>
    <h2 className=" text-2xl font-semibold">Brand Name:{brandName}</h2>
    <p className=" ">Description:{shortDescription}</p>
    <div className=" flex font-bold">
    <p>Price:{price}</p>
    <p>Rating:{rating}</p>
    </div>
    <p className=" font-bold">Type of Product:{typeOfProduct}</p>
    <div className="card-actions justify-center">
      <div className="badge badge-outline">Details</div> 
      <div className="badge badge-outline">Update</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyCart;