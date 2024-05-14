import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Gallery from '../components/Galery'
import Products from '../components/Products'
import Blog from '../components/Blog'
import Navbar from '../components/Navbar';

import gambar1 from '../images/logo1.png'
import gambar2 from '../images/logo2.png'

import { Helmet } from 'react-helmet'


const Home = () => {
  return (
    <>
        <Helmet>
          <title>Bali furniture export discover premium wood, handicrafts, and rattan creations in Bali </title>
          <meta name="description" content="Explore our exquisite collection of Bali furniture and handicrafts for export. Discover premium wood furniture, handicrafts, and rattan creations inspired by the beauty of Bali. Enhance your home with our high-quality and authentic products. Get in touch with us to learn more!" />
        </Helmet>
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