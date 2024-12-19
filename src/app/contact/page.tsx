import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <NavBar />
      <div className="max-w-3xl p-8 max-lg:max-w-3xl mx-auto bg-[#bd206bd0] rounded-lg">
        <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-15 p-10 font-[sans-serif]">
          <div>
            <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
            <p className="text-sm text-gray-100 mt-4 leading-relaxed">
              Have some big idea or brand to develop and need help? Then reach out; we love to hear about your project and provide help.
            </p>

            <ul className="mt-12 space-y-8">
              <li className="flex items-center">
                <FaEnvelope size={16} color="#fff" />
                <a href="mailto:info@example.com" className="text-white text-sm ml-4">
                  info@example.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt size={16} color="#fff" />
                <a href="tel:+158996888" className="text-white text-sm ml-4">
                  +158 996 888
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt size={16} color="#fff" />
                <span className="text-white text-sm ml-4">
                  123 Street 256 House
                </span>
              </li>
            </ul>

            <ul className="flex mt-12 space-x-4">
              <li className="bg-blue-400 hover:bg-pink-400 h-10 w-10 rounded-full flex items-center justify-center">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF size={18} color="#fff" />
                </a>
              </li>
              <li className="bg-yellow-400 hover:bg-pink-400 h-10 w-10 rounded-full flex items-center justify-center">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn size={18} color="#fff" />
                </a>
              </li>
              <li className="bg-blue-400 hover:bg-pink-400 h-10 w-10 rounded-full flex items-center justify-center">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={18} color="#fff" />
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-pink-100 p-6 rounded-lg">
            <p className="text-sm font-semibold text-pink-800">Iam interested in...</p>

            <div className="space-y-4 max-lg:mt-4">
              <button
                type="button"
                className="px-4 py-2 rounded-lg bg-[#ff85c0] text-white text-sm tracking-wider font-medium outline-none border-2 border-[#ff85c0] mr-4"
              >
                Web design
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-lg bg-transparent text-pink-800 text-sm tracking-wider font-medium outline-none border-2 border-pink-300 mr-4"
              >
                Graphic design
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-lg bg-transparent text-pink-800 text-sm tracking-wider font-medium outline-none border-2 border-pink-300"
              >
                Design system
              </button>
            </div>

            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg py-3 px-4 text-pink-800 text-sm outline-[#6d0336]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg py-3 px-4 text-pink-800 text-sm outline-[#ff85c0]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg py-3 px-4 text-pink-800 text-sm outline-[#ff85c0]"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full rounded-lg px-4 text-pink-800 text-sm pt-3 outline-[#ff85c0]"
              ></textarea>
              <button
                type="submit"
                className="text-white bg-[#ff85c0] hover:bg-[#ff5fa0] tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
       
      </div>
      <Footer/>
    </>
  );
}