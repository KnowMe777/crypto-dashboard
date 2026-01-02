import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom'
import { FaBell, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate()

  const scrollToContact = () => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100); 
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-white text-black px-5 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="CryptoFlow Logo"
          className="h-10 w-10 cursor-pointer"
        />
        <Link to="/" className="text-xl font-bold cursor-pointer">
          Vantage
        </Link>
      </div>

      <div className="hidden md:flex gap-5">
        <Link
          to="/"
          className="transition duration-200 transform hover:-translate-y-0.5"
        >
          Home
        </Link>
        <Link
          to="/portfolio"
          className="transition duration-200 transform hover:-translate-y-0.5"
        >
          Portfolio
        </Link>
        <button
          className="transition duration-200 transform hover:-translate-y-1"
          onClick={scrollToContact}
        >
          Contact
        </button>
      </div>

      <div className="flex gap-2">
        <button className="p-3 rounded transition duration-200 hover:-translate-y-0.5">
          <FaBell />
        </button>
        <button className="p-3 rounded transition duration-200 hover:-translate-y-0.5">
          <FaArrowRight />
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

