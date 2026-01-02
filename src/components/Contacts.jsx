import logo from "../../public/vantage.svg";
import {
  FaLinkedin,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-16 px-8 mt-10 rounded-xl w-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        <div className="flex flex-col items-center justify-center">
          <img
            src={logo}
            alt="Vantage Logo"
            className="h-32 w-32 object-contain"
          />
          <h2 className="text-4xl font-bold mt-4 tracking-wide">Vantage</h2>
        </div>

        <div className="hidden md:block w-[3px] h-64 bg-gray-600"></div>

        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

          <div className="space-y-3 text-lg font-light">
            <div className="flex items-center justify-start gap-3">
              <FaEnvelope className="text-white w-5" />{" "}
              <a
                href="mailto:khnhanan5@gmail.com"
                target="_blank"
                rel="noopener norefferer"
                className="hover:text-blue-300 transition transform duration-300 cursor-pointer"
              >
                khnhanan5@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-start gap-3">
              <FaGithub className="text-white w-5" />
              <a
                href="https://github.com/KnowMe777"
                target="_blank"
                rel="noopener norefferer"
                className="hover:text-blue-300 transition transform duration-300 cursor-pointer"
              >
                KnowMe777
              </a>
            </div>

            <div className="flex items-center justify-start gap-3">
              <FaLinkedin className="text-white w-5" />
              <a
                href="https://www.linkedin.com/in/hanan-khan-170b9a34a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener norefferer"
                className="hover:text-blue-300 transition transform duration-300 cursor-pointer"
              >
                Hanan Khan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
