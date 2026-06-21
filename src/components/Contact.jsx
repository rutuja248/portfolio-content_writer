import React from 'react'
import { FaEnvelope, FaInstagram, FaLinkedin, FaYoutube, FaArrowRight } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import sign from '../assets/sign.png'
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div className='py-10 text-white'
        initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
            <div className='md:mx-auto md:px-15'>
                <div className='inside-content md:flex mx-auto md:px-10 px-5 bg-[#292447] py-10 rounded-xl'>
                    <div className='md:w-1/3 pr-5'>
                        <h1 className='text-3xl'>Let's create content <br></br>that gets results.</h1>
                        <p className='pt-5 text-gray-400 text-sm'>Ready to grow your brand with impactful content? <br />I'd love to hear about your peoject.</p>
                      <img src={sign} alt="" className='w-20 h-20' />
                    </div>
                    <div className='md:w-1.5/3 '>
                        <div className='bg-[#33304D] rounded-xl p-5 md:w-full '>
                            <form action="" className='flex flex-col gap-5'>
                                <h1>Get in Touch</h1>
                                <div className='flex space-x-5'>
                                    <input type="text" placeholder="Your Name" name="fname" className="text-sm p-2 rounded-md w-1/2 border  text-gray-400 border-gray-400" />
                                    <input type="text" placeholder="Email Address" name="lname" className="text-sm p-2 rounded-md border text-gray-400 border-gray-400 w-1/2" />
                                </div>
                                <input type="text" placeholder="Subject" name="fname" className="text-sm p-2 rounded-md w-full border text-gray-400 border-gray-400" />
                                <textarea type="text" placeholder="Tell me about your project..." name="fname" className="text-sm p-2 rounded-md border text-gray-400 border-gray-400 w-full" />
                                <button className='text-sm bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white w-fit px-2 py-2 rounded-lg mt-2 flex items-center gap-2 hover:scale-105 transition-all duration-300'><span className='inline-block '>Send Message</span><FaArrowRight className="-rotate-45 text-sm" /></button>
                            </form>
                        </div>
                    </div>
                    <div className='md:w-0.5/3 md:px-10 flex flex-col justify-center'>
                        <p className='pt-5 text-sm flex items-center gap-3 text-gray-300'><FaEnvelope className='w-8 h-8'></FaEnvelope>amy.writer@gmail.com</p>
                        <p className='pt-5 text-sm flex items-center gap-3 text-gray-300'><FaLocationPin className='w-8 h-8'></FaLocationPin>New York, USA</p>
                        <div className='flex space-x-4 py-5'>
                            <a href='#'><FaInstagram className='w-8 h-8'></FaInstagram></a>
                            <a href='#'><FaYoutube className='w-8 h-8'></FaYoutube></a>
                            <a href='#'><FaLinkedin className='w-8 h-8'></FaLinkedin></a>
                        </div>
                    </div>
                </div>
                <h1 className='text-center pt-15 text-white opacity-50'>&copy; 2026 Amy Johnson. All rights reserved.</h1>
            </div>
        </motion.div>
    )
}

export default Contact