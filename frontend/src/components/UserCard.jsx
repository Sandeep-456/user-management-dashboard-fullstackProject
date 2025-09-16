import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

export default function UserCard({ user }) {
  return (
    <Link to={`/users/${user.id}`} className="block">
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-lg flex flex-col items-center hover:bg-gray-700 transition duration-200">
        <h3 className="text-xl font-bold text-white">{user.name}</h3>
        <p className="text-gray-400">{user.email}</p>
        {user.phone && <p className="text-gray-400">{user.phone}</p>}
        {user.company && <p className="text-gray-400">{user.company}</p>}
        <div className="mt-4">
          <button className="cursor-pointer flex content-center items-center bg-orange-400 text-white font-bold py-1 px-3 rounded-md text-sm ">
            <FaEye className="mr-1.5" /> View
          </button>
        </div>
      </div>
    </Link>
  );
}
