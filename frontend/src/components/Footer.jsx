import React from 'react'
import gambar2 from '../images/logo1.png'

const Footer = () => {
  return (
    <>
     <div className="footer md:pt-32 md:pb-20 pt-20 pb-14 bg-[#484545] text-[#bbb] text-[.9rem] mt-20">
        <div className="container">
            <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:flex md:justify-between">
                <div className="header max-w-sm">
                    <div className="flex items-center gap-3">
                    <img className='w-[130px] md:w-[200px]' src={gambar2} alt="furniture bali export adasabalifurniture.com" /> 
                    </div>
                    <p className="mt-3 md:text-[1rem] text-[.9rem]">
Indonesia, famed for its Furniture Bali Export, handicrafts, and rattan wood exports, supplies 80% of the world's raw rattan canes. Leveraging Bali's resources and artisanal expertise, Indonesia remains a global leader in providing top-quality products to meet international demands.</p>
                </div>
    
                <div className="lg:max-w-[250px]">
                    <h1 className="text-white md:text-xl text-lg mb-3">Contact Us</h1>
                    <p className="mb-2">Jimbaran, kuta selatan, Badung</p>
                    <p className="flex items-center mb-2 gap-2" ><ion-icon name="mail" className="text-white text-xl"></ion-icon> <a href="mailto:adasabalifurniture@gmail.com" target="_blank">adasabalifurniture@gmail.com</a></p>
                    <a href="https://wa.me/6282114300284?text=I%20am%20very%20interested%20in%20your%20furniture%20products%20after%20seeing%20the%20collection.%20Can%20you%20provide%20more%20information%20about%20availability%20and%20pricing%20for%20some%20of%20the%20items%20I'm%20interested%20in?" target="_blank">
                      <p className="flex items-center mb-2 gap-2" ><ion-icon name="call" className="text-white text-xl"></ion-icon> +6282114300284</p>
                    </a>
                </div>

                <div className="">
                    <h1 className="text-white md:text-xl text-lg mb-3">quick link</h1>
                    <ul className=''>
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#galerry">Gallery</a></li>
                        <li><a href="/#products">Product</a></li>
                        <li><a href="/#blog">Blog</a></li>
                      
                    </ul>
                </div>
                <div className="">
                    <h1 className="text-white md:text-xl text-lg mb-3">Value-Added Services</h1>
                    <p className="mb-2">Explore our additional services to enhance your experience:</p>
                    <ul className="list-disc ml-6">
                        <li>24/7 online ordering</li>
                        <li>Extended customer support via email</li>
                        <li>Exclusive weekend discounts</li>
                        <li>Personalized consultations by appointment</li>
                        <li>Express delivery options</li>
                    </ul>
                    <p className="mt-4">For inquiries or assistance, feel free to contact us during our regular hours.</p>
                </div>
            </div>

            <p className="text-center md:mt-28 mt-20">Copyright 2024 <span className="text-orange-400">adasabalifurniture</span> All Rights Reserved</p>
        </div>
    </div>
    </>
  )
}

export default Footer