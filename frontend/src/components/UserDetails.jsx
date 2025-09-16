import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUser, deleteUser } from "../api/userService";
import { Link } from "react-router-dom";
import { MdArrowBackIos, MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

export default function UserDetails() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState({ text: "", type: "" }); // type: 'success' or 'error'

  useEffect(() => {
    loadUser();
  }, [id]);

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 5000); // Clear message after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [message]);

  const loadUser = async () => {
    try {
      const res = await getUser(id);
      setUser(res.data.data);
    } catch (e) {
      console.error("Error loading user:", e);
      setMessage({ text: "Error loading user.", type: "error" });
      // Optionally navigate to a 404 page or show an error message
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      await deleteUser(id);
      setMessage({ text: "User deleted successfully!", type: "success" });
      setTimeout(() => navigate("/"), 3000); // Redirect to user list after deletion
    } catch (e) {
      setMessage({
        text: "Delete failed: " + (e.response?.data?.error || e.message),
        type: "error",
      });
    }
  };

  if (!user) {
    return (
      <div className="text-center text-white">Loading user details...</div>
    );
  }

  console.log(user);

  return (
    <div className="container mx-auto p-4">
      {message.text && (
        <div
          className={`p-3 mb-4 rounded text-center ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {message.text}
        </div>
      )}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg text-white">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <div></div> {/* Spacer to balance the flex layout */}
        </div>
        <p className="text-gray-400 mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        {user.phone && (
          <p className="text-gray-400 mb-2">
            <strong>Phone:</strong> {user.phone}
          </p>
        )}
        {user.company && (
          <p className="text-gray-400 mb-2">
            <strong>Company:</strong> {user.company}
          </p>
        )}
        {user.address && (
          <p className="text-gray-400 mb-2">
            <strong>Address:</strong> {user.address}
          </p>
        )}
        {user.website && (
          <p className="text-gray-400 mb-2">
            <strong>Website:</strong>{" "}
            <a
              href={user.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              {user.website}
            </a>
          </p>
        )}
        {user.street && (
          <p className="text-gray-400 mb-2">
            <strong>Street:</strong> {user.street}
          </p>
        )}
        {user.city && (
          <p className="text-gray-400 mb-2">
            <strong>City:</strong> {user.city}
          </p>
        )}
        {user.zipcode && (
          <p className="text-gray-400 mb-2">
            <strong>Zipcode:</strong> {user.zipcode}
          </p>
        )}
        {(user.lat || user.lng) && (
          <p className="text-gray-400 mb-2">
            <strong>Coordinates:</strong> {user.lat}, {user.lng}
          </p>
        )}

        <div className="mt-6 flex justify-between space-x-3">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-200 flex items-center cursor-pointer"
          >
            <MdArrowBackIos /> Back
          </button>
          <div className="flex space-x-8">
            <Link
              to={`/edit/${user.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 flex items-center"
            >
              <FaUserEdit /> Edit
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200 flex items-center cursor-pointer"
            >
              <MdDelete /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
