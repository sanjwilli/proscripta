import React, { useState } from "react";

const Pharmacy = () => {
  const [drugs, setDrugs] = useState([]);
  const [form, setForm] = useState({ name: "", dosage: "", price: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.dosage && form.price) {
      setDrugs([...drugs, form]);
      setForm({ name: "", dosage: "", price: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Pharmacy Info */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">ABC Pharmacy</h1>
        <p className="text-gray-600">123 Health St, Wellness City</p>
        <p className="text-gray-600">Phone: (555) 123-4567</p>
      </div>

      {/* Drug Form */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Add Drug</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Drug Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            type="text"
            name="dosage"
            placeholder="Dosage (e.g., 500mg)"
            value={form.dosage}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price per dosage ($)"
            value={form.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Add Drug
          </button>
        </form>
      </div>

      {/* Drug List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Drugs Available</h2>
        {drugs.length > 0 ? (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Dosage</th>
                <th className="border p-2">Price ($)</th>
              </tr>
            </thead>
            <tbody>
              {drugs.map((drug, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{drug.name}</td>
                  <td className="border p-2">{drug.dosage}</td>
                  <td className="border p-2">{drug.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No drugs added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Pharmacy;
