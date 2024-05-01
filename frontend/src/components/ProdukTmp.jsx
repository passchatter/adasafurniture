import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const ProdukTmp = ({id, gambar, text1, text2}) => {
  const [product, setProduct] = useState([])

  const getProduct = async () =>{
    try{
      const response = await axios.get(`http://217.15.168.168:8000/api/produks/${id}/`)
      return response.data
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getProduct().then((results)=>{
      setProduct(results)
    })
  },[])


  return (
    <>
      <div className="relative h-[70vh] md:h-[80vh]">
        <div className="w-full h-[70vh] md:h-[80vh] overflow-hidden relative">
          <div className="bg-black/35 top-0 left-0 w-full h-[70vh] md:h-[80vh] absolute"></div>
            <div
              className="w-full h-[70vh] md:h-[80vh] inset-0 bg-cover bg-center absolute"
              style={{
                backgroundImage: `url(${gambar})`,
                transition: 'opacity 0.8s ease-in-out',
                mixBlendMode: 'overlay',
              }}
              
            />
             <div className="relative container mx-auto text-center h-[70vh] md:h-[80vh]"> 
              <div className="z-10 flex items-center h-[70vh] md:h-[80vh]"> 
                <div className="max-w-2xl mx-auto text-white transition-opacity duration-500"> 
                  <h1 className="md:text-5xl text-3xl text-white font-bold mb-4">
                    {text1}
                  </h1>
                  <p className="text-slate-100 text-[.9rem] md:text-[1rem]">{text2}</p>
                  <a href="https://wa.me/6282114300284?text=I%20am%20very%20interested%20in%20your%20furniture%20products%20after%20seeing%20the%20collection.%20Can%20you%20provide%20more%20information%20about%20availability%20and%20pricing%20for%20some%20of%20the%20items%20I'm%20interested%20in?" target="_blank" className='bg-[#f9b82b] px-5 py-3 rounded-lg text-white mt-7 inline-block max-w-max'>Contact Us</a>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="container">
    
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-3">
        {product.map((prd, index)=>{
          return(
            <Link to={`/produks/detail/${prd.id}/`}>
              <div className="" key={index}>
                <img src={`http://217.15.168.168:8000${prd.image}`} alt="" />
                <h1 className='text-center'>{prd.name}</h1>
              </div>
            </Link>
          )
        })}
        </div>

      </div>
    </>
  )
}

export default ProdukTmp