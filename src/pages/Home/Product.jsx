import { Link } from "react-router-dom";


const Product = ({product}) => {
    // console.log(product);
    const {_id,image,brandName} =product;

    return (
        <Link to={`/myCart/${_id}`}>
            <div className="card card-compact bg-base-100 shadow-xl p-4 ">
  <figure><img className=" " src={image} alt="Shoes" /></figure>
  <div className=" text-center ">
    <h2 className="my-3 text-center text-2xl font-semibold">{brandName}</h2>
  </div>
</div>
        </Link>
    );
};

export default Product;