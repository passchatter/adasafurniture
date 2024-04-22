import React from 'react'
import ProdukTmp from '../components/ProdukTmp';
import gambar from "../images/gambar3.jpg";
import Navbar from '../components/Navbar';
import gambar1 from '../images/logo1.png'
import gambar2 from '../images/logo2.png'

const Handi = () => {
  return (
    <>
       <Navbar color='text-white' gambar1={gambar1} gambar2={gambar2}/>
       <ProdukTmp
        id={1} 
        gambar={gambar}
        text1="Handicraf"
        text2="Immerse yourself in the artistry of Bali with our authentic handicrafts, handcrafted by skilled artisans using traditional techniques. From intricately woven baskets to intricately carved decor, each piece embodies the rich cultural heritage of Bali, making it a unique addition to international homes and spaces." 
      />
    </>
  )
}

// furniture: We are proud to present a complete collection of furniture that is carefully designed and produced by skilled Indonesian craftsmen. From comfortable lounge chairs to elegant dining tables, every piece is designed to meet the highest quality standards.
export default Handi