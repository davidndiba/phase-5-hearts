import React from 'react'
import Sidebar from './Sidebar'
import Homes from './Homes'
import Users from './Users'
const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* <NavBar /> */}
      <div className="flex flex-1">
        <Sidebar />
        <div className="w-full p-8">
          <Homes />
          <Users />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;