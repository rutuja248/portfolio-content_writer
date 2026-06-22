import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <motion.div
            className="py-14 lg:container lg:mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} id='projects' 
        >
            <div className='' >
                <div className='md:flex justify-between items-center px-5 md:px-15 pb-5'>
                    <div className='md:text-left'>
                        <h1 className='text-sm bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text'>FEATURED WORK</h1>
                        <h2 className='text-xl text-white pt-2'>Selected Projects</h2>
                    </div>
                    <div>
                        <h1 className='text-right text-sm text-gray-500'>Content that converts, and <br />creates impact.</h1>
                        <a href="#"><h2 className='text-right text-sm pt-2 flex items-center gap-3 justify-end text-purple-400'>View All Projects<FaArrowRight /></h2></a>
                    </div>
                </div>
                <div className='wrapper mx-5 '>
                    <div className='inside-content flex flex-col md:flex-row gap-6 md:px-10 '>
                        {projectData.map((project, index) =>
                        (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className='content w-full md:w-1/3 border border-gray-700 rounded-2xl bg-[#10171F] transform transition-all duration-300 hover:scale-102 opacity-80 hover:opacity-100'>
                                <img src={project.image} alt={project.alt} className='w-full h-60 object-cover rounded-sm' />
                                <div className='p-5'>
                                    <p className={`mt-2 border rounded-full px-3 py-1 w-fit ${project.color} text-[10px]`}>{project.category}</p>
                                    <h1 className="text-lg font-bold text-white mt-4">{project.title}</h1>
                                    <p className="text-gray-400 mt-2">{project.description}</p>
                                    <p className="text-purple-300 mt-2 flex items-center gap-3">View Case Study<FaArrowRight /></p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
const projectData = [
    { id: 1, title: 'How Strategic SEO Content Increased Organic Traffic', description: 'Created a data-driven blog strategy that helped a brand improve search visibility and increase website visitors by 150%.', image: '/writer-1.png', alt: 'Content writer working on SEO blog strategy on a laptop', link: '#tbd', category: 'Blog Writing', color: "text-purple-400 border-purple-500" },
    { id: 2, title: 'Conversion-Focused Website Copy for SaaS Brand', description: 'Crafted clear and persuasive website messaging that improved user engagement and generated more qualified leads.', image: '/writer-2.png', alt: 'Close-up of writing notes and website copy planning', link: '#tbd', category: 'Website Copy', color: "text-green-300 border-green-300" },
    { id: 3, title: 'Building a Content Roadmap for Long-Term Growth', description: 'Developed a comprehensive content plan aligned with business goals, audience needs, and brand voice.', image: '/writer-3.png', alt: 'Content strategist creating a long-term content plan', link: '#tbd', category: 'Content Strategy', color: "text-orange-300 border-orange-300" }

]
export default Projects