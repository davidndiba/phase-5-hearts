import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li className="flex items-center mb-4">
          <span className="mr-2">🏠</span>
          <a href="/admin">Dashboard</a>
        </li>
        <li className="flex items-center mb-4">
          <span className="mr-2">👥</span>
          <a href="/admin/users">Users</a>
        </li>
        <li className="flex items-center mb-4">
          <span className="mr-2">🏡</span>
          <a href="/admin/homes">Homes</a>
        </li>
        <li className="flex items-center mb-4">
          <span className="mr-2">📊</span>
          <a href="/admin/analytics">Analytics</a>
        </li>
        <li className="flex items-center mb-4">
          <span className="mr-2">🚪</span>
          <a href="/login">Logout</a>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Sidebar;