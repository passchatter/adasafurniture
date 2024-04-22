import React from 'react'
import iklan1 from '../images/iklan.png'
import handicraf from '../images/handicraf.png'
import furniture from '../images/furniture.png'
import rattan from '../images/rattan.png'

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Products = () => {
  return (
   <>

    <div className="container pt-6 pb-28">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-28" data-aos="fade-up">
            <div className="">
            <h1 className='text-3xl md:text-4xl leading-[2.5rem] md:leading-[3rem] mb-7 text-slate-900'>Top Exporter of Natural Rattan Products</h1>
            <p className='text-slate-700 text-[.9rem]'>Domestic rattan industry is expected to contribute foreign exchange as a period in 1988 when the rattan industry was victorious, because the current situation in 1988 is equal to the current situation that the government conducts a policy of protection by banning the export of raw rattan.</p>
            </div>
            <div className="relative" data-aos="fade-up" data-aos-delay="100">
            <img className='' src={iklan1} alt="" />
            </div>
        </div>
    </div>

    <div id='products' className="container  py-14">
        <div className="md:flex items-center justify-between">
            <h1 className='text-4xl border-b-2 border-primary inline-block pb-2 md:mb-0 mb-4 text-slate-900'>Our Products</h1>
            <div className="max-w-xl">
           
            </div>
        </div>

        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            >
            <SwiperSlide>
            <div className="grid grid-cols-1 i items-center md:grid-cols-2 gap-3 mt-10">
                <div className="">
                    <h1 className='text-black text-2xl '>Handicraf</h1>
                    <p className='text-[.9rem] mt-5'>Handicraft is a work of art expressed in the form of decoration by highlighting aesthetic elements, natural beauty and the richness of Indonesian culture. With skills passed down from generation to generation, craftsmen transform raw materials into stunning works of art, showcasing the uniqueness and richness of Indonesian culture that is unrivaled.
                    Through expert and careful hands, each handicraft undergoes a transformation into an unforgettable symbol of beauty. With detailed finishing touches, the final product becomes a stunning manifestation of extraordinary hand craftsmanship.</p>
                    <a href={'/handicraf'} className='text-primary border hover:text-white hover:bg-primary inline-block mt-5 border-primary px-5 py-3 rounded-md'>View More</a>
                </div>
                <div className="">
                    <img src={handicraf} alt="" />
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="grid grid-cols-1 i items-center md:grid-cols-2 gap-3 mt-10">
                <div className="">
                    <h1 className='text-black text-2xl '>Wood</h1>
                    <p className='text-[.9rem] mt-5'>It all starts with selecting the best wood which is selectively picked from sustainably managed forests in Indonesia. Then proceed with the drying process which is extra careful and takes months. Each piece of wood is then carefully processed by the skilled hands of Jepara craftsmen, combining traditional craftsmanship with modern technology to create high quality products in accordance with international standards.
                    This is followed by a gradual finishing process starting from sanding, staining and applying a protective layer in detail to show the unique natural beauty of each type of wood, before finally being ready to be marketed to lovers of beauty and longing.</p>
                    <a href={'/furniture'} className='text-primary border hover:text-white hover:bg-primary inline-block mt-5 border-primary px-5 py-3 rounded-md'>View More</a>
                </div>
                <div className="">
                    <img src={furniture} alt="" />
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="grid grid-cols-1 i items-center md:grid-cols-2 gap-3 mt-10">
                <div className="">
                    <h1 className='text-black text-2xl '>Rattan</h1>
                    <p className='text-[.9rem] mt-5'>Each piece of rattan is carefully selected from well-maintained gardens by Indonesian farmers, taking into account aspects of sustainability and environmental sustainability. Once harvested, rattan undergoes a careful drying process to achieve a moisture content of 10%-15% to ensure stability and strength. Then, with the skills of expert craftsmen, the rattan is processed into durable and elegant furniture construction, coupled with typical Indonesian woven patterns woven from the hands of native Balinese craftsmen, making it a dazzling work of art.</p>
                    <a href={'/rattan'} className='text-primary border hover:text-white hover:bg-primary inline-block mt-5 border-primary px-5 py-3 rounded-md'>View More</a>
                </div>
                <div className="">
                    <img src={rattan} alt="" />
                </div>
            </div>
            </SwiperSlide>
        </Swiper>


        <div className="flex justify-center items-center mt-10">
             <a href="#about" className='bg-[#f9b82b] px-5 py-3 rounded-lg text-white inline-block max-w-max text-center'>Download Catalog</a>
        </div>
    </div>

    <div className="relative h-[70vh] bg-cover bg-center bg-no-repeat bg-fixed bg-hero flex items-center text-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative">
            <h1 className="text-white leading-[3rem] text-3xl font-bold md:text-4xl">"The Premier Destination for Bali Export Furniture, Rattan, Wood, and Handicrafts"</h1>
        </div>
    </div>


   </>
  )
}

export default Products