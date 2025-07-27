import { useMediaQuery } from 'react-responsive'
import React from 'react'
import people from '../img/people.svg'
import box from '../img/package.svg'
import bigindi from '../img/bigindi.svg'
import map from '../img/geolocate.svg'
import prize from '../img/prize.svg'
import diagram from '../img/analize.svg'
import '../css/aproach.css'
import { motion } from 'framer-motion'
import { leftVariant,rightVariant,imageVariant, leftVariantBottom } from './animations/anime'

const Aproach = () => {
    const mobileFrame=useMediaQuery({maxWidth:768})
  return (
    <section className='aproach'>
        {mobileFrame ? (
            <div className='aproach-container mx-auto border-1 p-6 rounded-[48px] '>
            <div className='aproach-scheme flex flex-col md:grid grid-cols-4' >
                <div className='scheme-left card'>
                    <div className='card-item item trafic flex flex-col justify-center items-center mb-4 md:flex justify-between items-center mb-4 border-1 rounded-[30px] p-4' 
                    variants={leftVariant} 
                    initial="hidden" 
                    animate="visible">
                        <div className='item-top flex flex-col md:flex justify-between items-center mb-4'>
                            <div className='item-title'>
                                <h4>Малий трафік біля закладу</h4>
                            </div>
                            <div className='item-icon'>
                                <img src={people} alt="Image"/>
                            </div>
                        </div>
                        <div className='item-bottom'>
                            <p>Потрібно зацікавти дією - Ми переносимо взаємодію в офлайн біля вас.</p>
                        </div>
                    </div>
                    <div className='card-item item dificult flex flex-col border-1 rounded-[30px] p-4'
                    variants={leftVariantBottom} 
                    initial="hidden" 
                    animate="visible"
                    >
                        <div className='item-top flex flex-col justify-center items-center mb-4 md:flex justify-between items-center mb-4'>
                            <div className='item-title'>
                                <h4>Складність з акціями</h4>
                            </div>
                            <div className='item-icon'>
                                <img src={box} alt="Image"/>
                            </div>
                        </div>
                        <div className='item-bottom text-center md:text-start'>
                            <p>Стандартний підхід до знижок нудний - давайте зацікавимо користувача інтерактивом!</p>
                        </div>
                    </div>
                </div>
                <div className='scheme-center text-center  col-span-2 text-center flex flex-col justify-end items-center'
                
                variants={imageVariant}
                initial="hidden" 
                animate="visible"
                >
                    <div >
                        <img src={bigindi} alt="Image"/>
                    </div>  
                    <p className='mt-[115px] center-paragraph'>
                        Маркетингові кампанії коштують дорого<br/> створюємо канал для прямої взаємодії з користувачем без посередників
                    </p>
                </div>
                <div className='scheme-right '>

                    <div className='card-item prize item flex flex-col border-1 rounded-[30px] p-4'
                     variants={rightVariant}
                      initial="hidden" 
                      animate="visible">
                        <div className='item-top flex flex-col items-center justify-center md:flex justify-between items-center mb-4'>
                            <div className='item-icon'>
                                <img src={prize} alt="Image"/>
                            </div>
                            <div className='item-title'>
                                <h4>Різні види взаємодії</h4>
                            </div>
                        </div>
                    </div>
                                         <div className='card-item client item flex flex-col border-1 rounded-[30px] p-4'
                      variants={rightVariant}
                      initial="hidden" 
                      animate="visible"
                     >
                        <div className='item-top flex flex-col md:flex justify-between items-center mb-4'>
                            <div className='item-icon'>
                                <img src={map} alt="Image"/>
                            </div>
                            <div className='item-title'>
                                <h4>Клієнти поруч</h4>
                            </div>
                        </div>
                    </div>
                    <div className='card-item analize item flex flex-col border-1 rounded-[30px] p-4'
                     variants={rightVariant}
                      initial="hidden" 
                      animate="visible">
                        <div className='item-top flex flex-col md:flex justify-between items-center mb-4'>
                            <div className='item-icon'>
                                <img src={diagram} alt="Image"/>
                            </div>
                            <div className='item-title'>
                                <h4>Аналітика у кабінеті</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>):
        (<div className='aproach-container mx-auto border-1 p-6 rounded-[48px] '>
            <div className='aproach-scheme scheme grid grid-cols-4' >
                <div className='scheme-left card'>
                    <motion.div className='card-item item trafic flex flex-col border-1 rounded-[30px] p-4' 
                    variants={leftVariant} 
                    initial="hidden" 
                    animate="visible">
                        <div className='item-top  flex justify-between items-center mb-4'>
                            <div className='item-title'>
                                <h4>Малий трафік біля закладу</h4>
                            </div>
                            <div className='item-icon'>
                                <img src={people} alt="Image"/>
                            </div>
                        </div>
                        <div className='item-bottom'>
                            <p>Потрібно зацікавти дією - Ми переносимо взаємодію в офлайн біля вас.</p>
                        </div>
                    </motion.div>
                    <motion.div className='card-item item dificult flex flex-col border-1 rounded-[30px] p-4'
                    variants={leftVariantBottom} 
                    initial="hidden" 
                    animate="visible"
                    >
                        <div className='item-top  flex justify-between items-center mb-4'>
                            <div className='item-title'>
                                <h4>Складність з акціями</h4>
                            </div>
                            <div className='item-icon'>
                                <img src={box} alt="Image"/>
                            </div>
                        </div>
                        <div className='item-bottom'>
                            <p>Стандартний підхід до знижок нудний - давайте зацікавимо користувача інтерактивом!</p>
                        </div>
                    </motion.div>
                </div>
                <motion.div className='scheme-center col-span-2 text-center flex flex-col justify-end items-center'
                
                variants={imageVariant}
                initial="hidden" 
                animate="visible"
                >
                    <div >
                        <img src={bigindi} alt="Image"/>
                    </div>  
                    <p className='mt-[115px] center-paragraph'>
                        Маркетингові кампанії коштують дорого<br/> створюємо канал для прямої взаємодії з користувачем без посередників
                    </p>
                </motion.div>
                <div className='scheme-right'>
                     <motion.div className='card-item client item flex flex-col border-1 rounded-[30px] p-4'
                      variants={rightVariant}
                      initial="hidden" 
                      animate="visible"
                     >
                        <div className='item-top flex justify-between items-center mb-4'>
                            <div className='item-icon'>
                                <img src={map} alt="Image"/>
                            </div>
                            <div className='item-title'>
                                <h4>Клієнти поруч</h4>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='card-item prize item flex flex-col border-1 rounded-[30px] p-4'
                     variants={rightVariant}
                      initial="hidden" 
                      animate="visible">
                        <div className='item-top flex justify-between items-center mb-4'>
                            <div className='item-icon'>
                                <img src={prize} alt="Image"/>
                            </div>
                            <div className='item-title'>
                                <h4>Різні види взаємодії</h4>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='card-item analize item flex flex-col border-1 rounded-[30px] p-4'
                     variants={rightVariant}
                      initial="hidden" 
                      animate="visible">
                        <div className='item-top flex justify-between items-center mb-4'>
                            <div className='item-icon'>
                                <img src={diagram} alt="Image"/>
                            </div>
                            <div className='item-title'>
                                <h4>Аналітика у кабінеті</h4>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>)}
    </section>
  )
}

export default Aproach