import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomesForm = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/admin/homes_list');

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You might want to update the homes state or perform API calls here
    navigate('/admin/homes_list');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white p-6 rounded shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add Home</h2>
        <input
          type="text"
          placeholder="Home Name"
          className="w-full border p-2 mb-4"
          required
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full border p-2 mb-4"
          required
        />
        <textarea
          placeholder="Description"
          className="w-full border p-2 mb-4"
          required
        ></textarea>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomesForm;
