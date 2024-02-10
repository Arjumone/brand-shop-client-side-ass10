import Marquee from "react-fast-marquee";

const CustomerReview = () => {
    return (
     <div>
        <h2 className=" text-center text-3xl font-semibold my-4">Customer Food Review</h2>
           <Marquee className="">
  <img className=" w-48 mr-4 rounded" src="https://i.ibb.co/x5wGXk6/front-view-female-courier-yellow-uniform-cape-holding-delivery-bowl-using-phone-light-pink-wall-serv.jpg" alt="" />
  <img className=" w-48 mr-4 rounded" src="https://i.ibb.co/c10w80P/morning-breakfast-young-beautiful-girl.jpg" alt="" />
  <img className=" w-48 mr-4 rounded" src="https://i.ibb.co/vhnxTzR/woman-taking-photo-bowl-with-salad-half-avocado.jpg" alt="" />
  <img className=" w-48 mr-4 rounded"  src="https://i.ibb.co/y84gqy8/woman-with-salad-phone.jpg" alt="" />
  <img className=" w-48 mr-4 rounded"  src="https://i.ibb.co/FbJLHfM/young-adult-enjoying-virtual-date.jpg" alt="" />
  <img  className=" w-48 mr-4 rounded" src="https://i.ibb.co/C2Yc0zy/close-up-woman-eating-healthy-food.jpg" alt="" />
  </Marquee>
     </div>
    );
};

export default CustomerReview;