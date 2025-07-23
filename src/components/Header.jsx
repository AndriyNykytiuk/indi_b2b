import React from 'react'
import Navbar from './Navbar'
import Aproach from './Aproach'
import '../css/header.css'
const Header = () => {
  return (
    <header className='header '>
        <div className='header-container mx-auto max-w-[1280px] flex flex-col items-center justify-center pt-[30px] '>
            <Navbar/>
            <div className='header-title mb-[16px]'>
                <h1>
                    Приводь клієнтів через емоції, а не банери
                </h1>
            </div>
            <div className='header-subtitle mb-[16px]'>
                <h2>
                    INDI — платформа гейміфікованого залучення. Люди шукають ваші пропозиції, грають — і самі приходять до вас.
                </h2>
            </div>
            <div>
                <a href="#" className='button mb-5'>Долучи свій бізнес</a>
            </div>
            <Aproach/>
            
        </div>
    </header>
  )
}

export default Header