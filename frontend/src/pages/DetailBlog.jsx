import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import gambar1 from '../images/logo2.png';

const BlogDetail = () => {
    const [blogDetail, setBlogDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchBlogDetail = async () => {
            try {
                const response = await axios.get(`http://217.15.168.168:8000/blog/detail/${id}/`);
                setBlogDetail(response.data[0]); // Ambil data pertama dari array respons
            } catch (error) {
                console.error('Error fetching blog detail:', error);
            }
        };

        fetchBlogDetail();
    }, [id]);

    return (
        <>
            <Navbar color='text-black' gambar1={gambar1} gambar2={gambar1}/>
            <div className="container mx-auto mt-32 md:px-44 md:mt-44">
                {blogDetail && blogDetail.blog && (
                    <div>
                        <h1 className="md:text-3xl text-2xl font-bold mb-2">{blogDetail.blog.title}</h1>
                        <h2 className="text-xl text-gray-600 mb-2">{blogDetail.blog.subtitle}</h2>
                        <p className="text-gray-500 mb-4">Published on {new Date(blogDetail.blog.tanggal).toLocaleDateString()}</p>
                        <ul className='md:max-w-4xl lg:max-w-5xl'>
                            {blogDetail.entry && blogDetail.entry.map(entry => (
                                <li key={entry.id} className="mb-6">
                                    <img src={`http://217.15.168.168:8000/${entry.image}`} alt={`Image ${entry.id}`} className="md:w-full md:h-[400px] xl:h-[500px]" />
                                    <p className="mt-2 text-justify md:text-[1rem] text-[.8rem]" dangerouslySetInnerHTML={{ __html: entry.deskripsi }}></p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default BlogDetail;
