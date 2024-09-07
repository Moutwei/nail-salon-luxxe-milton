import React, { useEffect } from 'react'
import whyimg from '../assets/nails4.jpg'
import { FaAngleDoubleRight } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'

const WhyChoose = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            diration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])

    return (
        <section id='about' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col md:flex-row justify-center items-center gap-20 bg-cover bg-center relative' style={{ backgroundImage: `url(${whyimg})` }}>
            {/* Dark overlay to make the background image 85% darker */}
            <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
            <div className='flex flex-col justify-center items-center gap-10 bg-white p-10 rounded-xl md:w-[40%] w-full relative'>
                <h1 className='text-themelight text-4xl font-bold'>WORKING HOURS</h1>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <p className='text-xl text-black font-lg'>SUNDAY 10:00AM - 4:00PM</p>
                    <p className='text-xl text-black font-lg'>MONDAY 9:30AM - 7:00PM</p>
                    <p className='text-xl text-black font-lg'>TUESDAY 9:30AM - 7:00PM</p>
                    <p className='text-xl text-black font-lg'>WEDNESDAY 9:30AM - 7:00PM</p>
                    <p className='text-xl text-black font-lg'>THURSDAY 9:30AM - 7:00PM</p>
                    <p className='text-xl text-black font-lg'>FRIDAY 9:30AM - 7:00PM</p>
                    <p className='text-xl text-black font-lg'>SATURDAY 9:30AM - 6:00PM</p>
                </div>
                <a
                        href="https://luxxe-milton.square.site/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                <button className='px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white mt-6'>BOOK ONLINE</button>
                </a>
            </div>

            <div className='md:w-[40%] w-full flex flex-col justify-center items-start gap-6 h-fit relative'>
                <h1 className='text-6xl text-white font-bold text-center'>Why Choose Us?</h1>
                <p className='text-2xl font-semibold text-white md:text-start text-center'>Luxxe Nails & Spa delivers top-notch products and expert techniques across a wide range of services, including nails, waxing, and more. Our friendly staff fosters a relaxing atmosphere, making us the ultimate one-stop destination for rejuvenation. We prioritize health and safety with rigorous sanitation and adherence to the highest industry standards.</p>
                <div id='icon-list' className='flex flex-col justify-center items-start gap-4'>
                    <div id='icon-box' className='flex justify-center items-center gap-3'>
                        <FaAngleDoubleRight className='text-white size-6' />
                        <h1 className='text-xl text-white font-semibold'>Top-of-the-line products and expert techniques</h1>
                    </div>
                    <div id='icon-box' className='flex justify-center items-center gap-3'>
                        <FaAngleDoubleRight className='text-white size-6' />
                        <h1 className='text-xl text-white font-semibold'>A wide range of services including nails and waxing</h1>
                    </div>
                    <div id='icon-box' className='flex justify-center items-center gap-3'>
                        <FaAngleDoubleRight className='text-white size-6' />
                        <h1 className='text-xl text-white font-semibold'>Friendly staff creating a welcoming and relaxing atmosphere </h1>
                    </div>
                    <div id='icon-box' className='flex justify-center items-center gap-3'>
                        <FaAngleDoubleRight className='text-white size-6' />
                        <h1 className='text-xl text-white font-semibold'>Commitment to maintaining a clean, safe, and healthy environment </h1>
                    </div>
                    <a
                        href="https://luxxe-milton.square.site/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className='text-black px-10 py-4 bg-white hover:bg-themelight hover:text-black rounded-xl font-semibold'>BOOK NOW</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose