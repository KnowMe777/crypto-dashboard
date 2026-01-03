import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import { FaBell, FaArrowRight, FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const scrollToContact = () => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false })
      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="w-full bg-white text-black px-5 py-4 shadow-md relative z-50">
      <div className="flex items-center justify-between">
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

        <div className="hidden md:flex gap-2 items-center">
          <div className="flex gap-2">
            <button className="p-3 rounded transition duration-200 hover:-translate-y-0.5">
              <FaBell />
            </button>
            <button className="p-3 rounded transition duration-200 hover:-translate-y-0.5">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl p-2"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-5 gap-5 md:hidden border-t rounded-md
    transition-all duration-300 ease-out
    ${
      isMenuOpen
        ? "opacity-100 translate-y-0 max-h-96"
        : "opacity-0 -translate-y-3 max-h-0 overflow-hidden pointer-events-none"
    }
  `}
      >
        <Link
          to="/"
          className="text-lg w-full text-center py-2 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/portfolio"
          className="text-lg w-full text-center py-2 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(false)}
        >
          Portfolio
        </Link>

        <button
          className="text-lg w-full text-center py-2 hover:bg-gray-100"
          onClick={scrollToContact}
        >
          Contact
        </button>
      </div>
    </nav>
  )
}
