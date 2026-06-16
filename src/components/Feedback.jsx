import React from 'react'
import QuoteIcon from '../assets/quote_icon.png'
import { motion } from "framer-motion";

const Feedback = () => {
    return (
        <motion.div className="pb-15 md:px-15 px-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} 
            >
            <div className='container md:mx-auto'>
                <h1 className='text-sm bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text w-fit'>CLIENT LOVE</h1>
                <h2 className=' text-xl text-white pt-2 pb-5'>What Clients Say</h2>
                <div className='flex flex-col md:flex-row gap-6 '>
                    {
                        feebackData.map((feedback, index) => (
                            <div className='md:px-5 md:w-1/2 p-6 border border-gray-600 rounded-xl text-white'>
                                <p className='flex gap-3'><img src={QuoteIcon} alt="quotation icon" className='w-5 h-5' /><span className='pt-5 text-gray-300'>{feedback.para}</span></p>
                                <hr className="border-gray-700 my-8" />
                                <div className='flex items-center gap-2'>
                                    <img src={feedback.pic} alt="profile pic" className='w-fit h-10' />
                                    <div>
                                        <p className='font-semibold text-gray-300 text-sm'>{feedback.title}</p>
                                        <p className='text-gray-300 text-sm'>{feedback.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    {/* <div className='px-20'>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequatur eveniet cupiditate. Dolorum eaque eligendi, culpa illum inventore impedit pariatur quod dolor officia tenetur magni expedita repellendus, odio aut sunt?
                        </p>
                        <p className='text-right'>-lorem ipsum</p>
                    </div> */}
                </div>
            </div>
        </motion.div>
    )
}

const feebackData = [
    { id: 1, pic: '/profile1.png', para: '"Amy consistently delivers well-researched, engaging content that captures our brand voice and exceeds expectations."', title: 'Anna Mitchell', role: 'Marketing Manager, BrightWave Agency' },
    { id: 2, pic: '/profile2.png', para: '"Professional, reliable, and incredibly creative. Amy helped us transform our content strategy and achieve measurable results."', title: 'Robert Carter', role: 'Founder, Nova Digital' }
]
export default Feedback