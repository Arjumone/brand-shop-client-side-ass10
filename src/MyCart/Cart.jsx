import Swal from "sweetalert2";

const Cart = ({ cart,updateCard,setUpdateCard }) => {
    // console.log(updateCard);
//   console.log(cart);
const {details}=cart;
const {_id,image,name,brandName,price,rating} =details
// console.log(details);

const handleDelete =_id =>{
    console.log(_id);

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://brand-shop-server-side-taupe.vercel.app/carts/${_id}`,{
                method:"DELETE",
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your Cart has been deleted.',
                        'success'
                      )
                      const remaining = updateCard.filter(crt=>crt._id !==_id)
                      setUpdateCard(remaining)
                }
            })
        }
      })
}
  return (
    <div className="">
      <div className="card card-compact h-[400px]   shadow-xl  ">
  <figure><img className=" h-[300px]" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-center text-2xl font-bold">{brandName}</h2>
    <p className=" text-center text-xl font-semibold">{name}</p>
    <div className=" flex justify-around font-bold">
        <h2>{price}</h2>
        <h2>{rating}</h2>
    </div>
    <div className="card-actions justify-center">
      <button onClick={()=>handleDelete(_id)} className="btn bg-red-600 text-white">Delete</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Cart;
