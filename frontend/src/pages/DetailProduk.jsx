import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import gambar1 from '../images/logo2.png'




import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const DetailProduk = () => {

  const {id} = useParams()
  const [detail, setDetail] = useState([])
  const [similar, setSimilar] = useState([])

  const getDetail = async () =>{
    try{
      const response = await axios.get(`https://adasabalifurniture.com/api/produks/detail/${id}/`)
      return response.data
    }catch(error){
      console.log(error)
    }
  }

  const getSimilar = async () => {
    try{
        const response = await axios.get(`https://adasabalifurniture.com/api/produks/similar/${id}/`)
        return response.data
    }catch(error){
        console.log(error)
    }
  }

  useEffect(()=>{
    const fetchData = async () => {
        try{
            const detailData = await getDetail()
            setDetail(detailData)

            const similarData = await getSimilar()
            setSimilar(similarData)
        }catch(error){
            console.log(error)
        }
    }

    fetchData()
  },[id])




  return (
    <>

        <Navbar color='text-black' gambar1={gambar1} gambar2={gambar1}/>
        
        <div className="container mt-32 md:mt-44">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="mx-auto">
                <img className="border rounded-lg border-slate-200 w-full md:max-w-[600px] h-auto" src={`https://adasabalifurniture.com${detail.image}`} alt="" />
              </div>
              <div className="flex flex-col justify-center gap-6">
                <h1 className="md:text-3xl text-2xl font-semibold">{detail.name}</h1>
                <h2 className="md:text-2xl text-xl font-semibold text-slate-600">$0.00</h2>
                <p className="text-gray-600">Price? Let's discuss</p>
                <table className="text-gray-600">
                <tbody className='flex flex-col gap-4 text-[.9rem] md:text-[1rem]'>
                    <tr>
                        <td className="font-semibold w-24">Size</td>
                        <td className="pr-3">:</td>
                        <td>{detail.size}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold w-24">Material</td>
                        <td className="pr-3">:</td>
                        <td>{detail.material}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold w-24">Finishing</td>
                        <td className="pr-3">:</td>
                        <td>{detail.finising}</td>
                    </tr>
                </tbody>
                </table>

                <div className="border-slate-200 border-y py-7 max-w-lg">
                  <a href="https://wa.me/6282114300284?text=I%20am%20very%20interested%20in%20your%20furniture%20products%20after%20seeing%20the%20collection.%20Can%20you%20provide%20more%20information%20about%20availability%20and%20pricing%20for%20some%20of%20the%20items%20I'm%20interested%20in?" target="_blank" className="bg-yellow-500 px-6 py-3 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 max-w-max">Order Now</a>
                </div>

                <h1 className='flex flex-row gap-4 md:text-[1rem] text-[.9rem]'>CATEGORY : <Link to={'/handicraf'} className='text-blue-500 hover:text-blue-700'>Handicraf</Link> <Link to={'/furniture'} className='text-blue-500 hover:text-blue-700'>Furniture</Link> <Link to={'/rattan'} className='text-blue-500 hover:text-blue-700'>Rattan</Link></h1>
            </div>
        </div>

        <div className="mt-28 md:max-w-5xl">
          <h1 className='text-slate-900 text-lg md:text-2xl'>Adasa Bali Furniture</h1>

          <p className='md:text-[1rem] text-[.9rem] text-slate-700 mt-5'>From classic designs to contemporary concepts, each of our products is produced with high-quality materials and skilled craftsmanship. Do you want something that fits your space perfectly? Does not matter! We also accept special orders that will be tailored to your wishes and needs, so that your dream home can be realized perfectly.</p>
          <p className='md:text-[1rem] text-[.9rem] text-slate-700 mt-5'>With our focus on excellence in every step of production, we are here to be your trusted partner in creating comfortable and beautiful spaces. Every piece of furniture we offer is not only an aesthetic addition, but also a long-term investment in your comfort and lifestyle. From the living room to the bedroom, we offer the right solution for every corner of your home. Explore our collection and discover the magic in every detail.</p>

          <h1 className='md:text-2xl text-xl mt-6'>Contact Us :</h1>

          <div className="mt-6 md:text-[1rem] text-[.9rem]">
            <h1>Phone : <a href="https://wa.me/6282114300284?text=I%20am%20very%20interested%20in%20your%20furniture%20products%20after%20seeing%20the%20collection.%20Can%20you%20provide%20more%20information%20about%20availability%20and%20pricing%20for%20some%20of%20the%20items%20I'm%20interested%20in?" target="_blank"><span className='md:text-lg text-[.9rem] text-blue-500'>(+62) 821-1430-0284</span></a></h1>
            <h1 className='mb-8'>Phone : <a href="https://wa.me/6285737549107?text=I%20am%20very%20interested%20in%20your%20furniture%20products%20after%20seeing%20the%20collection.%20Can%20you%20provide%20more%20information%20about%20availability%20and%20pricing%20for%20some%20of%20the%20items%20I'm%20interested%20in?" target="_blank"><span className='md:text-lg text-[.9rem] text-blue-500'>(+62) 857-3754-9107</span></a></h1>
            <p>Need help or have a question?</p>
            <p>Contact us at: adasabalifurniture@gmail.com</p>
          </div>
        </div>
        </div>

      


       <div className="container mt-10">
        <h1 className='text-slate-900 md:text-2xl text-xl mb-3 mt-7'>Related products</h1>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={2}
          breakpoints={{
            // Ketika lebar layar kurang dari 768px
            768: {
              slidesPerView: 2, // Menampilkan dua slide
              spaceBetween: 20 // Jarak antara slide
            },
            // Ketika lebar layar lebih besar dari 768px
            1024: {
              slidesPerView: 3, // Menampilkan empat slide
              spaceBetween: 30 // Jarak antara slide
            },
            // Ketika lebar layar lebih besar dari 1024px
            1200: {
              slidesPerView: 4,
              spaceBetween: 50 // Jarak antara slide
            }
          }}
        >
        {similar.map((sml, index)=>{
            return(
              <SwiperSlide>
               <Link to={`/produks/detail/${sml.id}`}>
                    <div className="" key={index}>
                        <img className='md:w-[350px] md:h-[320px] w-[200px] h-[220px]' src={`https://adasabalifurniture.com${sml.image}`} alt="" />
                    </div>
               </Link>
               </SwiperSlide>
            )
        })}

        </Swiper>
        </div>
    </>
  )
}

export default DetailProduk