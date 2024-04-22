import React from 'react'
import blog1 from '../images/blog1.jpeg'
import blog2 from '../images/blog2.jpeg'
import blog3 from '../images/blog3.jpeg'

const Blog = () => {
  return (
    <>
    <div id='blog' className="container mx-auto max-w-lg text-center pt-20 mb-16 mt-10">
        <h1 className='text-2xl md:text-4xl border-b-2 border-primary inline-block pb-2 mb-4'>News About Furniture</h1>
    </div>
    <div className="container my-6 px-8 md:px-0">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a target="_blank" href="https://www.uniaircargo.co.id/blog/potensi-ekspor-bisnis-kerajinan-furnitur-serta-negara-tujuan-ekspornya-475">
                <div className="" data-aos="fade-down" data-aos-delay="100">
                    <img className='w-full h-[300px]' src={blog2} alt="" />
                    <h2 className='text-slate-900 font-semibold mt-5 mb-4'>The trend of minimalist and modern furniture has become a favorite export destination in recent years</h2>
                    <p className='text-slate-700 text-[.9rem]'>According to the Ministry of Industry, the furniture industry's export market share in Indonesia will reach $2.5 billion US dollars in 2021. This amount has increased from 2020 which was only $1.9 billion US dollars. Due to the large opportunities for furniture export commodities, in this article, Uniair Cargo will discuss the export potential of the Indonesian furniture business...</p>
                </div>
            </a>

            <a target="_blank" href="https://ekbis.sindonews.com/read/546020/34/industri-furnitur-tumbuh-8-menperin-ungkap-faktor-pendorongnya-1632136182">
                <div className="" data-aos="fade-down" data-aos-delay="200">
                    <img className='w-full h-[300px]' src={blog1} alt="" />
                    <h2 className='text-slate-900 font-semibold mt-5 mb-4'>Furniture Industry Grows 8%, Minister of Industry Reveals Driving Factors</h2>
                    <p className='text-slate-700 text-[.9rem]'>This growth is interpreted by the Minister of Industry as proof that the furniture industry has a high level of resilience during the pandemic. Market opportunities for furniture and crafts also continue to grow, supported by main production factors, such as raw materials, capital and labor...</p>
                </div>
            </a>

            <a target="_blank" href="https://kilo.id/info/Ekspor-Furniture-Mebel-Ke-Luar-Negeri">
                <div className="" data-aos="fade-down" data-aos-delay="300">
                    <img className='w-full h-[300px]' src={blog3} alt="" />
                    <h2 className='text-slate-900 font-semibold mt-5 mb-4'>Indonesian Furniture Exports to the Global Market have abundant raw materials for making furniture</h2>
                    <p className='text-slate-700 text-[.9rem]'>Furniture includes household equipment such as chairs, tables, beds, cupboards and others that support daily activities and provide a sense of comfort for life. Furniture for artistic products is usually made from selected wood with attractive textures and colors finished with a smooth finish...</p>
                </div>
            </a>   
        </div>
       
    </div>
    </>
  )
}

export default Blog