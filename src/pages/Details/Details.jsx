import { Link, useLoaderData} from "react-router-dom";


const Details = () => {
    const details = useLoaderData()

    const {image,name,brandName,typeOfProduct,price,shortDescription,rating} =details;
    
    return (
        <div className=" max-w-6xl mx-auto rounded-lg ">
           <div className="hero min-h-screen  px-5 bg-red-100 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="py-6">{shortDescription}</p>
      <Link to='/carts'>
      <button className="btn btn-primary">Add to Cart</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;