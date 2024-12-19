import Image from "next/image";
import NavBar from "@/components/NavBar";
import AuthorCard from "@/components/AuthorCard";
import Footer from "@/components/Footer";
export default function About() {
  return (
    <div className="font-sans bg-gray-50">
      <NavBar />
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-pink-800 text-4xl font-extrabold">
            Meet our team
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-sm:justify-center mt-12 max-sm:max-w-xs mx-auto">
          <div className="bg-pink-800 p-4 border rounded-lg">
            <Image
              src="/images/team-1.webp"
              alt="Blog Post 1"
              width={600}
              height={208}
              className="w-full h-52 object-cover"
            />

            <div className="text-center mt-4">
              <h4 className="text-base font-semibold text-white">
                Software Engineer
              </h4>
              <p className="text-xs mt-2 text-white">John Doe</p>
            </div>
          </div>

          <div className="bg-pink-800 p-4 border rounded-lg">
            <Image
              src="/images/team-2.webp"
              alt="Blog Post 2"
              width={600}
              height={208}
              className="w-full h-52 object-cover"
            />

            <div className="text-center mt-4">
              <h4 className="text-base font-semibold text-white">
                Web Developer
              </h4>
              <p className="text-xs mt-2 text-white">Mark Adair</p>
            </div>
          </div>

          <div className="bg-pink-800 p-4 border rounded-lg">
            <Image
              src="/images/team-3.webp"
              alt="Blog Post 3"
              width={600}
              height={208}
              className="w-full h-52 object-cover"
            />

            <div className="text-center mt-4">
              <h4 className="text-base font-semibold text-white">
                Web Designer
              </h4>
              <p className="text-xs mt-2 text-white">Simon Konecki</p>
            </div>
          </div>
          <div className="bg-pink-800 p-4 border rounded-lg">
            <Image
              src="/images/programmer.jpg"
              alt="Blog Post 4"
              width={600}
              height={208}
              className="w-full h-52 object-cover"
            />

            <div className="text-center mt-4">
              <h4 className="text-base font-semibold text-white">Programmer</h4>
              <p className="text-xs mt-2 text-white">Anders Hejlsberg</p>
            </div>
          </div>
          <div className="bg-pink-800 p-4 border rounded-lg">
            <Image
              src="/images/Coding Specialist.webp"
              alt="Blog Post 5"
              width={600}
              height={208}
              className="w-full h-52 object-cover"
            />

            <div className="text-center mt-4">
              <h4 className="text-base font-semibold text-white">
                Coding Specialist
              </h4>
              <p className="text-xs mt-2 text-white">Manuel G</p>
            </div>
          </div>
          <div className="bg-pink-800 p-4 border rounded-lg">
            <Image
              src="/images/Technology.webp"
              alt="Blog Post 6"
              width={600}
              height={208}
              className="w-full h-52 object-cover"
            />

            <div className="text-center mt-4">
              <h4 className="text-base font-semibold text-white">
                Technology Consultant
              </h4>
              <p className="text-xs mt-2 text-white">Kevin Ryan</p>
            </div>
          </div>
          <div className="bg-pink-800 p-4 border rounded-lg">
            <Image
              src="/images/IT Engineer.jpg"
              alt="Blog Post 7"
              width={600}
              height={208}
              className="w-full h-52 object-cover"
            />

            <div className="text-center mt-4">
              <h4 className="text-base font-semibold text-white">
                IT Engineer
              </h4>
              <p className="text-xs mt-2 text-white"> Cristos Goodrow</p>
            </div>
          </div>
          <div className="bg-pink-800 p-4 border rounded-lg">
            <Image
              src="/images/Technical Developer.webp"
              alt="Blog Post 8"
              width={600}
              height={208}
              className="w-full h-52 object-cover"
            />

            <div className="text-center mt-4">
              <h4 className="text-base font-semibold text-white">
                Technical Developer
              </h4>
              <p className="text-xs mt-2 text-white"> Sheryl Sandberg </p>
            </div>
          </div>
          <div className="bg-pink-800 p-4 border rounded-lg">
            <Image
              src="/images/Application Engineer.webp"
              alt="Blog Post 9"
              width={600}
              height={208}
              className="w-full h-52 object-cover"
            />

            <div className="text-center mt-4">
              <h4 className="text-base font-semibold text-white">
                Application Engineer
              </h4>
              <p className="text-xs mt-2 text-white"> Virginia Rometty  </p>
            </div>
          </div>
        </div>
      </div>
      <AuthorCard/>
      <Footer/>
    </div>
  );
}
