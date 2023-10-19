// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Product = ({product}) => {
    const {image,name,brandName,typeOfProduct,price,shortDescription,rating} =product;


    return (
        <Link to={`/brands/${brandName}`}>
            <div className="card card-compact bg-base-100 shadow-xl p-4 ">
  <figure><img className=" h-[200px] w-[400px]" src={image} alt="Shoes" /></figure>
  <div className=" text-center ">
    <h2 className="my-3 text-center text-2xl font-semibold">{brandName}</h2>
  </div>
</div>
        </Link>
    );
};

export default Product;