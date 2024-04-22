import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Gallery from '../components/Galery'
import Products from '../components/Products'
import Blog from '../components/Blog'
import Navbar from '../components/Navbar';

import gambar1 from '../images/logo1.png'
import gambar2 from '../images/logo2.png'

const Home = () => {
  return (
    <>
        <Navbar color='text-white' gambar1={gambar1} gambar2={gambar2}/>
        <Header/>
        <About/>
        <Gallery/>
        <Products/>
        <Blog/>
    </>
  )
}

export default Home