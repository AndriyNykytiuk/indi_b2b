import React,{useState} from 'react'
import Navbar from './Navbar'
import Aproach from './Aproach'
import '../css/header.css'
const Header = () => {
    const [isMessage, setIsMessage] = useState(false);
  return (
    <header className='header '>
        <div className='header-container mx-auto max-w-[1280px] sm:px-6 flex flex-col items-center justify-center pt-[10px] '>
            <Navbar/>
            <div className='header-title '>
                <h1>
                    Приводь клієнтів через емоції, а не банери
                </h1>
            </div>
            <div className='header-subtitle '>
                <h2>
                    INDI — платформа гейміфікованого залучення. Люди шукають ваші пропозиції, грають — і самі приходять до вас.
                </h2>
            </div>
            <div className='relative header-button'
                onClick={(e) => {
              e.preventDefault()
              setIsMessage(true)}}
                onMouseLeave={() => setIsMessage(false)}
            >
                {isMessage && <span className='absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
                 <a href="#" className='button mb-5'>Долучи свій бізнес</a>
            </div>
            <Aproach/>
            
        </div>
    </header>
  )
}

export default Header