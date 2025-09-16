import { Link } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to="/" className=" mr-4 flex items-center">
        <FaHome className="mr-1.5 text-2xl" />{" "}
        <p className="text-white text-2xl">Home</p>
      </Link>
      <Link to="/add" className="text-white flex items-center">
        <IoMdPersonAdd className="mr-1.5" /> Add User
      </Link>
    </nav>
  );
}
