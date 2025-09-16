import React, { useState, useEffect } from "react";
import { createUser, getUser, updateUser } from "../api/userService";
import { useParams, useNavigate } from "react-router-dom";

export default function UserForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    street: "",
    city: "",
    zipcode: "",
    lat: "",
    lng: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" }); // type: 'success' or 'error'

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await getUser(id);
          setForm(res.data.data || {});
        } catch {
          setMessage({ text: "User not found", type: "error" });
          setTimeout(() => navigate("/"), 3000); // Navigate after showing error
        }
      })();
    }
  }, [id, navigate]);

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 5000); // Clear message after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      return setMessage({ text: "Name and Email are required", type: "error" });
    }
    try {
      if (id) {
        await updateUser(id, form);
        setMessage({ text: "User updated successfully!", type: "success" });
      } else {
        await createUser(form);
        setMessage({ text: "User created successfully!", type: "success" });
      }
      setTimeout(() => navigate("/"), 3000); // Navigate after showing success
    } catch (e) {
      setMessage({
        text: "Error: " + (e.response?.data?.error || e.message),
        type: "error",
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">
        {id ? "Edit User" : "Add User"}
      </h2>
      {message.text && (
        <div
          className={`p-3 mb-4 rounded text-center ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {message.text}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        {[
          "name",
          "email",
          "phone",
          "company",
          "street",
          "city",
          "zipcode",
          "lat",
          "lng",
        ].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2">
              {field.toUpperCase()}:
            </label>
            <input
              type="text"
              name={field}
              value={form[field] || ""}
              onChange={handleChange}
              required={field === "name" || field === "email"}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 placeholder-gray-500 text-white"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}
