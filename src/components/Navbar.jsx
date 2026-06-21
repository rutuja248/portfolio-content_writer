import React, { useState } from 'react'
import { FaBars, FaEnvelope, FaLinkedin, FaTimes, FaArrowRight } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='px-4 md:px-15 py-4 sticky z-50 top-0 bg-[#10171F]'>
      <div className='mx-auto flex justify-between items-center'>
        <div className='flex items-center gap-3'><img src={logo} alt="Amy Johnson logo" className='w-10 h-10' /><span className='text-md font-bold text-white tracking-wide'>Amy Johnson</span>
        </div>
        {/* mobile navigation  */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className='w-10 h-10 text-white' /> : <FaBars className='w-10 h-10 text-white' />}
          </button>
        </div>
        {/* Desktop navigation  */}
        <div className='hidden md:flex space-x-6 text-lg text-white'>
          <a href="#" className="relative group">Home<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span></a>
          <a href="#projects" className="relative group">Work<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span></a>
          <a href="#services" className="relative group">Services<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span></a>
        </div>
        <button className='hidden md:block p-[1.5px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 group'>
          <a href="mailto:amy.writer@gmail.com" className='flex items-center gap-2 rounded-full bg-[#10171F] px-6 py-2 text-white group-hover:scale-102 transition-all duration-300'>Let's Connect<FaArrowRight className="-rotate-45 text-sm transition-transform duration-300 group-hover:rotate-0" /></a>
        </button>
      </div>
      {/* mobile Menu */}
      {
        isOpen && (
          <div className='md:hidden flex flex-col items-center space-y-4 mt-4 text-lg  text-white '>
            <a href="#" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Work</a>
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            {/* <div>
              <FaLinkedin className='w-10 h-10'></FaLinkedin>
              <FaEnvelope className='w-10 h-10'></FaEnvelope>
            </div> */}
            <div className="p-[1.5px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
              <a
                href="mailto:amy.writer@gmail.com"
                className="flex items-center justify-center gap-2 rounded-full bg-[#10171F] px-6 py-3 text-white min-h-[44px]"
              >
                Let's Connect
                <FaArrowRight className="-rotate-45 text-sm" />
              </a>
            </div>
          </div>
        )
      }
    </nav>
  )
}

export default Navbar