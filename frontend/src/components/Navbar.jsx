import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import blacklogo from '../images/logo2.png'



const Navbar = ({color, gambar1, gambar2}) => {
    let [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 20; // Ubah angka ini sesuai kebutuhan scroll yang diinginkan
          if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [scrolled]);
  return (
    <>
      <header className={`fixed z-30 top-0 left-0 w-full py-2 md:py-3 transition-all duration-300 ${scrolled ? 'duration-500 shadow-md backdrop-blur-lg bg-slate-100' : ''}`}>
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-32">
                    {scrolled ?  <img className='w-[130px] md:w-[200px]' src={gambar2} alt="" />  :  <img className='w-[130px] md:w-[200px]' src={gambar1} alt="" />  }
                   
                </div>

                <ul className='md:flex hidden md:flex-row flex-col gap-7 mt-10 md:mt-0'>
                        <li><a href="/#home" className={`text-md ${scrolled ? 'text-slate-900' : color}`}>Home</a></li>
                        <li><a href="/#about" className={`text-md ${scrolled ? 'text-slate-900' : color}`}>About</a></li>
                        <li><a href="/#galerry" className={`text-md ${scrolled ? 'text-slate-900' : color}`}>Galery</a></li>
                        <li><a href="/#products" className={`text-md ${scrolled ? 'text-slate-900' : color}`}>Products</a></li>     
                        <li><a href={'/contact'} className={`text-md ${scrolled ? 'text-slate-900' : color}`}>Contact Us</a></li>     
                        <li><a href={'/blog'} className={`text-md ${scrolled ? 'text-slate-900' : color}`}>Blog</a></li>     
                 </ul>     

        

                <nav className={`z-20 absolute md:hidden lg:static duration-500 md:w-auto md:bg-transparand shadow-lg md:shadow-none top-0 left-0 w-full bg-slate-100 md:bg-transparent px-4 py-5 md:py-0 ${open ? 'top-0 pb-10' : 'top-[-1000%]'}`}>
                <img className='w-[130px] md:w-[200px]' src={blacklogo} alt="" />  
                    <ul className='flex md:hidden md:flex-row flex-col gap-7 mt-10 md:mt-0'>
                        <li><a href="/#home" className={`text-slate-900 text-md`}>Home</a></li>
                        <li><a href="/#about" className={`text-slate-900 text-md`}>About</a></li>
                        <li><a href="/#galeryy" className={`text-slate-900 text-md`}>Galery</a></li>
                        <li><a href="/#products" className={`text-slate-900 text-md`}>Products</a></li>
                        <li><a href="/contact" className={`text-slate-900 text-md`}>Contact Us</a></li>
                        <li><a href="/blog" className={`text-slate-900 text-md`}>Blog</a></li>
                    </ul>     

                    <div className="flex md:hidden text-slate-200 mt-9 items-center gap-6 pr-6 pt-3 lg:pr-10">
                        <a href="https://www.instagram.com/adasabalifurniture?igsh=MW15MzNoYXh1bHFzbg==" target="_blank">
                         <div className="text-md">
                            <div className="rounded-full py-2 bg-[#f9b82b] w-10 h-10 flex items-center justify-center">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </div>
                        </div>
                        </a>
                        <a href="https://www.tiktok.com/@adasabalifurnitur.com?is_from_webapp=1&sender_device=pc" target="_blank">
                        <div className="text-md">
                            <div className="rounded-full py-2 bg-[#f9b82b] w-10 h-10 flex items-center justify-center">
                                <ion-icon name="logo-tiktok"></ion-icon>
                            </div>
                        </div>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61556298638555&mibextid=LQQJ4d" target="_blank">
                        <div className="text-md">
                            <div className="rounded-full py-2 bg-[#f9b82b] w-10 h-10 flex items-center justify-center">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </div>
                        </div>
                        </a>
                        <a href="https://www.linkedin.com/company/adasa-bali-furniture/" target="_blank">
                        <div className="text-md">
                            <div className="rounded-full py-2 bg-[#f9b82b] w-10 h-10 flex items-center justify-center">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </div>
                        </div>
                        </a>
                    </div>
                </nav>
               
                <div className="text-white">
                <div className="sm:flex items-center lg:gap-10 hidden">
                    <div className="flex items-center gap-6 pr-6 pt-3 lg:pr-10">
                        <a href="https://www.instagram.com/adasabalifurniture?igsh=MW15MzNoYXh1bHFzbg==" target="_blank">
                        <div className="text-md">
                            <div className="rounded-full py-2 bg-[#f9b82b] w-10 h-10 flex items-center justify-center">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </div>
                        </div>
                        </a>
                        <a href="https://www.tiktok.com/@adasabalifurnitur.com?is_from_webapp=1&sender_device=pc" target="_blank">
                        <div className="text-md">
                            <div className="rounded-full py-2 bg-[#f9b82b] w-10 h-10 flex items-center justify-center">
                                <ion-icon name="logo-tiktok"></ion-icon>
                            </div>
                        </div>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61556298638555&mibextid=LQQJ4d" target="_blank">
                        <div className="text-md">
                            <div className="rounded-full py-2 bg-[#f9b82b] w-10 h-10 flex items-center justify-center">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </div>
                        </div>
                        </a>
                        <a href="https://www.linkedin.com/company/adasa-bali-furniture/" target="_blank">
                        <div className="text-md">
                            <div className="rounded-full py-2 bg-[#f9b82b] w-10 h-10 flex items-center justify-center">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
             
                

            <div onClick={() => setOpen(!open)} className={`z-20 text-3xl pt-3 md:hidden ${open || scrolled ? 'text-slate-900' : color}`}>
                <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>

            </div>
            
        </div>
     </header>
     
    </>
  )
}

export default Navbar