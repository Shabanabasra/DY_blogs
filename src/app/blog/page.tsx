import NavBar from "@/components/NavBar";
import Image from "next/image";
import Footer from "@/components/Footer";


export default function Blog() {
  return (
    <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
      <NavBar />
      <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          <div className="bg-white rounded overflow-hidden">
            <img
              src="/images/cardImg.webp"
              alt="Blog Post 1"
              width={600}
              height={208}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Transforming Creativity with AI
              </h3>
              <p className="text-gray-500 text-sm">
                AI tools are revolutionizing creative fields by offering new ways to brainstorm, design, and innovate. From art to writing, AI amplifies human potential and unlocks fresh ideas.
              </p>
              <p className="text-blue-500 text-[13px] font-semibold mt-4">
                08 December 2024
              </p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-pink-500 hover:bg-blue-600 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden">
            <img
              src="/images/hotel-img.webp"
              alt="Blog Post 2"
              width={600}
              height={208}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Consectetur Adipiscing
              </h3>
              <p className="text-gray-500 text-sm">
                Unlock the potential of consectetur adipiscing by prioritizing balance, structure, and harmony in your workflow. Streamline your approach with tools that promote efficiency and seamless integration.
              </p>
              <p className="text-blue-500 text-[13px] font-semibold mt-4">
                08 December 2024
              </p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-pink-500 hover:bg-blue-600 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden">
            <img
              src="/images/team-image.webp"
              alt="Blog Post 3"
              width={600}
              height={208}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Innovators Changing the Game
              </h3>
              <p className="text-gray-500 text-sm">
                Innovators are leveraging AI to disrupt industries, creating smarter solutions and groundbreaking technologies. These pioneers are redefining possibilities and setting new standards for the future.
              </p>
              <p className="text-blue-500 text-[13px] font-semibold mt-4">
                08 December 2024
              </p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-pink-500 hover:bg-blue-600 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden">
            <img
              src="/images/prediction.webp"
              alt="Blog Post 4"
              width={600}
              height={208}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Trends and Predictions
              </h3>
              <p className="text-gray-500 text-sm">
                Stay ahead by analyzing AI-driven trends and predictions to anticipate changes in your industry. Use AI insights to make proactive decisions and adapt to emerging opportunities swiftly.
              </p>
              <p className="text-blue-500 text-[13px] font-semibold mt-4">
                08 December 2024
              </p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-pink-500 hover:bg-blue-600 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden">
            <img
              src="/images/hacks-watch.webp"
              alt="Blog Post 5"
              width={600}
              height={208}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Hacks to Supercharge Your Day
              </h3>
              <p className="text-gray-500 text-sm">
                Leverage AI tools to automate routine tasks and enhance productivity, freeing up time for creative work. Use AI-driven insights to make data-backed decisions faster and more efficiently.
              </p>
              <p className="text-blue-500 text-[13px] font-semibold mt-4">
                08 December 2024
              </p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-pink-500 hover:bg-blue-600 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden">
            <img
              src="/images/Imagination.webp"
              alt="Blog Post 6"
              width={600}
              height={208}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                A Guide to Igniting Your Imagination
              </h3>
              <p className="text-gray-500 text-sm">
                Use AI to spark creative ideas by generating unique concepts, prompts, and solutions you might not have considered. Let AI-powered brainstorming tools expand your creative boundaries and inspire new directions.
              </p>
              <p className="text-blue-500 text-[13px] font-semibold mt-4">
                08 December 2024
              </p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-pink-500 hover:bg-blue-600 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}