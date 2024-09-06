import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Pricing = () => {

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
      <section id='nails-pricing' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-24'>
        <h1 data-aos='zoom-in' className='text-6xl font-bold text-black'>Nails Pricing</h1>
        <div className='grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-10 w-[85%]'>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Regular Manicure</h1>
            <h1 className='text-themedark text-xl font-bold'>$20 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Dazzle Manicure</h1>
            <h1 className='text-themedark text-xl font-bold'>$30 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Gel Manicure</h1>
            <h1 className='text-themedark text-xl font-bold'>$35 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Basic Pedicure</h1>
            <h1 className='text-themedark text-xl font-bold'>$40 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Deluxe Pedicure</h1>
            <h1 className='text-themedark text-xl font-bold'>$60 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Gel Pedicure</h1>
            <h1 className='text-themedark text-xl font-bold'>$55 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Acrylic Full Set with Gel</h1>
            <h1 className='text-themedark text-xl font-bold'>$65 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Acrylic Refill with Gel</h1>
            <h1 className='text-themedark text-xl font-bold'>$50 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Acrylic Full Set with Regular Color</h1>
            <h1 className='text-themedark text-xl font-bold'>$50 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Acrylic Refill with Regular Color</h1>
            <h1 className='text-themedark text-xl font-bold'>$35 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Gel X with Gel Color</h1>
            <h1 className='text-themedark text-xl font-bold'>$65 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Gel X Refill with Gel Color</h1>
            <h1 className='text-themedark text-xl font-bold'>$50 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Dip Powder</h1>
            <h1 className='text-themedark text-xl font-bold'>$50 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Dip Powder with Tip</h1>
            <h1 className='text-themedark text-xl font-bold'>$60 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Dip Powder French</h1>
            <h1 className='text-themedark text-xl font-bold'>$60 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Dip Powder French with Tip</h1>
            <h1 className='text-themedark text-xl font-bold'>$70 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Dip Powder Ombre</h1>
            <h1 className='text-themedark text-xl font-bold'>$60 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Dip Powder Ombre with Tip</h1>
            <h1 className='text-themedark text-xl font-bold'>$70 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Color Change on Feet</h1>
            <h1 className='text-themedark text-xl font-bold'>$20 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Color Change on Hands</h1>
            <h1 className='text-themedark text-xl font-bold'>$12 up</h1>
          </div>
        </div>
      </section>

      <section id='waxing-price' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-24'>
        <h1 data-aos='zoom-in' className='text-6xl font-bold text-black'>Wax Pricing</h1>
        <div className='grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-10 w-[85%]'>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Brows</h1>
            <h1 className='text-themedark text-xl font-bold'>$12</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Lips</h1>
            <h1 className='text-themedark text-xl font-bold'>$10</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Chin</h1>
            <h1 className='text-themedark text-xl font-bold'>$10</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Sideburns</h1>
            <h1 className='text-themedark text-xl font-bold'>$10</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Full Face</h1>
            <h1 className='text-themedark text-xl font-bold'>$40</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Underarms</h1>
            <h1 className='text-themedark text-xl font-bold'>$20 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Half Arms</h1>
            <h1 className='text-themedark text-xl font-bold'>$30</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Full Arms</h1>
            <h1 className='text-themedark text-xl font-bold'>$40 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Chest</h1>
            <h1 className='text-themedark text-xl font-bold'>$40 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Back</h1>
            <h1 className='text-themedark text-xl font-bold'>$50 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Half Legs</h1>
            <h1 className='text-themedark text-xl font-bold'>$40</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Full Legs</h1>
            <h1 className='text-themedark text-xl font-bold'>$60 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Bikini Wax</h1>
            <h1 className='text-themedark text-xl font-bold'>$30 up</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Brazilian Wax</h1>
            <h1 className='text-themedark text-xl font-bold'>$50 up</h1>
          </div>
        </div>
      </section>

      <section id='children-services-pricing' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-24'>
        <h1 data-aos='zoom-in' className='text-6xl font-bold text-black'>Children Services Pricing</h1>
        <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-20 w-[85%]'>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Kid's Spa Pedicure</h1>
            <h1 className='text-themedark text-xl font-bold'>$40</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Kid's Pedicure</h1>
            <h1 className='text-themedark text-xl font-bold'>$30</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex justify-between items-center gap-6 border-b-2 border-themedark pb-5'>
            <h1 className='text-xl text-gray-900 font-bold'>Kid's Manicure</h1>
            <h1 className='text-themedark text-xl font-bold'>$15</h1>
          </div>
        </div>
      </section>
    </>

  )
}

export default Pricing