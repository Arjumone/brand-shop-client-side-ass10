// import { Link } from "react-router-dom";

import Swal from "sweetalert2";


const Product = ({product}) => {
    const {image,name,brandName,typeOfProduct,price,shortDescription,rating} =product;

    const handleBrand = brandName=>{
      console.log(brandName);

    //   // set in database
    //   fetch(`http://localhost:5000/brands/${brandName}`,{
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(product),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Added the Brand successfully in database",
    //         icon: "success",
    //         confirmButtonText: "Cool",
    //       });
    //     }
    //   });

    }

    return (
        <div onClick={()=>handleBrand(brandName)}>
            <div className="card card-compact bg-base-100 shadow-xl p-4 ">
  <figure><img className=" h-[200px]" src={image} alt="Shoes" /></figure>
  <div className=" text-center ">
    <h2 className="my-3 text-center text-2xl font-semibold">{brandName}</h2>
  </div>
</div>
        </div>
    );
};

export default Product;