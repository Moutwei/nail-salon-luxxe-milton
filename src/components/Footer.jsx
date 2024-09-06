import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FaInstagram } from 'react-icons/fa6'
import { FaArrowUp } from 'react-icons/fa6';
import { Link } from 'react-scroll'


const Footer = () => {

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
      <section className='bg-slate-200 w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-6 border-[20px] border-themedark'>
        <h1 className='text-black font-bold text-5xl'>Luxxe <span className='italic text-themedark'>Milton</span></h1>
        <p className='text-lg text-center font-semibold text-slate-600'>
          Are you looking for a reliable nail salon for nail care and spa services? Luxxe Nails & Spa is the ideal place. Come to visit us in Milton, MA 02186 to have the joys when caring for your beauty and see yourself get more and more beautiful with a stylish look!
        </p>
        <div id='icons' className='flex justify-center items-center gap-4'>
          <a
            href="https://www.instagram.com/luxxenailsmilton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id='icon-box' className='bg-themelight p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300'>
              <FaInstagram className='size-7 fill-white' />
            </div>
          </a>
        </div>
      </section>
      <div data-aos='slide-right' data-aos-delay='200' id='icon-box' className='bg-themelight p-4 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-12 bottom-6 right-6 lg:right-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='size-8' />
        </Link>
      </div>
    </>
  )
}

export default Footer