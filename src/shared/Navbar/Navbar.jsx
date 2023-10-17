import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addProducts">Add Products</NavLink>
      <NavLink to="/myCart">My Cart</NavLink>
      <NavLink to="/login">Login</NavLink>
      {/* <NavLink to='/register'>Register</NavLink> */}
    </>
  );
  return (
    <div className=" max-w-6xl mx-auto my-2 rounded">
      <div className="navbar bg-red-500 text-white rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navLinks}
            </ul>
          </div>
          <div className=" flex items-center gap-2">
            <img className=" w-10 rounded-full h-10" src="https://i.ibb.co/W5rMKqc/restaurant-tasty-food-logo-design-460848-10307.jpg" alt="" />
          <p className=" normal-case text-3xl font-bold">Food</p>
          </div>
        </div>
        <div className="navbar-center sm:hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-4 font-semibold text-lg ">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-red-700 text-white">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
