import React from "react";

const Navbar = () => {
  return (
    <div className="p-2 bg-inherit">
      <nav className="w-full h-16 px-6 bg-white rounded-full flex items-center justify-between">
        <img src="../assets/Testlogo.svg" alt="" className="" />

        <ul className="flex space-x-12">
          <li className="flex items-center hover:cursor-pointer px-2 py-2 rounded-full hover:bg-[#A0F7E5]">
            <a href="#overview" className="flex items-center space-x-1">
              <span className="material-symbols-outlined">home</span>
              <p className="text-gray-700">Overview</p>
            </a>
          </li>

          <li className="flex items-center hover:cursor-pointer bg-[#01F0D0] py-2 px-3 rounded-full">
            <a href="#overview" className="flex items-center space-x-1">
              <span class="material-symbols-outlined">group</span>
              <p className="text-gray-700">Patients</p>
            </a>
          </li>
          <li className="flex items-center hover:cursor-pointer  px-2 py-2 rounded-full hover:bg-[#A0F7E5]">
            <a href="#overview" className="flex items-center space-x-1">
              <span className="material-symbols-outlined">calendar_today</span>
              <p className="text-gray-700">Schedule</p>
            </a>
          </li>
          <li className="flex items-center hover:cursor-pointer px-2 py-2 rounded-full hover:bg-[#A0F7E5]">
            <a href="#overview" className="flex items-center space-x-1">
              <span className="material-symbols-outlined">chat_bubble</span>
              <p className="text-gray-700">Message</p>
            </a>
          </li>
          <li className="flex items-center hover:cursor-pointer px-2 py-2 rounded-full hover:bg-[#A0F7E5]">
            <a href="#overview" className="flex items-center space-x-1">
              <span className="material-symbols-outlined">credit_card</span>
              <p className="text-gray-700">Transactions</p>
            </a>
          </li>
        </ul>

        <div className="flex items-center">
          <img
            src="../assets/doc.png"
            alt="Profile"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <div className="ml-4">
              <h2 className="text-sm font-semibold text-gray-800">
                Dr. Jose Simmons
              </h2>
              <p className="text-sm text-gray-600">General Practitioner</p>
            </div>
          </div>
          <div className="h-6 border-l m-2 border-gray-300"></div>
          <span class="material-symbols-outlined hover:cursor-pointer">
            settings
          </span>
          <span class="material-symbols-outlined hover:cursor-pointer">
            more_vert
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
