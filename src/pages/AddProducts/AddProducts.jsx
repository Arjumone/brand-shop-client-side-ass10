import Swal from "sweetalert2";

const AddProducts = () => {

  const handleAddProducts = e =>{
    e.preventDefault()
    const form = e.target
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const typeOfProduct = form.typeOfProduct.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const newProducts = {image,name,brandName,typeOfProduct,price,shortDescription,rating}
    console.log(newProducts);

    //  send data to the server
    fetch("http://localhost:5000/products",{
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProducts),
      }
    )
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

  }

  return (
    <div className=" max-w-6xl mx-auto bg-red-50 rounded p-4">
      <h2 className=" font-semibold text-3xl my-3">Add Products All</h2>
      <form onSubmit={handleAddProducts}>
       <div className=" md:flex mb-6 gap-3">
       <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <label className="input-group">
            <input
              type="text"
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
              name="rating"
              placeholder="Rating"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control w-full mt-3">
          
        <input
          type="submit"
          value="Add Coffee"
          className=" btn btn-block bg-black text-white"
        />
        </div>
       </div>
      </form>
    </div>
  );
};

export default AddProducts;

// import Swal from "sweetalert2";

// const AddCoffee = () => {
//   const handleAddCoffee = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const quantity = form.quantity.value;
//     const supplier = form.supplier.value;
//     const taste = form.taste.value;
//     const category = form.category.value;
//     const details = form.details.value;
//     const photo = form.photo.value;
//     const newCoffee = {
//       name,
//       quantity,
//       supplier,
//       taste,
//       category,
//       details,
//       photo,
//     };
//     console.log(newCoffee);

//     // send data to the server
//     fetch(
//       "https://coffee-store-server-hh8iqorsw-arjus-projects.vercel.app/coffee",
//       {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(newCoffee),
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.insertedId) {
//           Swal.fire({
//             title: "Success!",
//             text: "Added the Coffee successfully",
//             icon: "success",
//             confirmButtonText: "Cool",
//           });
//         }
//       });
//   };
// 