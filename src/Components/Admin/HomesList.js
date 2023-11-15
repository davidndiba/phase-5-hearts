import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const HomesList = () => {
  const [homes, setHomes] = useState([
    { id: 1, name: 'Delulu homes', address: 'Nyayo', description: 'Let Us Make A Change Together.',  },
    { id: 2, name: 'St.Josephs Care Centre', address: 'Nakuru', description: 'Join the team.' },

  ]);


  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Logic to filter homes based on the search term
    // You might want to filter the 'homes' state here
  };

  const handleEdit = (homeId) => {
    // Logic to handle edit functionality
    console.log(`Edit home with ID ${homeId}`);
  };

  const handleDelete = (homeId) => {
    // Logic to handle delete functionality
    console.log(`Delete home with ID ${homeId}`);
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-8 w-full">
        <div className="flex items-center mb-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search Homes"
              value={searchTerm}
              onChange={handleSearch}
              className="w-40 md:w-60 border border-gray-300 rounded py-2 pl-8 pr-4 focus:outline-none focus:border-blue-500"
            />
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
          </div>

          <div className="ml-auto">
          <Link to="/admin/add_home">
            <button
              onClick={() => console.log('Add new home')}
              className="flex items-center bg-green-500 text-white py-2 px-4 rounded focus:outline-none"
            >
              <FaPlus className="mr-1" />
              Add Home
            </button>
            </Link>
          </div>
        </div>

        <table className="w-full border-collapse">
  <thead>
    <tr className="bg-gray-200">
      <th className="p-3 text-left">Name</th>
      <th className="p-3 text-left">Address</th>
      <th className="p-3 text-left">Description</th>
      <th className="p-3 text-left">Actions</th>
    </tr>
  </thead>
  <tbody>
    {homes.map((home, index) => (
      <React.Fragment key={home.id}>
        <tr className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
          <td className="p-3">{home.name}</td>
          <td className="p-3">{home.address}</td>
          <td className="p-3">{home.description}</td>
          <td className="p-3">
            <div className="flex">
              <FaEdit
                className="text-blue-500 text-lg mr-2 cursor-pointer"
                onClick={() => handleEdit(home.id)}
              />
              <FaTrash
                className="text-red-500 text-lg cursor-pointer"
                onClick={() => handleDelete(home.id)}
              />
            </div>
          </td>
        </tr>
        {index !== homes.length - 1 && (
          <tr key={`line-${index}`}>
            <td colSpan="4" className="border-b border-gray-300" />
          </tr>
        )}
      </React.Fragment>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
};

export default HomesList;