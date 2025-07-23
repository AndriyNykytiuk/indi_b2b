import React from 'react'
import logoPict from '../img/logoPict.svg'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <nav className='header-navbar navbar max-w-3xl bg-[#ffffff] border-1 p-4 rounded-[24px] mb-[10px] '>
            <div className='navbar-container flex items-center justify-between gap-10'>
                <div>
                    <img src={logoPict} alt="Image"/>
                </div>
                <div>
                    <ul className='flex items-center justify-between gap-2'>
                        <li><a href="#" className='navbar-link px-4'>Головна</a></li>
                        <li><a href="#" className='navbar-link px-4'>Про нас</a></li>
                        <li><a href="#" className='navbar-link px-4'>Послуги</a></li>
                        <li><a href="#" className='navbar-link px-4'>Контакти</a></li>
                    </ul>
                </div>
                <div>
                    <a href="#" className='button '>Приєднатися</a>
                </div>
            </div>
    </nav>
  )
}

export default Navbar