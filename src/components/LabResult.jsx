import React from "react";

const LabResult = ({ currentPatient }) => {
  return (
    <div className="bg-white rounded-3xl mt-2 p-5 flex-grow overflow-hidden">
      <p className="text-2xl font-semibold">Lab Results</p>

      <div className="p-4 space-y-3 h-[calc(100vh-890px)] overflow-y-auto">
        {currentPatient.lab_results.map((report, index) => (
          <li key={index} className="flex items-center justify-between  rounded-md px-2 hover:bg-slate-200">
            <p>{report}</p>
            <span className="material-symbols-outlined hover:cursor-pointer">
              download
            </span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default LabResult;
