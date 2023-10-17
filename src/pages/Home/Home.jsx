import Header from "../../shared/Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div  className="  max-w-6xl mx-auto p-4 rounded">
      <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
      </div>


      <div className="  max-w-6xl mx-auto bg-red-400 p-4 rounded">
        <h2 className=" text-center mb-3 text-2xl font-semibold text-white">World famous Food are here</h2>
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-2 ">
      {/* , , Starbucks, PepsiCo, Nestlé, */}
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
