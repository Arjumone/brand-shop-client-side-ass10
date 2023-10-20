import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBrand = () => {
  const brand = useLoaderData();
  console.log(brand);

  const {
    image,
    name,
    brandName,
    typeOfProduct,
    price,
    shortDescription,
    rating,
  } = brand;

  const handleUpdateProducts = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const typeOfProduct = form.typeOfProduct.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const updateProducts = {
      image,
      name,
      brandName,
      typeOfProduct,
      price,
      shortDescription,
      rating,
    };
    console.log(updateProducts);

    //  send data to the server
    fetch("https://brand-shop-server-side-taupe.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added the product successfully in database",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className=" max-w-6xl mx-auto bg-red-50 rounded p-4">
      <h2 className=" font-semibold text-3xl my-3">Update Products Here</h2>
      <form onSubmit={handleUpdateProducts}>
        <div className=" md:flex mb-6 gap-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={image}
                name="image"
                placeholder="Image"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={name}
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className=" md:flex mb-6 gap-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={brandName}
                name="brandName"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type of Product</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={typeOfProduct}
                name="typeOfProduct"
                placeholder="Type of Product"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className=" md:flex mb-6 gap-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={price}
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={shortDescription}
                name="shortDescription"
                placeholder="Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="  mb-6 gap-3 items-center">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={rating}
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full mt-3">
            <input
              type="submit"
              value="Submit"
              className=" btn btn-block bg-black text-white"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateBrand;
