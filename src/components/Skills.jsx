import React from 'react'
import { motion } from "framer-motion";
const Skills = () => {
    return (
        <motion.div className='py-4 md:px-15 px-5' id='services'
        initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}>
            <div className=' md:mx-auto'>
                 <h1 className='text-sm bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text w-fit'>WHAT I DO</h1>
                 <h2 className=' text-xl text-white pt-2 pb-5'>Services That Drive Results</h2>
                {/* first row  */}
                <div className='flex flex-row flex-wrap'>
                    {
                        skillsData.map((skill, index) => (
                            <div key={index} className='w-1/2 md:w-1/6 py-5'>
                                <img src={skill.image} alt="" className='rounded-full w-20 h-20 object-cover mx-auto'/>
                                <p className='text-center text-gray-300 py-2'>{skill.title}</p>
                                <p className='text-center text-gray-400 py-2'>{skill.description}</p>
                            </div>
                        ))}
                </div>
                {/* second row  */}
                {/* <div className='md:flex mx-5 md:pb-20'>
                    {
                        skillsData.map((skill, index) => (
                            <div key={index} className='md:px-20 md:w-1/2 py-10 md:py-0'>
                                <img src={skill.image} alt="" className='rounded-full w-30 h-30 object-cover mx-auto'/>
                                <p className='text-center py-2'>{skill.title}</p>
                            </div>
                        ))}
                </div> */}
            </div>
        </motion.div>
    )
}
const skillsData = [
    { id: 1, image: '/skill1.png', title: 'Blog & Article Writing', description:'Engaging long-form content designed to educate, inspire, and build authority.' },
    { id: 2, image: '/skill2.png', title: 'SEO Content Writing', description:'Research-driven articles optimized to improve rankings and attract the right audience.' },
    { id: 3, image: '/skill3.png', title: 'Scriptwriting', description:'Creating engaging scripts that bring ideas to life through powerful storytelling and clear messaging.' },
    { id: 4, image: '/skill4.png', title: 'Content Planning & Optimization', description:'Planning content ecosystems that support brand growth and audience engagement.' },
    { id: 5, image: '/skill5.png', title: 'Social Media Content', description:'Creating impactful captions and content that strengthen online presence.' },
    { id: 6, image: '/skill6.png', title: 'AI Writing Tools(ChatGPT)', description:'Leveraging modern AI tools responsibly to enhance research, productivity, and content quality.' },
    // { id: 7, image: '/writer-1.png', title: 'Collaboration & Teamwork' },
    // { id: 8, image: '/writer-1.png', title: 'Caption Writing' }
]
export default Skills