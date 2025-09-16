import React, { useEffect, useState } from "react";
import { getUsers } from "../api/userService";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";
import { FaSearch } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data.data || []);
    } catch (e) {
      console.error("Error loading users:", e);
    }
  };

  // Filter users by search term (name or email)
  const filteredUsers = users.filter((u) => {
    const q = search.toLowerCase();
    return (
      u.name?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="container mx-auto p-4 justify-center">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User Management</h1>
        <Link
          to="/add"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center "
        >
          <IoMdPersonAdd className="mr-1.5" /> Add User
        </Link>
      </div>

      {/* Search Bar */}
      <div className="mb-4 flex items-center md:w-1/2 p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
        <FaSearch className="inline-block mr-2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none"
        />
      </div>

      {/* Grid view using UserCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.length === 0 ? (
          <p>No users found</p>
        ) : (
          filteredUsers.map((u) => <UserCard key={u.id} user={u} />)
        )}
      </div>
    </div>
  );
}
