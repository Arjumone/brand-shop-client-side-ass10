import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className=" justify-center items-center text-center mt-10">
            <p className=" my-2">Oops!!!</p>
            <p>404</p>
            <p className=" my-2">Not found Data</p>
            <Link to='/' className="px-4 py-2  rounded-lg  bg-red-500 text-white">Go back Home</Link>
        </div>
    );
};

export default Error;