// import React from "react";
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthContext"; // Import the AuthContext

// function Signup() {
//   const navigate = useNavigate();
//   const { login } = useAuth(); // Use the useAuth hook to access the login function

//   const initialValues = {
//     username: "",
//     email: "",
//     phone_number: "",
//     password: "",
//   };

//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required("Username is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     phone_number: Yup.string().required("Phone number is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/register/", {
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

//       if (user.error) {
//         alert("User already exists!");
//       } else {
//         // Fetch user data after successful registration
//         const userDataResponse = await fetch(`http://127.0.0.1:8000/api/user/${user.id}/`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         if (userDataResponse.ok) {
//           const userData = await userDataResponse.json();

//           // Use the login function from the context to update the user state
//           login(userData);

//           alert("Successfully created a new user!");
//           navigate("/");
//         } else {
//           alert("Error fetching user data after registration");
//         }
//       }
//     } catch (error) {
//       console.error("Signup error:", error);
//     }

//     setSubmitting(false);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="bg-white p-8 rounded shadow-md mt-8 mb-8">
//         <img
//           src="https://static8.depositphotos.com/1003580/884/i/450/depositphotos_8846425-stock-photo-group-of-happy-children-playing.jpg"
//           alt="Introductory Image"
//           className="mb-4 mx-auto w-1/3"
//         />
//         <div className="text-2xl font-bold text-center mb-4">Sign Up</div>
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
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-600">
//                   Email:
//                 </label>
//                 <Field
//                   type="email"
//                   name="email"
//                   className="mt-1 p-2 w-full border rounded-md"
//                   placeholder="Enter your email"
//                 />
//                 <ErrorMessage
//                   name="email"
//                   component="div"
//                   className="text-red-500 text-sm mt-1"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="phone_number" className="block text-sm font-medium text-gray-600">
//                   Phone Number:
//                 </label>
//                 <Field
//                   type="text"
//                   name="phone_number"
//                   className="mt-1 p-2 w-full border rounded-md"
//                   placeholder="Enter your phone number"
//                 />
//                 <ErrorMessage
//                   name="phone_number"
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

//               <button
//                 type="submit"
//                 className="bg-green-500 text-white py-2 px-4 rounded-md"
//                 disabled={isSubmitting}
//               >
//                 Sign Up
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// }

// export default Signup;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   const handleRegister = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('https://flickfeeds-602d4f3e68d7.herokuapp.com/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           email,
//           password, // Passwords should ideally be hashed client-side or ensure HTTPS
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert('Registered successfully!');
//         // Here you might want to redirect the user or clear the form
//       } else {
//         alert(data.message || 'An error occurred while registering.');
//       }
//     } catch (error) {
//       alert('An error occurred while registering.');
//       console.error('Register error:', error);
//     }
//   };

//   return (
//     <div style={{
//       backgroundImage: 'url(https://images.unsplash.com/photo-1575919220112-0d5a2dc6a4b6?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
//       backgroundSize: 'cover',
//       height: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     }}>
//       <div style={{
//         background: 'rgba(0, 0, 0, 0.75)',
//         padding: '40px',
//         borderRadius: '10px',
//         color: 'white',
//         width: '350px',
//       }}>
//         <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
//         <form onSubmit={handleRegister}>
//           <div style={{ marginBottom: '20px' }}>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               style={inputStyle}
//             />
//           </div>
//           <div style={{ marginBottom: '20px' }}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={inputStyle}
//             />
//           </div>
//           <div style={{ marginBottom: '20px' }}>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={inputStyle}
//             />
//           </div>
//           <button
//             type="submit"
//             style={buttonStyle}
//           >
//             Register
//           </button>
//           <div style={{ textAlign: 'center' }}>
//             Already have an account?{' '}
//             <Link to="/Login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const inputStyle = {
//   width: '100%',
//   padding: '15px',
//   marginBottom: '10px',
//   borderRadius: '5px',
//   border: 'none',
//   backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   color: '#fff',
// };

// const buttonStyle = {
//   width: '100%',
//   padding: '15px',
//   borderRadius: '5px',
//   border: 'none',
//   backgroundColor: 'white',
//   color: '#333',
//   fontSize: '1rem',
//   cursor: 'pointer',
//   fontWeight: 'bold',
//   marginBottom: '20px',
// };

// export default Register;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// //Register component
// const Register = () => {

// //State to hold form data
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: ''
//   });

// //State to hold the selected user type (student or mentor)
//   const [userType, setUserType] = useState(null);

// //State to track the registration status (success or null)
//   const [registrationStatus, setRegistrationStatus] = useState(null);

// //Hook to navigate between routes
//   const navigate = useNavigate();

// //Function to handle changes in form inputs
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

// //Function to handle navigation back to home page
//   const handleBack = () => {
//     navigate('/');
//   };

// //Function to handle user type selection (student or mentor)
//   const handleUserTypeSelection = (type) => {
//     setUserType(type);
//     setFormData({
//       ...formData,
//       role: type
//     });
//   };

// //Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (userType) {
//       const registerRoute = userType === 'mentor' ? 'api/SkillCode/mentors/signup' : 'api/SkillCode/students/signup';

//       fetch(registerRoute, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       })
//       .then(response => response.json())
//       .then(data => {
//         if (data.access_token) {
//           localStorage.setItem('accessToken', data.access_token);
//           setRegistrationStatus('success');
//         } else {
//           alert(data.error);
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred while registering.');
//       });
//     }
//   };

// //Function to handle clicking on the "Login" button
//   const handleLoginClick = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="centered-container">
//       <h2 style={{ color: 'white' }}>Register</h2>
//       {registrationStatus === 'success' ? (
//         <div>
//           <p style={{ color: 'white' }}>You have Successfully created a SkillCode account!</p>
//           <button onClick={handleLoginClick}>Proceed to Login</button>
//         </div>
//       ) : (
//         <div>
//           <p style={{ color: 'white' }}>Are you registering as a student or mentor?</p>
//           <button
//             type="button"
//             onClick={() => handleUserTypeSelection('student')}
//             style={{ marginRight: '50px' }} 
//           >
//             Student
//           </button>
//           <button
//             type="button"
//             onClick={() => handleUserTypeSelection('mentor')}
//           >
//             Mentor
//           </button>
//         </div>
//       )}
//       {userType !== null && registrationStatus !== 'success' && (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label style={{ color: 'white' }}>Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label style={{ color: 'white' }}>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label style={{ color: 'white' }}>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">Register</button>
//         </form>
//       )}
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleBack}>Back to Home</button>
//       </div>
//     </div>
//   );
// };


// export default Register;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {useHistory} from "react-router-dom";

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const history = useHistory(); // Initialize the useHistory hook

//   const handleRegister = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('https://flickfeeds-602d4f3e68d7.herokuapp.com/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           email,
//           password,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert('Registered successfully!');
//         // Redirect to the home page
//         history.push('/home');
//       } else {
//         alert(data.message || 'An error occurred while registering.');
//       }
//     } catch (error) {
//       alert('An error occurred while registering.');
//       console.error('Register error:', error);
//     }
//   };

//   return (
//     <div style={{
//       backgroundImage: 'url(https://images.unsplash.com/photo-1575919220112-0d5a2dc6a4b6?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
//       backgroundSize: 'cover',
//       height: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     }}>
//       <div style={{
//         background: 'rgba(0, 0, 0, 0.75)',
//         padding: '40px',
//         borderRadius: '10px',
//         color: 'white',
//         width: '350px',
//       }}>
//         <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
//         <form onSubmit={handleRegister}>
//           <div style={{ marginBottom: '20px' }}>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               style={inputStyle}
//             />
//           </div>
//           <div style={{ marginBottom: '20px' }}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={inputStyle}
//             />
//           </div>
//           <div style={{ marginBottom: '20px' }}>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={inputStyle}
//             />
//           </div>
//           <button
//             type="submit"
//             style={buttonStyle}
//           >
//             Register
//           </button>
//           <div style={{ textAlign: 'center' }}>
//             Already have an account?{' '}
//             <Link to="/Login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const inputStyle = {
//   width: '100%',
//   padding: '15px',
//   marginBottom: '10px',
//   borderRadius: '5px',
//   border: 'none',
//   backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   color: '#fff',
// };

// const buttonStyle = {
//   width: '100%',
//   padding: '15px',
//   borderRadius: '5px',
//   border: 'none',
//   backgroundColor: 'white',
//   color: '#333',
//   fontSize: '1rem',
//   cursor: 'pointer',
//   fontWeight: 'bold',
//   marginBottom: '20px',
// };

// export default Register;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
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
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
          >
            Register
          </button>
          <div style={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
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

export default Register;
