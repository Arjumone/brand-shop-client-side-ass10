import { useLoaderData } from "react-router-dom";


const MyCart = () => {
  const carts = useLoaderData()
  console.log(carts);
    return (
        <div>
          my cart  
        </div>
    );
};

export default MyCart;