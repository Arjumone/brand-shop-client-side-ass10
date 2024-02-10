import { useLoaderData } from "react-router-dom";
import Brand from "../Brand/Brand";

const Brands = () => {
    const allBrands = useLoaderData()
    console.log(allBrands);
    return (
        <div>
          <div>
          <div className=" max-w-6xl mx-auto">
     <div className="carousel w-full h-[400px] relative">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/bmWgDnt/food-tourism-concept-exploring-culinary-diversity-cosmopolitan-cities-883586-18058.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/HrzDv39/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/kqwjHPg/delicious-burgers-us-labor-day-23-2150378715.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/rc90Q5s/high-angle-fast-food-white-table-23-2148273120.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<div className=" absolute -mt-64 lg:ml-80">
    <h2 className=" text-5xl font-bold text-white">World Famous Food Are Here</h2>
    <p className=" text-white">Welcome to world of foodies with all over world varieties of foods and drinks.</p>
</div>
    </div>
          </div>
          <div>
          <div className="max-w-6xl mx-auto bg-red-200 p-3 rounded-lg ">
          <h1 className=" text-center font-bold text-3xl">All brands Products</h1>  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3  ">
            {
                allBrands?.map(brand=><Brand key={brand._id} brand={brand}></Brand>)
            }
          </div>
        </div>
          </div>
        </div>
    );
};

export default Brands;