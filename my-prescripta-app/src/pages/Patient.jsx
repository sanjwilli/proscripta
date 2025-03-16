import React from "react";

const PatientProfile = () => {
  // Sample patient data
  const patient = {
    name: "John Doe",
    age: 45,
    gender: "Male",
    condition: "Hypertension",
    profileImage: "https://via.placeholder.com/150",
    drugs: [
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
      { name: "Atorvastatin", dosage: "20mg", frequency: "Once daily" },
      { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
    ],
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            src={patient.profileImage}
            alt="Patient Profile"
            className="w-24 h-24 rounded-full border-2 border-blue-500"
          />
          <h2 className="text-xl font-semibold mt-4">{patient.name}</h2>
          <p className="text-gray-600">Age: {patient.age}</p>
          <p className="text-gray-600">Gender: {patient.gender}</p>
          <p className="text-gray-600 font-semibold mt-2">
            Condition: {patient.condition}
          </p>
        </div>
        <hr className="my-4" />
        <div>
          <h3 className="text-lg font-semibold">Prescribed Medications</h3>
          <ul className="mt-2">
            {patient.drugs.map((drug, index) => (
              <li
                key={index}
                className="bg-blue-100 p-2 rounded-md shadow-sm my-2"
              >
                <p className="text-blue-800 font-semibold">{drug.name}</p>
                <p className="text-gray-700 text-sm">
                  {drug.dosage} - {drug.frequency}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
