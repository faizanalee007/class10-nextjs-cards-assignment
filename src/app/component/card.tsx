"use client";

import React from "react";
import Image from "next/image";

const Projects = () => {
  let Products = [
    {
      id: 1,
      name: "Urban Sneakers",
      price: "$35",
      description:
        "Comfortable and stylish sneakers for everyday wear. Perfect for city walks.",
      imageUrl: "/shoe.png",
    },
    {
      id: 2,
      name: "Classic Loafers",
      price: "$40",
      description:
        "Timeless loafers with a touch of elegance. A must-have for formal events.",
      imageUrl: "/shoe.png",
    },
    {
      id: 3,
      name: "Sporty Running Shoes",
      price: "$50",
      description:
        "Lightweight running shoes designed for maximum comfort and performance.",
      imageUrl: "/shoe.png",
    },
  ];

  return (
    <div className="bg-gray-50 pt-14 pb-12">
      <h1 className="text-center text-5xl font-extrabold text-indigo-600 tracking-tight mb-8">
        Faizan Ahmed
      </h1>
      <h1 className="text-center text-4xl font-extrabold text-gray-800 tracking-tight mb-12">
        Trendy Shoes Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 lg:px-14">
        {Products.map((item, index) => (
          <div
            key={index}
            className="group relative border-2 border-gray-300 p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-center mb-4">
              <Image
                src={item.imageUrl}
                alt={`Image of ${item.name}`}
                width={350}
                height={250}
                className="rounded-md transition-all duration-300 group-hover:rotate-3"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">{item.name}</h2>
              <h3 className="text-xl font-semibold text-indigo-600">{item.price}</h3>
            </div>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
