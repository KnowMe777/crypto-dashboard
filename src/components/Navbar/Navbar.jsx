import React from "react";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="w-full bg-white text-black px-5 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="CryptoFlow Logo"
          className="h-10 w-10 cursor-pointer"
        />
        <p className="text-xl font-bold cursor-pointer">Vantage</p>
      </div>

      <div className="hidden md:flex gap-5">
        <button className="transition duration-200 transform hover:-translate-y-0.5">
          Home
        </button>
        <button className="transition duration-200 transform hover:-translate-y-0.5">
          Portfolio
        </button>
        <button className="transition duration-200 transform hover:-translate-y-1">
          Contact
        </button>
      </div>

      <div className="flex gap-2">
        <button className="p-3 rounded transition duration-200 hover:-translate-y-0.5">
          <i className="fa-solid fa-bell"></i>
        </button>
        <button className="p-3 rounded transition duration-200 hover:-translate-y-0.5">
          <i className="fa-solid fa-right-to-bracket"></i>
        </button>
      </div>

      <div className="md:hidden">
        <button className="p-2 rounded hover:bg-gray-800 transition duration-200 transform hover:scale-110">
          <i className="fa-regular fa-bell"></i>
        </button>
      </div>
    </nav>
  );
}

