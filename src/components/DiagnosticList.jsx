import React from "react";

const DiagnosticList = ({currentPatient}) => {
  return (
    <div className="bg-white p-2 mt-2 rounded-xl pb-0 mb-0">
      <p className="font-semibold text-2xl p-3">Diagnostic List</p>
      <ul className="flex mx-3 p-2 bg-[#F6F7F8] py-2 rounded-full font-semibold">
        <li className="w-1/4">Problem/Diagnosis</li>
        <li className="w-1/2">Description</li>
        <li className="w-1/4">Status</li>
      </ul>

      {currentPatient.diagnostic_list.map(
        ({ name, description, status }, index) => (
          <ul key={index} className="flex p-2 mx-3">
            <li className="w-1/4">{name}</li>
            <li className="w-1/2">{description}</li>
            <li className="w-1/4">{status}</li>
          </ul>
        )
      )}
    </div>
  );
};

export default DiagnosticList;
