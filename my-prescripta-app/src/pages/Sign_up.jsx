import React, { useState } from "react";

const Login = () => {
  const [userType, setUserType] = useState("patient");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    doctorRegNumber: "",
    pharmacyRegNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">Select User Type</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="pharmacy">Pharmacy</option>
          </select>
        </div>

        <form onSubmit={handleSubmit}>
          {userType === "patient" && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                required
              />
            </>
          )}

          {userType === "doctor" && (
            <>
              <input
                type="text"
                name="doctorRegNumber"
                placeholder="Doctor Registration Number"
                value={formData.doctorRegNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                required
              />
            </>
          )}

          {userType === "pharmacy" && (
            <>
              <input
                type="text"
                name="pharmacyRegNumber"
                placeholder="Pharmacy Registration Number"
                value={formData.pharmacyRegNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                required
              />
            </>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
