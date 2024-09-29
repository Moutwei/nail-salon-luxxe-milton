import React, { useEffect } from 'react'
import heroimg from '../assets/nails3.jpg'
import stockimg from '../assets/stocknails.png'
import kids from '../assets/kids.png'
import wax from '../assets/wax.png'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlinePhoneAndroid } from 'react-icons/md'
import { FaHeadphones } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      diration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <>
      <section id='hero' className='bg-backgroundtheme w-full md:px-[120px] px-10 py-10 flex flex-col md:flex-row justify-center items-center gap-20'>
        <div id='content-box' className='flex flex-col justify-center items-start gap-10'>
          <h1 className='font-serif text-5xl text-black font-bold'>Nail Salon & Spa<br></br>in MILTON<br></br>Massachusetts</h1>
          <div id='icon-list' className='flex flex-col justify-center items-start gap-6'>
            <div id='icon-box' className='flex justify-center items-center gap-3'>
              <FaLocationDot className='text-black size-5' />
              <h1 className='text-xl text-gray800 font-semibold'>541 Adams St, Milton, MA 02186</h1>
            </div>
            <div id='icon-box' className='flex justify-center items-center gap-3'>
              <MdOutlinePhoneAndroid className='text-black size-5' />
              <h1 className='text-xl text-gray800 font-semibold'>+1 617-696-9744</h1>
            </div>

            <div id='icon-box' className='flex justify-center items-center gap-3'>
              <MdEmail className='text-black size-5' />
              <h1 className='text-xl text-gray800 font-semibold'>nammynails@gmail.com</h1>
            </div>
            {/*
            <div id='icon-box' className='flex justify-center items-center gap-3'>
              <FaHeadphones className='text-black size-6' />
              <h1 className='text-xl text-gray800 font-semibold'>customercare@email</h1>
            </div> */}
          </div>
          <a
            href="https://luxxemilton.glossgenius.com/"
            target="_self"
            rel="noopener noreferrer"
          >
            <button className='px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white'>BOOK ONLINE</button>
          </a>
        </div>
        <div id='image-box' className='md:w-[30%]'>
          <img src={heroimg} alt='' className='rounded-xl w-full' />
        </div>
      </section>

      <section className='bg-backgroundtheme grid grid-cols-1 md:grid-cols-3 justify-center items-start w-full md:px-[120px] px-10 py-10 gap-10'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <img src={stockimg} alt='' className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
          <h1 className='text-2xl text-black font-semibold'>NAILS</h1>
          <Link to='nails-pricing' spy={true} offset={-100} smooth={true}>
            <button className='px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:bg-themelight hover:text-black cursor-pointer'>MORE</button>
          </Link>
        </div>
        <div className='flex flex-col justify-center items-center gap-4'>
          <img src={wax} alt='' className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
          <h1 className='text-2xl text-black font-semibold'>WAXING</h1>
          <Link to='waxing-price' spy={true} offset={-100} smooth={true}>
            <button className='px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:bg-themelight hover:text-black cursor-pointer'>MORE</button>
          </Link>
        </div>
        <div className='flex flex-col justify-center items-center gap-4'>
          <img src={kids} alt='' className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
          <h1 className='text-2xl text-black font-semibold'>CHILDREN SERVICES</h1>
          <Link to='children-services-pricing' spy={true} offset={-100} smooth={true}>
            <button className='px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:bg-themelight hover:text-black cursor-pointer'>MORE</button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Hero