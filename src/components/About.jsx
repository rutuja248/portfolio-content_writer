import React from 'react'
import bannerImage from '../assets/writer.png'
import { FaDownload } from "react-icons/fa";
import DownloadIcon from '../assets/download.png'
import ArrowRight from '../assets/arrow-right.png'

const About = () => {
    const handleViewResume = () => {
        const resumeurl = "#tbd";
        window.open(resumeurl, "_blank")
    }
    return (
        <div className='py-4 '>
            <div className='flex flex-col md:flex-row justify-between items-center md:h-[80vh] min-h-0 overflow-hidden'>
                <div className="w-full md:w-2/5 h-full flex justify-center">
                    <img
                        src={bannerImage}
                        alt="Content writer portrait"
                        className="h-full object-cover float-animation"
                    />
                </div>
                <div className='w-full md:w-3/5 px-5 md:px-15 pt-10 md:pt-0 md:pl-20'>
                    <p className='flex items-center gap-2 text-gray-400 border-1 rounded-4xl md:w-fit px-5 py-2 md:text-[16px]'><span className="w-2 h-2 bg-green-500 rounded-full"></span>Content Writer for Growth-Focused Brands</p>
                    <h1 className='text-6xl font-semibold text-gray-300 pt-5'>Hi, I'm <span className='bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text'>Amy</span></h1>
                    <h2 className='pt-5 text-2xl text-white'>I turn readers into customers with powerful content</h2>  
                    <p className='pt-5 text-gray-400 text-lg'>From SEO blogs and website copy to brand storytelling, I create strategic content that builds trust, drives traffic, nd inspires action.</p>
                    <div className='mt-5 flex items-center rounded-xl py-5 w-fit gap-5'>
                        {/* Experience  */}
                        <div className='flex items-center gap-4 pr-8'>
                            <div className='w-14 h-14 rounded-full border border-purple-500/50 flex items-center justify-center text-2xl'>
                                🚀
                            </div>
                            <div>
                                <h3 className='text-white text-2xl font-semibold'>4+</h3>
                                <p className='text-gray-400 text-sm'>Years Experience</p>
                            </div>
                        </div>
                        {/* Divider  */}
                        <div className='w-px h-14 bg-gray-600'></div>
                        <div className='flex items-center gap-5'>
                            <div className='w-14 h-14 rounded-full border border-purple-500/50 flex items-center justify-center text-2xl'>
                                👥
                            </div>
                            <div className='text-white'>
                                <h3 className='text-white text-2xl font-semibold'>100+</h3>
                                <p className='text-gray-400 text-sm'>Projects Delivered</p>
                            </div>
                        </div>
                        {/* Projects delivered  */}
                    </div>
                    <div className='flex gap-8 items-center'>
                        <a
                            href="#tbd"
                            className="inline-block mt-4 px-6 py-2 text-white font-medium rounded-lg bg-gradient-to-r from-blue-500 to-purple-500"
                        >
                            <span className="flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 text-md">
                                View My Work
                                <img src={ArrowRight} alt="arrow right" className="w-5 h-5" />
                            </span>
                        </a>
                        <button onClick={handleViewResume} className='group mt-4 px-6 py-2 border-1 text-white font-medium rounded-lg'>
                            <span className='flex items-center justify-center gap-2 group-hover:scale-105 transition-all duration-300 text-md'>Download Resume <img src={DownloadIcon} alt="download icon" className='w-5 h-5' /></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About