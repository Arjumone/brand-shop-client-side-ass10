import { useLoaderData, useParams } from "react-router-dom";
import Brand from "../Brand/Brand";

const Brands = () => {
    const allBrands = useLoaderData()
    console.log(allBrands);
    return (
        <div className="max-w-6xl mx-auto ">
          <h1 className=" text-center">All brands Products</h1>  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3  ">
            {
                allBrands?.map(brand=><Brand key={brand._id} brand={brand}></Brand>)
            }
          </div>
        </div>
    );
};

export default Brands;