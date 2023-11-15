import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Import the AuthContext

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the useAuth hook to access the login function

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const user = await response.json();
      console.log("Login successful:", user);

      // Use the login function from the AuthContext to update the user state
      login(user);

      // Redirect or perform other actions after successful login
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.message);
      // Handle login error (e.g., display error message to the user)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md mt-8 mb-8">
        <img
          src="https://static8.depositphotos.com/1003580/884/i/450/depositphotos_8846425-stock-photo-group-of-happy-children-playing.jpg"
          alt="Introductory Image"
          className="mb-4 mx-auto w-1/3"
        />
        <div className="text-2xl font-bold text-center mb-4">Login</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                  Username:
                </label>
                <Field
                  type="text"
                  name="username"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password:
                </label>
                <Field
                  type="password"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="text-sm">
                <p>
                  Don't have an account?{" "}
                  <Link className="text-blue-500" to="/signup">
                    Sign Up Now!
                  </Link>
                </p>
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-md"
                disabled={isSubmitting}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;