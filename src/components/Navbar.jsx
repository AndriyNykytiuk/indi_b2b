import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import logoPict from '../img/logoPict.svg';
import '../css/navbar.css';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const [isMessage, setIsMessage] = useState(false);
  const [isMain,setIsMain] = useState(false); 
  const [isAbout,setIsAbout] = useState(false);
  const [isService,setIsService] = useState(false);
  const [isContact,setIsContact] = useState(false);
    const [isOpen,setIsOpen]=useState(false)
  const [visible, setVisible] = useState(false);
  const timeoutId = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: '767px' });
  useEffect(() => {
    if (isMobile) {
    setVisible(true);
    return; 
  }
    if (isMobile) setVisible(true);
    const handleMouseMove = () => {
        if (window.innerWidth<768) return;
      setVisible(true);
      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        setVisible(false);
      }, 1500); 
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId.current);
    };
  }, [isMobile]);
  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}, [isOpen]);

  const variants = {
    hidden: { y: -100, opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <motion.nav
      variants={variants}
      initial="visible"
      animate={visible ? 'visible' : 'hidden'}
      className="header-navbar navbar bg-[#ffffff] border-1 rounded-[24px] mb-[10px] "
    >
      <div className="navbar-container flex items-center justify-between gap-10  ">
   
        <div className='logo-img flex gap-5 items-center justify-center'>
            <div className='burger-button' onClick={() => setIsOpen(!isOpen)}>
                <span className={`first ${isOpen? 'open':'first'}`}></span>
                <span className={`second ${isOpen? 'open':'second'}`}></span>
                <span className={`third ${isOpen? 'open':'third'}`}></span>
             </div>
          <a href="#"> <img src={logoPict} alt="Logo" className="h-8" /></a>
        </div>
        <ul  className={`navbar-list flex items-center gap-6 ${isOpen ? 'open' : ''}`}>
          <li className='relative'
            onClick={(e) => {
              e.preventDefault()
              setIsMain(true)}}
            onMouseLeave={() => setIsMain(false)}
          >
            {isMain && <span className='absolute top-7 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
            <a href="/" className="navbar-link px-4" onClick={()=>setIsOpen(false)}>Головна</a></li>
          <li className='relative'
            onClick={(e) => {
              e.preventDefault()
              setIsAbout(true)}}
            onMouseLeave={() => setIsAbout(false)}
          >
            {isAbout && <span className='absolute top-7 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
            <a href="/" className="navbar-link px-4" onClick={()=>setIsOpen(false)}>Про нас</a></li>
          <li className='relative'
            onClick={(e) => {
              e.preventDefault()
              setIsService(true)}}
            onMouseLeave={() => setIsService(false)}
          >
            {isService && <span className='absolute top-7 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
            <a href="/" className="navbar-link px-4" onClick={()=>setIsOpen(false)}>Послуги</a></li>
          <li className='relative'
            onClick={(e) => {
              e.preventDefault()
              setIsContact(true)}}
            onMouseLeave={() => setIsContact(false)}
          >
            {isContact && <span className='absolute top-7 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
            <a href="#" className="navbar-link px-4" onClick={()=>setIsOpen(false)}>Контакти</a></li>
        </ul>
        <div className="navbar-button relative"
          onClick={(e) => {
              e.preventDefault()
              setIsMessage(true)}}
          onMouseLeave={() => setIsMessage(false)}
        >
          {isMessage && <span className='absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>} 
          <a href="#" className="button px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">Приєднатися</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
