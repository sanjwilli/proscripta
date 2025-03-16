import React, { useState } from "react";

const Signup = () => {
  const [userType, setUserType] = useState("patient");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    trn: "",
    age: "",
    gender: "",
    password: "",
    doctorReg: "",
    areaOfPractice: "",
    pharmacyName: "",
    pharmacyReg: "",
    pharmacyLicense: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>
        <div className="mt-4">
          <label className="block text-gray-700">Select User Type:</label>
          <select
            className="w-full mt-2 p-2 border rounded-lg"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="pharmacy">Pharmacy</option>
          </select>
        </div>

        <form className="mt-6" onSubmit={handleSubmit}>
          {(userType === "patient" || userType === "doctor") && (
            <>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full p-2 border rounded-lg mt-2"
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-2 border rounded-lg mt-2"
                onChange={handleChange}
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                className="w-full p-2 border rounded-lg mt-2"
                onChange={handleChange}
              />
              <select
                name="gender"
                className="w-full p-2 border rounded-lg mt-2"
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </>
          )}
          
          {userType === "patient" && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded-lg mt-2"
                onChange={handleChange}
              />
              <input
                type="text"
                name="trn"
                placeholder="TRN (Unique ID)"
                className="w-full p-2 border rounded-lg mt-2"
                onChange={handleChange}
              />
            </>
          )}
          
          {userType === "doctor" && (
            <>
              <input
                type="text"
                name="doctorReg"
                placeholder="Doctor Registration Number"
                className="w-full p-2 border rounded-lg mt-2"
                onChange={handleChange}
              />
              <input
                type="text"
                name="areaOfPractice"
                placeholder="Area of Practice"
                className="w-full p-2 border rounded-lg mt-2"
                onChange={handleChange}
              />
            </>
          )}
          
          {userType === "pharmacy" && (
            <>
              <input
                type="text"
                name="pharmacyName"
                placeholder="Pharmacy Name"
                className="w-full p-2 border rounded-lg mt-2"
                onChange={handleChange}
              />
              <input
                type="text"
                name="pharmacyReg"
                placeholder="Pharmacy Registration Number"
                className="w-full p-2 border rounded-lg mt-2"
                onChange={handleChange}
              />
              <input
                type="text"
                name="pharmacyLicense"
                placeholder="Pharmacy License Number"
                className="w-full p-2 border rounded-lg mt-2"
                onChange={handleChange}
              />
            </>
          )}
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded-lg mt-2"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg mt-4 hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
