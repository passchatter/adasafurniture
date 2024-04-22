import React from 'react';
import { useState } from 'react';

import galery1 from "../images/galery1.jpeg"
import galery2 from "../images/galery2.jpg"
import galery3 from "../images/galery6.jpg"
import galery10 from "../images/galery3.jpg"
import galery4 from "../images/galery4.jpeg"
import galery5 from "../images/galery5.jpg"
import galery6 from "../images/galery7.jpeg"
import galery7 from "../images/galery8.jpg"
import galery8 from "../images/galery9.jpeg"
import galery9 from "../images/galery12.jpg"


const Gallery = () => {
  // Daftar gambar
  const images = [
    galery1,
    galery2,
    galery3,
    galery10,
    galery5,
    galery4,
    galery6,
    galery7,
    galery8,
    galery9,


    // ...tambahkan URL gambar lainnya di sini
  ];

  // Pengaturan state untuk indeks gambar saat dihover
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <>
   <div id='galerry' className="container mx-auto max-w-lg text-center pt-20 mb-16">
        <h1 className='text-4xl border-b-2 border-primary inline-block pb-2 mb-4'>Gallery</h1>
        <p className="text-gray-700 text-[.9rem]">
            Describe your rattan furniture gallery here. Showcase the elegance and uniqueness of your products, emphasizing their quality, craftsmanship, and appeal to modern interiors.
        </p>
    </div>

    <div class="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3 pb-28 px-3" data-aos="zoom-in">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative w-full p-2"
          onMouseEnter={() => setHoveredImage(index)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <img
            src={image}
            alt={`Image ${index}`}
            
            className={`w-full h-auto transition-all duration-300 rounded-md shadow-lg ${
                hoveredImage === index ? 'transform translate-y-[-5px] translate-x-[-5px] scale-105' : ''
            }`}
            />
        </div>
      ))}
    </div>
    </>
  );
};

export default Gallery;
