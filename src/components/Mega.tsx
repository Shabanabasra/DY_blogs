import React from "react";
import BlogCard from "../components/BlogCard";


export default function Mega() {
  
  const posts = [
    {
      id: "1",
      title: "HTML Block of Web Development",
      description: "Explore the foundation of HTML, the backbone of every web page.",
      date: "2024-12-2",
      image: "/images/picture1.jpg",
    },
    {
      id: "2",
      title: "Machine Learning Basics",
      description: "A dynamic and essential subset of AI that focuses on developing algorithms that enable computers to learn and make predictions based on data.",
      date: "2024-12-2",
      image: "/images/picture2.jpg",
    },
    {
      id: "3",
      title: "Deep Learning Explained",
      description: "Deep learning is a revolutionary subfield of machine learning that employs neural networks to model complex patterns and make predictions.",
      date: "2024-12-2",
      image: "/images/picture3.jpg",
    },
    {
      id: "4",
      title: "CSS for Styling Websites",
      description: "CSS brings life to websites by adding design, layouts, and responsiveness to your web pages.",
      date: "2024-12-3",
      image: "/images/picture4.jpg",
    },
    {
      id: "5",
      title: "JavaScript: Adding Interactivity",
      description: "JavaScript empowers developers to create dynamic and interactive web experiences.",
      date: "2024-12-3",
      image: "/images/picture5.jpg",
    },
    {
      id: "6",
      title: "React: Building User Interfaces",
      description: "React simplifies the process of building reusable and efficient UI components.",
      date: "2024-12-3",
      image: "/images/picture6.jpg",
    },
    {
      id: "7",
      title: "Node.js for Backend Development",
      description: "Node.js allows developers to use JavaScript for server-side programming, creating scalable applications.",
      date: "2024-12-4",
      image: "/images/picture7.jpg",
    },
    {
      id: "8",
      title: "Python for Data Science",
      description: "Python, with its rich libraries, is a favorite choice for data scientists to analyze and visualize data.",
      date: "2024-12-4",
      image: "/images/picture8.jpg",
    },
    {
      id: "9",
      title: "Understanding APIs",
      description: "APIs allow different software systems to communicate, paving the way for integrations and data sharing.",
      date: "2024-12-4",
      image: "/images/picture9.jpg",
    },
    {
      id: "10",
      title: "Version Control with Git",
      description: "Git makes tracking changes and collaborating on projects seamless, especially in team environments.",
      date: "2024-12-5",
      image: "/images/picture10.jpg",
    },
    {
      id: "11",
      title: "Responsive Web Design",
      description: "Learn the techniques to make your websites look great on all devices, from desktops to smartphones.",
      date: "2024-12-5",
      image: "/images/picture11.jpg",
    },
    {
      id: "12",
      title: "Introduction to Databases",
      description: "Databases store, retrieve, and manage data efficiently for applications and websites.",
      date: "2024-12-5",
      image: "/images/picture12.jpg",
    },
    {
      id: "13",
      title: "Cybersecurity Essentials",
      description: "Protect your digital assets with knowledge of cybersecurity threats and countermeasures.",
      date: "2024-12-6",
      image: "/images/picture13.jpg",
    },
    {
      id: "14",
      title: "Introduction to Blockchain",
      description: "Discover the underlying technology behind cryptocurrencies and decentralized applications.",
      date: "2024-12-6",
      image: "/images/picture14.jpg",
    },
    {
      id: "15",
      title: "Cloud Computing Basics",
      description: "Understand how cloud services like AWS and Azure provide scalable and cost-efficient solutions.",
      date: "2024-12-6",
      image: "/images/picture1.jpg",
    },
  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animated-color-change">
        {" "}
        Exploring the World of AI and Technology
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
            <BlogCard post={post} isDarkBackground={index % 2 === 0} />
          </div>
          </div>
        ))}
      </div>
    </div>
  );
} 