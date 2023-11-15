import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Logic to filter users based on the search term
    // You might want to filter the 'users' state here
  };

  const handleEdit = (userId) => {
    // Logic to handle edit functionality
    console.log(`Edit user with ID ${userId}`);
  };

  const handleDelete = (userId) => {
    // Logic to handle delete functionality
    console.log(`Delete user with ID ${userId}`);
  };

  const handleAddUser = () => {
    console.log('Add new user');
    // Redirect to the page to add a new user using React Router
  };

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex flex-col w-full p-8">
        <div className="flex items-center mb-4">
          <div className="relative w-48">
            <input
              type="text"
              placeholder="Search user..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full border border-gray-300 rounded py-2 pl-8 pr-4 focus:outline-none focus:border-blue-500"
            />
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
          </div>
          <div className="ml-2">
          <Link to="/admin/add_user">
            <button
              onClick={handleAddUser}
              className="bg-green-500 text-white rounded-md px-4 py-2 flex items-center ml-50"
            >
              <FaPlus className="mr-2" />
              Add User
            </button>
            </Link>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">
                  <div className="flex items-center">
                    <FaEdit
                      className="text-blue-500 text-lg mr-2 cursor-pointer"
                      onClick={() => handleEdit(user.id)}
                    />
                    <FaTrash
                      className="text-red-500 text-lg cursor-pointer"
                      onClick={() => handleDelete(user.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;