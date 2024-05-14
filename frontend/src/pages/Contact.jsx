import React from 'react'
import Navbar from '../components/Navbar'
import gambar1 from '../images/logo1.png'
import gambar2 from '../images/logo2.png'
import gambar from '../images/contact.jpg'
import axios from 'axios'
import { useState } from 'react'
import { Helmet } from 'react-helmet'

const Contact = () => {

  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await axios.post('https://adasabalifurniture.com/api/blog/sendemail/', {
        'from_email':email,
        'subject':subject,
        'message':message
      })
      return window.alert('thau for contact us')
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
     <Helmet>
        <title>Bali Furniture Export Contact Us for premium wood, handicrafts, and rattan creations in Bali</title>
        <meta name="description" content="Get in touch with us for inquiries, collaborations, and more. Discover our premium wood, handicrafts, and rattan creations." />
      </Helmet>
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
                  Contact Us To Bali furniture export
                </h1>
                <p className="text-slate-100 text-[.9rem] md:text-[1rem]">"Get in Touch for Expert Assistance"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-20">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3"> 
            <div className="bg-slate-100/35 shadow-sm border border-slate-200/35 px-5 rounded-lg py-6 flex gap-2 items-center mb-5">
              <div className="text-5xl text-slate-700"><ion-icon name="mail-outline"></ion-icon></div>
              <div className="">
                <h1 className='text-slate-700 font-semibold'>Email</h1>
                <p className='text-[.9rem] text-slate-600'>adasabalifurniture@gmail.com</p>
              </div>
            </div>
            <div className="bg-slate-100/35 shadow-sm border border-slate-200/35 px-5 rounded-lg py-6 flex gap-2 items-center mb-5">
              <div className="text-5xl text-slate-700"><ion-icon name="call-outline"></ion-icon></div>
              <div className="">
                <h1 className='text-slate-700 font-semibold'>Phone</h1>
                <p className='text-[.9rem] text-slate-600'>(+62) 821-1430-0284</p>
              </div>
            </div>
            <div className="bg-slate-100/35 shadow-sm border border-slate-200/35 px-5 rounded-lg py-6 flex gap-2 items-center mb-5">
              <div className="text-5xl text-slate-700"><ion-icon name="map-outline"></ion-icon></div>
              <div className="">
                <h1 className='text-slate-700 font-semibold'>Address</h1>
                <p className='text-[.9rem] text-slate-600'>Kec. Kuta Utara,, Badung, Bali, Indonesia</p>
              </div>
            </div>
        </div>


        <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32">
                <div className="flex flex-wrap">
                    <div className="mb-10 w-full md:w-6/12 lg:px-6">
                        <h2 className="mb-6 text-3xl font-bold">Contact us</h2>
                        <p className="mb-6 text-[.9rem] text-neutral-700">
                        Have questions or inquiries about our Bali wood furniture, handicrafts, or rattan products? Feel free to reach out to our team of experts. We're here to assist you with any queries regarding our products, orders, or collaborations. Contact us today for personalized assistance and discover the elegance of Bali craftsmanship for your international ventures.
                        </p>
                        <p className="mb-2 text-neutral-700 text-[.9rem]">Kec. Kuta Utara,, Badung, Bali, Indonesia</p>
                        <p className="mb-2 text-neutral-700 text-[.9rem]">(+62) 821-1430-0284</p>
                        <p className="mb-2 text-neutral-700 text-[.9rem]">adasabalifurniture@gmail@gmail.com</p>
                    </div>
                    <div className="w-full md:w-6/12 lg:px-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <input value={subject} onChange={(e)=>setSubject(e.target.value)} type="text" className="placeholder:text-sm block w-full rounded border-b border-slate-400 bg-transparent py-1 px-3 leading-[1.6]" placeholder="Name" />
                            </div>
                            <div className="mb-6">
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="placeholder:text-sm block w-full rounded border-b border-slate-400 bg-transparent py-1 px-3 leading-[1.6]"  placeholder="Email address" />
                            </div>
                            <div className="mb-6">
                                <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className="placeholder:text-sm block w-full rounded border-b border-slate-400 bg-transparent py-1 px-3 leading-[1.6] resize-none"  rows="7" placeholder="Your message"></textarea>
                            </div>
                            
                            <button type="submit" className="mb-6 inline-block w-full rounded bg-primary px-6 py-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>

       


        <div className="mt-10 flex justify-center gap-4">
          <a href="https://www.facebook.com/profile.php?id=61556298638555&mibextid=LQQJ4d" target='_blank' className="text-gray-700 hover:text-gray-900" title="Facebook"><ion-icon name="logo-facebook"></ion-icon></a>
          <a href="https://www.tiktok.com/@adasabalifurnitur.com?is_from_webapp=1&sender_device=pc" target="_blank" className="text-gray-700 hover:text-gray-900" title="TikTok"><ion-icon name="logo-tiktok"></ion-icon></a>
          <a href="https://www.instagram.com/adasabalifurniture?igsh=MW15MzNoYXh1bHFzbg==" target="_blank" className="text-gray-700 hover:text-gray-900" title="Instagram"><ion-icon name="logo-instagram"></ion-icon></a>
          <a href="https://www.linkedin.com/company/adasa-bali-furniture/" target="_blank" className="text-gray-700 hover:text-gray-900" title="LinkedIn"><ion-icon name="logo-linkedin"></ion-icon></a>
        </div>
      </div>
    </>
  )
}

export default Contact
