import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from 'react-icons/fa6'

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { link: 'HOME', path: 'hero' },
    { link: 'ABOUT', path: 'about' },
    { link: 'GALLERY', path: 'gallery' },
  ]

  return (
    <nav className='flex justify-between items-center gap-4 bg-themedark lg:px-10 px-4 py-6 sticky top-0 z-30 border-[8px] border-themedark'>
      <div id='logo'>
        <h1 className='text-white font-bold text-5xl'>LUXXE <span className='italic text-backgroundtheme'>MILTON</span></h1>
      </div>

      <ul className='lg:flex justify-center items-center gap-6 hidden'>
        {navItems.map(({ link, path }) => (
          <Link key={path} className='text-themedark bg-backgroundtheme uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-black hover:text-white' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>

      {/*mobile menu starts here */}
      <div className='flex justify-center items-center lg:hidden' onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className='text-white text-2xl cursor-pointer' /> : <FaBars className='text-white text-2xl cursor-pointer' />}
        </div>
      </div>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}>
        <ul className='flex flex-col justify-center items-centergap-2 w-full'>
          {navItems.map(({ link, path }) => (
            <Link key={path} className='text-white uppercase fond-semibold cursor-pointer p-3 rounded-lg hover:bg-themedark hover:text-black w-full text-center' to={path} spy={true} offset={-100} smooth={true}> {link}</Link>
          ))}
        </ul>
      </div>
      <a
        href="https://luxxe-milton.square.site/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className='bg-backgroundtheme text-themedark px-8 py-3 rounded-full hover:bg-black hover:text-white font-bold mt-3 hidden lg:flex transform hover:scale-110 transition -transform duration300 cursor pointer'>BOOK NOW</button>
      </a>
    </nav>
  )
}

export default Header