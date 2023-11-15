import React from 'react';
// import Sidebar from './Sidebar';

const usersData = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 4, name: 'Bob Wilson', email: 'bob@example.com' },
];

const Users = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="ml-4 flex-1">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Users</h2>
            <a href="/admin/user_list" className="text-blue-500 hover:underline">
              View More
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {usersData.slice(0, 4).map((user) => (
              <div key={user.id} className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
                <p>{user.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;