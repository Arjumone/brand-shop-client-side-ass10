
import { useLoaderData } from "react-router-dom";
import Header from "../../shared/Header/Header";
import Product from "./Product";

const Home = () => {

  const products = useLoaderData()
  return (
    <div>
      <Header></Header>
      <div className=" max-w-6xl mx-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          products.length== 0? <h1>No data found</h1> : products?.slice(0,6).map(product=><Product key={product._id} product={product}></Product>)
        }
      </div>
    
      <div  className="  max-w-6xl mx-auto p-4 rounded bg-slate-300 my-2">
      <div className="card lg:card-side bg-base-100 shadow-xl p-3">
  <figure><img src="https://i.ibb.co/BLVch1M/detailed-chef-logo-template-23-2148986823.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">Crafting Moments, One Plate at a Time</h2>
    <p>It’s the joy of a child tasting ice cream for the first time, the celebration of love over a candlelit dinner, and the camaraderie shared over a cup of coffee. Each dish and drink is a story, each meal a memory. In every restaurant, café, or online order, there is an opportunity to create an experience that lingers in the hearts of customers.</p>
    <div className="card-actions ">
      <button className="btn bg-red-500 text-white">Order Now</button>
    </div>
  </div>
</div>
      </div>


      <div className="  max-w-6xl mx-auto bg-red-400 p-4 rounded">
        <h2 className=" text-center mb-3 text-2xl font-semibold text-white">World famous Food are here</h2>
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-2 ">
        <div className="card  bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://i.ibb.co/brkKqBP/serving-cola-from-bottle-glass-full-ice.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Coca-Cola</h2>
            <p>We are here to refresh the world and make a difference.</p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://i.ibb.co/WFnHHTN/top-view-cup-coffee-with-coffee-beans-falling-out-glass-jar-wooden-surface.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Starbucks</h2>
            <p>Try the new coffee-free Iced Pumpkin Cream Chai Tea Latte</p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://i.ibb.co/DL3c6vZ/front-view-energy-drink-can-blue-drink-alcohol-darkness.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">PepsiCo</h2>
            <p>We’re using our global scale and reach to spark joy </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://i.ibb.co/k6yXCRz/milk-cereal.jpg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Kellogg's</h2>
            <p>Kellogg's is currently the title sponsor of three college football bowl games</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
