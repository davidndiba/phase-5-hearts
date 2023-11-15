import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="bg-tertiary flex items-center justify-between py-4 px-6" style={{ backgroundColor: '#E57C23', color:' #F8F1F1' }}>
     <Link to="/" className="block">
        <div className="text-white font-bold text-2xl">Hearts to Homes</div>
      </Link>

      <div className="flex space-x-4">
        <Link to="/about" className="text-white hover:text-accent transition duration-300">About</Link>
        <Link to="/children_homes" className="text-white hover:text-accent transition duration-300">Homes</Link>
        <Link to="/donations" className="text-white hover:text-accent transition duration-300">Donations</Link>
        <Link to="/visits" className="text-white hover:text-accent transition duration-300">Visit</Link>
        <Link to="/donate" className="text-white hover:text-accent transition duration-300">Donate</Link>
        <Link to="/contact" className="text-white hover:text-accent transition duration-300">Contact Us</Link>
       
      </div>

      <div className="flex items-center">
          <Link to="/login" className="block">
            <button className="text-white font-semibold mr-4 py-2 px-4 rounded hover:bg-accent transition duration-300" style={{ backgroundColor: '#E8AA42', color:' #F8F1F1' }}>
              Login
            </button>
          </Link>
          <Link to="/register" className="block">
            <button className="text-white font-semibold mr-4 py-2 px-4 rounded hover:bg-accent transition duration-300" style={{ backgroundColor: '#E8AA42', color:' #F8F1F1' }}>
              Register
            </button>
          </Link>

      </div>
    </nav>
  )
}

export default NavBar