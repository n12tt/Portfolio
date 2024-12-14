import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">My 3D Portfolio</Link>
        <div>
          <Link to="/" className="mr-4 hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
