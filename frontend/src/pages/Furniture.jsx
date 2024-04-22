import React from 'react'
import ProdukTmp from '../components/ProdukTmp'
import gambar from "../images/header3.jpg";
import Navbar from '../components/Navbar';
import gambar1 from '../images/logo1.png'
import gambar2 from '../images/logo2.png'

const Furniture = () => {
  return (
    <>
       <Navbar color='text-white' gambar1={gambar1} gambar2={gambar2}/>
       <ProdukTmp 
        id={2} 
        gambar={gambar}
        text1="Wood"
        text2="Explore our exquisite collection of Bali wood furniture, meticulously crafted to elevate any space with timeless elegance. From sleek tables to sturdy chairs, each piece showcases the natural beauty and durability of wood, perfect for international export markets seeking quality and sophistication." 
      />
    </>
  )
}

export default Furniture