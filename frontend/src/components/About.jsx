import React from 'react'
import about1 from '../images/about1.jpeg'
import about2 from '../images/about1.jpg'
import about3 from '../images/gambar3.jpg'

import produk1 from '../images/produk1.png'
import produk2 from '../images/produk2.png'
import produk3 from '../images/produk3.png'
import produk4 from '../images/produk4.png'
import produk5 from '../images/produk5.png'
import produk6 from '../images/produk6.png'

import value1 from '../images/value1.png'
import value2 from '../images/value2.png'
import value3 from '../images/value3.png'

const About = () => {
  return (
    <>
     <div id='about' className="container pb-32 pt-28">
        <div className="grid md:grid-cols-4 grid-cols-3 lg:grid-cols-6 gap-5 mb-14 md:mb-32  justify-center items-center">
            <div className="bg-slate-100/35 mx-auto p-6 rounded-md shadow-md duration-300 hover:bg-secondary" data-aos="fade-up" data-aos-delay="100">
                 <img className='w-[80px] text-center' src={produk1} alt="" />
            </div>
            <div className="bg-slate-100/35 mx-auto p-6 rounded-md shadow-md hover:bg-secondary duration-300"  data-aos="fade-up" data-aos-delay="200">
                 <img className='w-[80px] text-center' src={produk2} alt="" />
            </div>
            <div className="bg-slate-100/35 mx-auto p-6 rounded-md shadow-md hover:bg-secondary duration-300"  data-aos="fade-up" data-aos-delay="300">
                 <img className='w-[80px] text-center' src={produk3} alt="" />
            </div>
            <div className="bg-slate-100/35 mx-auto p-6 rounded-md shadow-md hover:bg-secondary duration-300"  data-aos="fade-up" data-aos-delay="400">
                 <img className='w-[80px] text-center' src={produk4} alt="" />
            </div>
            <div className="bg-slate-100/35 mx-auto p-6 rounded-md shadow-md hover:bg-secondary duration-300"  data-aos="fade-up" data-aos-delay="500">
                 <img className='w-[80px] text-center' src={produk5} alt="" />
            </div>
            <div className="bg-slate-100/35 mx-auto p-6 rounded-md shadow-md hover:bg-secondary duration-300"  data-aos="fade-up" data-aos-delay="600">
                 <img className='w-[80px] text-center' src={produk6} alt="" />
            </div>
        </div>

        <div className="md:flex grid grid-cols-1 md:justify-between items-center md:pt-0 pt-10 mb-4 gap-10">
            <div className="max-w-xl" data-aos="fade-right" data-aos-delay="100">
                <h1 className='text-slate-900 text-3xl md:text-4xl leading-[2.5rem] md:leading-[3rem]'>"A Heritage of Exquisite Craftsmanship in Wood, Rattan and Handicrafts"</h1>
                <p className='text-slate-600 text-[.9rem] mt-4 leading-5'>Adasabalifurniture, based in Bali, Indonesia, specializes in crafting high-quality furniture and handicrafts, deeply rooted in the island's rich arts and culture. Collaborating closely with local artisans, we blend traditional techniques with contemporary design to meet global demands. Committed to sustainability, we responsibly source raw materials, ensuring eco-friendly and premium-quality products. With a relentless focus on customer satisfaction, we continuously innovate in design, production, and service to exceed expectations in the Bali furniture export market.</p>

            </div>
            <div className="grid grid-cols-2 gap-3" data-aos="fade-left" data-aos-delay="400">
                <div className="flex flex-col gap-3">
                    <img src={about1} className="w-full h-auto" alt="" />
                    <div className="w-[200px] h-[150px] bg-primary  self-end text-white font-bold flex items-center justify-center">
                        <div className="text-center">
                            <h1 className='text-3xl'>122++</h1>
                            <p>happy clients</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="w-[200px] h-[150px] bg-primary text-white font-bold flex items-center justify-center">
                        <div className="text-center">
                            <h1 className='text-3xl'>50++</h1>
                            <p>professional</p>
                        </div>
                    </div>
                    <img src={about2} className="w-[500px] h-auto" alt="" />
                </div>
            </div>
        </div>
     </div>

     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 md:gap-6 items-center justify-center mt-4 mb-64">
            <div className="text-center px-9">
                <img className='mx-auto w-[80px] h-[80px] md:w-[120px] md:h-[120px]' src={value3} alt="" />
                <h1 className='text-slate-900 text-2xl py-2'>Commitment</h1>
                <p className='text-[.9rem] text-slate-600'>Customer satisfaction is our top priority. With friendly and responsive service, we ensure every customer has a smooth and satisfying purchasing experience from start to finish.</p>
            </div>

            <div className="text-center px-9">
                <img className='mx-auto w-[80px] h-[80px] md:w-[120px] md:h-[120px]' src={value1} alt="" />
                <h1 className='text-slate-900 text-2xl py-2'>Quality</h1>
                <p className='text-[.9rem] text-slate-600'>We build each product carefully and use high quality raw materials. From wood selection to finishing touches, every detail is considered to ensure the highest quality standards and long-term durability.</p>
            </div>

            <div className="text-center px-9">
                <img className='mx-auto w-[80px] h-[80px] md:w-[120px] md:h-[120px]' src={value2} alt="" />
                <h1 className='text-slate-900 text-2xl py-2'>Innovation</h1>
                <p className='text-[.9rem] text-slate-600'>We continue to innovate in design and technology to create unique and functional products. By combining contemporary style with practical needs, we ensure each product remains relevant and inspiring for our customers.</p>
            </div>
           
        </div>


     <div className="pb-16 bg-secondary">
        <div className="md:flex grid grid-cols-1 items-center gap-7">
            <img src={about3} alt="" className='rounded-xl mt-[-5rem] w-full md:w-[40%] h-[400px] md:h-[500px]' />
            <div className="max-w-lg mx-auto container py-10 md:py-0">
                <h1 className='text-slate-900 text-3xl leading-[2.5rem] mb-4' data-aos="fade-up" data-aos-delay="100">"10 Years of Expertise in Bali Furniture and Export Rattan Handicrafts"</h1>
                <p className='text-slate-800 text-[.9rem]' data-aos="fade-up" data-aos-delay="500">With a legacy spanning two decades, we've emerged as a premier name in the Bali furniture and export rattan handicrafts sector. Armed with extensive experience and unwavering dedication, we've crafted a diverse array of premium products tailored to meet our customers' varied needs and desires. From exquisite furniture pieces to captivating home accessories, each creation is meticulously curated to deliver unparalleled satisfaction. Embark on a journey of quality and elegance with us, as we continue to raise the bar and set new benchmarks in the industry.</p>
            </div>
        </div>
     </div>
    
    </>
  )
}

export default About