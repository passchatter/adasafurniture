import React from 'react'
import ProdukTmp from '../components/ProdukTmp'
import gambar from "../images/gambar2.jpg";
import Navbar from '../components/Navbar';
import gambar1 from '../images/logo1.png'
import gambar2 from '../images/logo2.png'

const Rattan = () => {
  return (
    <>
       <Navbar color='text-white' gambar1={gambar1} gambar2={gambar2}/>
       <ProdukTmp 
        id={3} 
        gambar={gambar}
        text1="Rattan"
        text2=" Discover the natural charm of Bali with our rattan products, crafted to bring warmth and character to any interior. From stylish chairs to versatile baskets, each piece reflects the versatility and beauty of rattan, making it an ideal choice for international markets seeking eco-friendly and stylish solutions." 
      />
    </>
  )
}

export default Rattan