import React, { useState } from "react";

const Patients = ({ data, handlePatientClick, currentPatient }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-3xl mx-2 mt-10">
      <div className="flex items-center justify-between p-5">
        <p className="text-3xl font-bold">Patients</p>
        <div className="relative">
          <div
            className={`transition-all duration-300 ${
              showSearch ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <input
              type="text"
              placeholder="Search patients"
              className="border p-2 rounded-full text-sm"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <span
            className="material-symbols-outlined absolute right-2 top-2 hover:cursor-pointer"
            onClick={() => setShowSearch((prev) => !prev)}
          >
            search
          </span>
        </div>
      </div>

      <div className="p-5 space-y-4 h-[calc(100vh-200px)] overflow-y-auto">
        <div className="overflow-y-auto">
          {filteredData.map((patient, index) => (
            <div
              key={index}
              className={`id p-5 flex items-center justify-between rounded-lg mb-4 ${
                currentPatient.name === patient.name ? "bg-[#D8FCF7]" : "bg-white"
              }`}
              onClick={() => handlePatientClick(patient)}
            >
              <div className="flex items-center space-x-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src={patient.profile_picture}
                  alt="profile"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {patient.name}
                  </h2>
                  <p className="text-sm text-gray-600">Age: {patient.age}</p>
                  <p className="text-sm text-gray-600">Gender: {patient.gender}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-600 cursor-pointer">
                more_horiz
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patients;
