import React from "react";

const Profile = ({ currentPatient }) => {

  const formatDOB = (dob) => {
    const date = new Date(dob); 
    const options = { year: 'numeric', month: 'long', day: 'numeric' }; 
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-white rounded-xl mt-2 pt-4 pb-4 p-5">
      <div className="flex justify-center items-center">
        <div className="max-w-sm text-center hover:cursor-pointer">
          <img
            className="w-48 rounded-full mx-auto"
            src={currentPatient.profile_picture}
            alt="Profile"
          />
          <h2 className="mt-4 text-2xl font-bold">{currentPatient.name}</h2>
        </div>
      </div>
      <ul className="mt-4 p-4 flex space-y-4 flex-col">
        <li className="flex items-center space-x-4">
          <span className="material-symbols-outlined bg-gray-200 rounded-full p-2">
            calendar_today
          </span>
          <div>
            <p>Date of Birth</p>
            <p className="font-semibold">{formatDOB(currentPatient.date_of_birth)}</p>
          </div>
        </li>
        <li className="flex space-x-4">
          <span className="material-symbols-outlined bg-gray-200 rounded-full p-2">
            {currentPatient.gender === "Male" ? "male" : "female"}
          </span>
          <div>
            <p>Gender</p>
            <p className="font-semibold">{currentPatient.gender}</p>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <span className="material-symbols-outlined bg-gray-200 rounded-full p-2">
            call
          </span>
          <div>
            <p>Phone</p>
            <p className="font-semibold">{currentPatient.phone_number}</p>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <span className="material-symbols-outlined bg-gray-200 rounded-full p-2">
            call
          </span>
          <div>
            <p>Emergency Contacts</p>
            <p className="font-semibold">{currentPatient.emergency_contact}</p>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <span className="material-symbols-outlined bg-gray-200 rounded-full p-2">
            health_and_safety
          </span>
          <div>
            <p>Insurance Provider</p>
            <p className="font-semibold">{currentPatient.insurance_type}</p>
          </div>
        </li>
      </ul>

      <div className="flex justify-center mt-4">
        <button className="bg-[#01F0D0] py-2 px-4 rounded-full font-semibold">Show all Information</button>
      </div>
    </div>
  );
};

export default Profile;
