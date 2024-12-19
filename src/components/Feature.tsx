import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-50 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-center animate-fade-in-up transtion-all duration-500 ease-in-out transform hover:translate-y-[-5px ] hover:text-black text-red-600">
          Shabana Ahmed: Navigating the Secrets of Technology Tech Chronicles
          Blog!
        </h2>
        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          Tech Chronicles: Exploring the World of Technology! Join Mehak Alamgir
          as she takes you on a journey through web development. From basic
          ideas to advanced tips, this blog shares helpful guides and advice to
          support new developers in building great websites. Discover, learn,
          and improve your web development skills with ease!
        </p>
        <div className="mx-auto file:max-w-7xl px-5">
          <h1 className="text-4xl font-bold text-red-600 animate-color-change text-center mb-8">
            Exploring our Categories
          </h1>

          <div className="grid grid-cols-2  gap-4 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
              "Technology",
              "Artificial Intelligence",
              "HTML",
              "Next js",
              "Web Development",
              "Virtual Reality",
            ].map((category, index) => (
              <div
                key={index}
                className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600"
              >
                <p className="text-center text-lg font-semibold">{category}</p>
                <div className="absolute inset-0 border-2 border-transprent group-hover:border-white rounded-lg transition duration-300 ease-in-out gap-1"></div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10">
          Explore our wide variety of categories, where you will find valuable
          knowledge and insights that match your interests. Each category has
          blogs that cover the latest trends, useful technologies, and important
          skills in web development and beyond. Whether you are a new developer,
          an experienced tech enthusiast, or just curious about the digital
          world, there is something here for everyone. Check out the categories
          below and grow your understanding of the exciting tech world!
        </p>
      </section>
    </div>
  );
}
