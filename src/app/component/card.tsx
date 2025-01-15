


'use client'

import React from 'react';
import Image from 'next/image';

const Projects = () => {
    let Products = [
        {
            id: 1,
            name: 'Trendy Bag',
            price: '35$',
            description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet dolor sit amet olor sit amet.',
            imageUrl: '/blue.png',
        },
        {
            id: 2,
            name: 'Fancy Bag',
            price: '40$',
            description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet dolor sit amet olor sit amet.',
            imageUrl: '/blue.png',
        },
        {
            id: 3,
            name: 'Luxury Bag',
            price: '50$',
            description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet dolor sit amet olor sit amet.',
            imageUrl: '/blue.png',
        },
    ];

    return (
        <div className="bg-blue-100 pt-14">

<h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
                Kiran Ahmed
            </h1>
            <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
                Trendy Bags Collection
            </h1>


            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-14">
                {Products.map((item, index) => (
                    <div
                        key={index}
                        className="hover:scale-105 transition-all hover:shadow-lg hover:shadow-blue-800 duration-300 border-2 border-gray-500 p-5 bg-blue-200 rounded-md space-y-4"
                    >
                        <div className="flex items-center justify-center">
                            <Image
                                src={item.imageUrl}
                                alt={`Image of ${item.name}`}
                                width={200}
                                height={250}
                                className="hover:rotate-6 transition-all duration-300 bg-blue-100 rounded-md outline-black"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-semibold tracking-tight">{item.name}</h1>
                            <h3 className="text-xl font-semibold tracking-tight">{item.price}</h3>
                        </div>
                        <p className="w-56 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
