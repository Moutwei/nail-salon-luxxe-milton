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
        <section id='about' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col md:flex-row justify-center items-center gap-20 bg-cover bg-center' style={{ backgroundImage: `url(${whyimg})`}}>
            <div data-aos='zoom-in' className='flex flex-col justify-center items-center gap-10 bg-white p-10 rounded-xl md:w-[40%] w-full'>
                <h1 className='text-themelight text-4xl font-bold'>WORKING HOURS</h1>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <p className='text-xl text-black font-lg'>SUNDAY AM - PM</p>
                    <p className='text-xl text-black font-lg'>MONDAY AM - PM</p>
                    <p className='text-xl text-black font-lg'>TUESDAY AM - PM</p>
                    <p className='text-xl text-black font-lg'>WEDNESDAY AM - PM</p>
                    <p className='text-xl text-black font-lg'>THURSDAY AM - PM</p>
                    <p className='text-xl text-black font-lg'>FRIDAY AM - PM</p>
                    <p className='text-xl text-black font-lg'>SATURDAY AM - PM</p>
                </div>
                <button className='px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white mt-6'>BOOK ONLINE</button>
            </div>

            <div data-aos='slide-up' data-aos-delay='200' className='md:w-[40%] w-full flex flex-col justify-center items-start gap-6 h-fit'>
                <h1 className='text-6xl text-white font-bold text-center'>Why Choose Us?</h1>
                <p className='text-2xl font-semibold text-white md:text-start text-center'>we strive for perfection blah blah blah blah blah sdafasdfasd fasdfasd fasdf asd fasd fa sdf asd fasd fasdfas dfas</p>
                <div id='icon-list' className='flex flex-col justify-center items-start gap-4'>
                    <div id='icon-box' className='flex justify-center items-center gap-3'>
                        <FaAngleDoubleRight className='text-white size-6' />
                        <h1 className='text-xl text-white font-semibold'>Because Were good fdasfasdfasdfasdfas</h1>
                    </div>
                    <div id='icon-box' className='flex justify-center items-center gap-3'>
                        <FaAngleDoubleRight className='text-white size-6' />
                        <h1 className='text-xl text-white font-semibold'>Because Were good dfasdf as</h1>
                    </div>
                    <div id='icon-box' className='flex justify-center items-center gap-3'>
                        <FaAngleDoubleRight className='text-white size-6' />
                        <h1 className='text-xl text-white font-semibold'>Because Were good adsfasdfasdfasdfa </h1>
                    </div>
                    <div id='icon-box' className='flex justify-center items-center gap-3'>
                        <FaAngleDoubleRight className='text-white size-6' />
                        <h1 className='text-xl text-white font-semibold'>Because Were goodasdfasdfasdf asdfasdf </h1>
                    </div>
                    <button className='text-black px-10 py-4 bg-white hover:bg-themelight hover:text-black rounded-xl font-semibold'>BOOK NOW</button>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose