

const Product = ({product}) => {
    console.log(product);
    const {id,image,name} =product;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl p-4 ">
  <figure><img className=" " src={image} alt="Shoes" /></figure>
  <div className=" text-center ">
    <h2 className="my-3 text-center text-2xl font-semibold">{name}</h2>
  </div>
</div>
        </div>
    );
};

export default Product;