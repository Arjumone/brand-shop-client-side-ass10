import { Link } from "react-router-dom";


const Brand = ({brand}) => {
    // console.log(brand);
  const {_id,image,name,brandName,typeOfProduct,price,shortDescription,rating} =brand
  // console.log(_id);                                             
    
    return (
        <div>
            <div className="card p-4 mt-4 shadow-xl h-[500px] bg-red-50">
  <figure><img className=" h-[200px]" src={image} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className=" text-2xl font-bold">{brandName}</h2>        
    <h2 className=" text-lg font-semibold">{name}</h2>
    <p>{shortDescription}</p>
    <div className=" flex justify-around font-bold">
        <h2>Price:{price}</h2>
        <h2>Rating:{rating}</h2>
    </div>
    <div className="card-actions justify-center mt-3"> 
      <Link to={`/details/${_id}`}>
      <button className="btn bg-red-500 text-white">Details</button>
      </Link> 
      <Link to={`/updateBrand/${_id}`}>
      <button className="btn bg-red-500 text-white">Update</button>
      </Link> 
    </div>
  </div>
</div>
        </div>
    );
};

export default Brand;