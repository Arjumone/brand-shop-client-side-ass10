import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const details = useLoaderData();

  const {
    image,
    name,
    brandName,
    typeOfProduct,
    price,
    shortDescription,
    rating,
  } = details;

  const handleAddToCart = (details, userEmail) => {
    const newCart = { userEmail, details };
    // console.log(newCart);
    fetch("https://brand-shop-server-side-taupe.vercel.app/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "Added the Cart!", "success");
        }
      });
  };

  return (
    <div className=" max-w-6xl mx-auto rounded-lg ">
      <div className="hero min-h-screen  px-5 bg-red-100 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{shortDescription}</p>

            <button
              onClick={() => handleAddToCart(details, userEmail)}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
