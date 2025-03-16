import React, { useState } from "react";

const DoctorPage = () => {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    trn: "",
  });
  const [medications, setMedications] = useState([
    { name: "", dosage: "", duration: "", instructions: "" },
  ]);

  const handlePatientChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleMedicationChange = (index, e) => {
    const newMedications = [...medications];
    newMedications[index][e.target.name] = e.target.value;
    setMedications(newMedications);
  };

  const addMedication = () => {
    setMedications([...medications, { name: "", dosage: "", duration: "", instructions: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Data:", patient);
    console.log("Prescribed Medications:", medications);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Doctor's Prescription Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Patient Name</label>
            <input type="text" name="name" value={patient.name} onChange={handlePatientChange} className="w-full p-2 border rounded-md" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Age</label>
              <input type="number" name="age" value={patient.age} onChange={handlePatientChange} className="w-full p-2 border rounded-md" required />
            </div>
            <div>
              <label className="block text-gray-700">Gender</label>
              <select name="gender" value={patient.gender} onChange={handlePatientChange} className="w-full p-2 border rounded-md" required>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">TRN (Unique ID)</label>
            <input type="text" name="trn" value={patient.trn} onChange={handlePatientChange} className="w-full p-2 border rounded-md" required />
          </div>

          <h3 className="text-xl font-semibold text-blue-600 mb-2">Prescribed Medications</h3>
          {medications.map((med, index) => (
            <div key={index} className="border p-4 rounded-md mb-4">
              <div className="mb-2">
                <label className="block text-gray-700">Drug Name</label>
                <input type="text" name="name" value={med.name} onChange={(e) => handleMedicationChange(index, e)} className="w-full p-2 border rounded-md" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Dosage</label>
                  <input type="text" name="dosage" value={med.dosage} onChange={(e) => handleMedicationChange(index, e)} className="w-full p-2 border rounded-md" required />
                </div>
                <div>
                  <label className="block text-gray-700">Duration (Days/Weeks/Months)</label>
                  <input type="text" name="duration" value={med.duration} onChange={(e) => handleMedicationChange(index, e)} className="w-full p-2 border rounded-md" required />
                </div>
              </div>
              <div className="mt-2">
                <label className="block text-gray-700">Specific Instructions</label>
                <textarea name="instructions" value={med.instructions} onChange={(e) => handleMedicationChange(index, e)} className="w-full p-2 border rounded-md" required></textarea>
              </div>
            </div>
          ))}
          <button type="button" onClick={addMedication} className="w-full bg-blue-500 text-white p-2 rounded-md mt-2">+ Add Another Medication</button>
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-md mt-4">Submit Prescription</button>
        </form>
      </div>
    </div>
  );
};

export default DoctorPage;
