import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
  const {user,logout} = useContext(AuthContext)
  console.log(user);
  console.log(user);

  const handleSignOut = ()=>{
          logout()
          .then(result=>{
            console.log(result.user);
          })
          .catch(error=>{
            console.log(error);
          })
  }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addProducts'>Add Products</NavLink></li>
        <li><NavLink to='/myCart'>My Cart</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>
    return (
        <div className="navbar bg-red-500 my-2 rounded-lg text-white text-lg font-bold max-w-6xl mx-auto">
          <div className="navbar-start ">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-sky-600 rounded-box w-52 ">
                {navLinks}
              </ul>
            </div>
            <div className=" flex items-center gap-2">
          <img className=" w-10 rounded-full h-10" src="https://i.ibb.co/W5rMKqc/restaurant-tasty-food-logo-design-460848-10307.jpg" alt="" />
           <p className=" normal-case text-3xl font-bold">Food</p>
        </div>
          </div>
      <div className="navbar-center sm:hidden lg:display  lg:flex  ">
        <ul className="menu menu-horizontal px-1 ">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
      {
          user && <div className=" flex">
            <span className=" text-white">{user.displayName
}</span>
          <img className=" rounded-full w-10 h-10 gap-3" src={user.photoURL} alt="" />
          </div>
        }
        {
          user ? <button onClick={handleSignOut} className=" text-sky-800 bg-white btn font-bold">logout</button>
          :
        <Link to="/login">
          <button className="  font-bold bg-red-700 text-white btn">Login</button>
        </Link>
        }
        
      </div>
    </div>
);
};

export default Navbar;


//   return (
//     <div className=" max-w-6xl mx-auto my-2 rounded">
//       <div className="navbar  ">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
//             >
//               {navLinks}
//             </ul>
//           </div>
//           
//         </div>
//         
//       
//       </div>
//     </div>
//   );
// };

// export default Navbar;
