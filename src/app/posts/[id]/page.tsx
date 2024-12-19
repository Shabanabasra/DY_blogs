"use client";
import CommentSection from "@/components/CommentSection";
import AuthorCard from "@/components/AuthorCard";
import Footer from "@/components/Footer";


const posts = [
  {
    id: `1`,
    title: "HTML Block of Web Development",
    description:
      "Explore the foundation of HTML, the backbone of every web page.",
    image: "/images/picture1.jpg",
  },
  {
    id: `2`,
    title: "Machine Learning Basics",
    description:
      "A dynamic and essential subset of AI that focuses on developing algorithms that enable computers to learn and make predictions based on data.",
    image: "/images/picture2.jpg",
  },
  {
    id: `3`,
    title: "Deep Learning Explained",
    description:
      "Deep learning is a revolutionary subfield of machine learning that employs neural networks to model complex patterns and make predictions.",
    image: "/images/picture3.jpg",
  },
  {
    id: `4`,
    title: "CSS for Styling Websites",
    description:
      "CSS brings life to websites by adding design, layouts, and responsiveness to your web pages.",
    image: "/images/picture4.jpg",
  },
  {
    id: `5`,
    title: "JavaScript: Adding Interactivity",
    description:
      "JavaScript empowers developers to create dynamic and interactive web experiences.",
    image: "/images/picture5.jpg",
  },
  {
    id: `6`,
    title: "React: Building User Interfaces",
    description:
      "React simplifies the process of building reusable and efficient UI components.",
    image: "/images/picture6.jpg",
  },
  {
    id: `7`,
    title: "Node.js for Backend Development",
    description:
      "Node.js allows developers to use JavaScript for server-side programming, creating scalable applications.",
    image: "/images/picture7.jpg",
  },
  {
    id: `8`,
    title: "Python for Data Science",
    description:
      "Python, with its rich libraries, is a favorite choice for data scientists to analyze and visualize data.",
    image: "/images/picture8.jpg",
  },
  {
    id: `9`,
    title: "Understanding APIs",
    description:
      "APIs allow different software systems to communicate, paving the way for integrations and data sharing.",
    image: "/images/picture9.jpg",
  },
  {
    id: `10`,
    title: "Version Control with Git",
    description:
      "Git makes tracking changes and collaborating on projects seamless, especially in team environments.",
    image: "/images/picture10.jpg",
  },
  {
    id: `11`,
    title: "Responsive Web Design",
    description:
      "Learn the techniques to make your websites look great on all devices, from desktops to smartphones.",
    image: "/images/picture11.jpg",
  },
  {
    id: `12`,
    title: "Introduction to Databases",
    description:
      "Databases store, retrieve, and manage data efficiently for applications and websites.",
    image: "/images/picture12.jpg",
  },
  {
    id: `13`,
    title: "Cybersecurity Essentials",
    description:
      "Protect your digital assets with knowledge of cybersecurity threats and countermeasures.",
    image: "/images/picture13.jpg",
  },
  {
    id: `14`,
    title: "Introduction to Blockchain",
    description:
      "Discover the underlying technology behind cryptocurrencies and decentralized applications.",
    image: "/images/picture14.jpg",
  },
  {
    id: `15`,
    title: "Cloud Computing Basics",
    description:
      "Understand how cloud services like AWS and Azure provide scalable and cost-efficient solutions.",
    image: "/images/picture1.jpg",
  },
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {` `}
        {post.title}
      </h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}

      <div className="mt-6 text-lg text-slate-600">
        {renderParagraphs(post.description)}
      </div>

      <CommentSection postId={post.id} />
      <AuthorCard />
      <Footer/>
    </div>
  );
}