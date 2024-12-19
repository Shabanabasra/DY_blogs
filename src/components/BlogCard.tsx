import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";


interface BlogCardProps {
  post: { id: string; title: string; description: string; date: string; image: string };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-pink-800 text-white" : "text-slate-800"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <div className="relative w-full h-48">
        <img
          src={post.image}
          alt={post.title}
          
      
          className="w-full h-48 object-cover rounnded-t-lg"
        />
      </div>

      <CardTitle className="text-xl font-normal mt-4 text-center">
        {post.title}
      </CardTitle>

      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/posts/${post.id}`}
          className={`px-4 py-2 text-white text-sm font-medium rounded hover:bg-pink-700 ${
            isDarkBackground ? "bg-pink-600" : "bg-blue-600 hover:bg-blue-500"
          }`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}