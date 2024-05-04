import React from 'react'
import Navbar from '../components/Navbar'
import gambar1 from '../images/logo1.png'
import gambar2 from '../images/logo2.png'
import gambar from '../images/blog.jpg'
import axios from 'axios'
import { useState, useEffect } from 'react'
const Blog = () => {
    const [blogs, setBlogs] = useState([])

    const getBlogs = async () =>{
      try{
        const response = await axios.get(`https://adasabalifurniture.com/blog/`)
        return response.data
      }catch(error){
        console.log(error)
      }
    }

    useEffect(()=>{
      getBlogs().then((results)=>{
        setBlogs(results)
      })
    },[])

  return (
    <>
      <Navbar color='text-white' gambar1={gambar1} gambar2={gambar2}/>
      <div className="relative h-[50vh] md:h-[60vh]">
        <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden relative">
          <div className="bg-black/35 top-0 left-0 w-full h-[50vh] md:h-[60vh] absolute"></div>
            <div
              className="w-full h-[50vh] md:h-[60vh] inset-0 bg-cover bg-center absolute"
              style={{
                backgroundImage: `url(${gambar})`,
                transition: 'opacity 0.8s ease-in-out',
                mixBlendMode: 'overlay',
              }}
              
            />
             <div className="relative container mx-auto text-center h-[50vh] md:h-[60vh]"> 
              <div className="z-10 flex items-center h-[50vh] md:h-[60vh]"> 
                <div className="max-w-2xl mx-auto text-white transition-opacity duration-500"> 
                  <h1 className="md:text-5xl text-3xl text-white font-bold mb-4">
                    Our Blog
                  </h1>
                  <p className="text-slate-100 text-[.9rem] md:text-[1rem]">"Discover Bali Artistry: Insights, Trends, and Inspiration"</p>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="container md:px-32 mx-auto mt-8">
        {blogs.map((blog) => (
              <div key={blog.blog.id} className="bg-white rounded shadow-md p-4 mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{blog.blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.blog.subtitle}</p>
                  {blog.entry && (
                      <div className="flex md:flex-row flex-col items-center">
                          <img className="md:h-32 md:w-32 w-full h-40 rounded-md mr-4" src={`https://adasabalifurniture.com${blog.entry.image}`} alt="Furniture Blog" />
                          <div>
                              <div className='text-[.9rem]' dangerouslySetInnerHTML={{ __html:  blog.entry.deskripsi.slice(0, 400) }} />
                              <a href={`/detail/${blog.blog.id}`} className="text-blue-500 hover:underline">Read more</a>
                          </div>
                      </div>
                  )}
              </div>
          ))}
        </div>
    </>
  )
}

export default Blog