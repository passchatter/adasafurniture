import { useState, useEffect } from 'react';
import header1 from "../images/gambarsatu.jpg"
import header2 from "../images/gambar2.jpg";
import header3 from "../images/header3.jpg";


const Header = () => {
  const [images] = useState([header1, header2, header3]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);
  const contents = [
    {
      title: '"Discover Authentic Bali Furniture Export: Luxurious Wood, Rattan, and Handicrafts"',
      description: 'Welcome to Adasa Bali Furniture Export, an exclusive portal for luxury furniture and authentic Balinese handicrafts. Discover natural and local beauty with our collection that includes wooden furniture, rattan furniture and unique handicrafts, ready to beautify your international space.',
    },
    {
      title: '"Elevate Your Space with Bali Furniture Export: Premium Wood, Rattan, and Handicrafts"',
      description: 'Transform your living space into a sanctuary of elegance with Bali Furniture Export exquisite collection. Explore our range of premium wood furniture, rattan creations, and artisanal handicrafts, meticulously crafted in Bali and destined to enrich homes worldwide.'
    },
    {
      title: '"Experience Bali Artistry: Exported Wood, Rattan, and Handicraft Furniture"',
      description: 'Embark on a journey of artistry and craftsmanship in Bali Furniture Export. Immerse yourself in the timeless beauty of our wood furniture, rattan masterpieces, and intricately crafted handicrafts, each piece reflecting the soul and spirit of Bali rich cultural heritage.',
    },
   
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    const contentInterval = setInterval(() => {
      setContentIndex((prevIndex) =>
        prevIndex === contents.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(contentInterval);
    };
  }, [images.length, contents.length]);

  return (
    <div id='home' className="relative blockss h-auto">
    <div className="w-full h-[100vh] md:h-screen overflow-hidden relative">
      <div className="bg-black/30 top-0 left-0 w-full h-full absolute"></div>
      {images.map((image, index) => (
        <div
          key={index}
          className="w-full h-full inset-0 bg-cover bg-center absolute"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            mixBlendMode: 'overlay',
          }}
        />
      ))}
      <div className="relative container text-center md:text-left h-full"> 
        <div className="z-10 flex items-center h-full"> 
          <div className="max-w-2xl text-white transition-opacity duration-500"> 
            <h1 className="md:text-5xl text-3xl font-bold mb-4">
              {contents[contentIndex].title}
            </h1>
            <p className="text-slate-100 text-[.9rem] md:text-[1rem]">{contents[contentIndex].description}</p>
            <a href="#about" className='bg-[#f9b82b] px-5 py-3 rounded-lg text-white mt-7 inline-block max-w-max'>Get Started</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Header;
