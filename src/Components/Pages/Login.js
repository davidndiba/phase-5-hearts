// import React from "react";
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthContext"; // Import the AuthContext

// function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth(); // Use the useAuth hook to access the login function

//   const initialValues = {
//     username: "",
//     password: "",
//   };

//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required("Username is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const handleSubmit = async (values) => {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/login/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const user = await response.json();
//       console.log("Login successful:", user);

//       // Use the login function from the AuthContext to update the user state
//       login(user);

//       // Redirect or perform other actions after successful login
//       navigate("/");
//     } catch (error) {
//       console.error("Login error:", error.message);
//       // Handle login error (e.g., display error message to the user)
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="bg-white p-8 rounded shadow-md mt-8 mb-8">
//         <img
//           src="https://static8.depositphotos.com/1003580/884/i/450/depositphotos_8846425-stock-photo-group-of-happy-children-playing.jpg"
//           alt="Introductory Image"
//           className="mb-4 mx-auto w-1/3"
//         />
//         <div className="text-2xl font-bold text-center mb-4">Login</div>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ isSubmitting }) => (
//             <Form className="space-y-4">
//               <div>
//                 <label htmlFor="username" className="block text-sm font-medium text-gray-600">
//                   Username:
//                 </label>
//                 <Field
//                   type="text"
//                   name="username"
//                   className="mt-1 p-2 w-full border rounded-md"
//                   placeholder="Username"
//                 />
//                 <ErrorMessage
//                   name="username"
//                   component="div"
//                   className="text-red-500 text-sm mt-1"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-600">
//                   Password:
//                 </label>
//                 <Field
//                   type="password"
//                   name="password"
//                   className="mt-1 p-2 w-full border rounded-md"
//                   placeholder="Enter your password"
//                 />
//                 <ErrorMessage
//                   name="password"
//                   component="div"
//                   className="text-red-500 text-sm mt-1"
//                 />
//               </div>

//               <div className="text-sm">
//                 <p>
//                   Don't have an account?{" "}
//                   <Link className="text-blue-500" to="/signup">
//                     Sign Up Now!
//                   </Link>
//                 </p>
//               </div>

//               <button
//                 type="submit"
//                 className="bg-green-500 text-white py-2 px-4 rounded-md"
//                 disabled={isSubmitting}
//               >
//                 Login
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://flickfeeds-602d4f3e68d7.herokuapp.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registered successfully!');
        // Redirect to the home page
        navigate('/landing_page');
      } else {
        alert(data.message || 'An error occurred while registering.');
      }
    } catch (error) {
      alert('An error occurred while registering.');
      console.error('Register error:', error);
    }
  };

  return (
    <div style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1575919220112-0d5a2dc6a4b6?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: 'rgba(0, 0, 0, 0.75)',
        padding: '40px',
        borderRadius: '10px',
        color: 'white',
        width: '350px',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Log In</h2>
        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) =>setUsername(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>setPassword(e.target.value)}
              style={inputStyle}
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
          >
            Login
          </button>
          <div style={{ textAlign: 'center' }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '15px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: '#fff',
};

const buttonStyle = {
  width: '100%',
  padding: '15px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: 'white',
  color: '#333',
  fontSize: '1rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  marginBottom: '20px',
};

export default Login;
