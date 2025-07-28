import { useMediaQuery } from 'react-responsive';
import React from 'react'
import '../css/indibussines.css'
import userface from '../img/userFace.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Indibusines = () => {
    const isMobile=useMediaQuery({maxWidth:768})
  return (
    <section>{ isMobile ?   
        (<section className='indibusines pt-[60px] pb-[60px]'>
                <div className='indibusines-container mx-auto max-w-[1280px] place-items-center pl-[90px] pr-[90px]'>
                    <div className='indibusines-wrapper grid grid-cols-1 w-full items-center justify-center md:grid-cols-2  gap-6 '>
                            <div className='indibusines-left left'>
                                <div className='left-title'>
                                    <h3>
                                        INDI очима Бізнесу
                                    </h3>
                                </div>
                                <div className='left-subtitle'>
                                    <h4>
                                        Це зручна й легка у використанні система,
                                        яка спрощує створення контенту та допомагає зосередитися на головному.
                                    </h4>
                                </div>

                            </div>
                            <div className='indibusines-right right bg-[#F9FAFB] rounded-[30px] '>
                                <div className='right-slider'>
                                    <Swiper
                                        modules={[Navigation, Pagination, Autoplay]}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                                        loop
                                        >
                                        <SwiperSlide>
                                            <div className='right-card'>
                                                <div className='right-user user'>
                                                    <div className='user-face'>
                                                        <img src={userface} alt="Image"/>
                                                    </div>
                                                    <div className='user-props'>
                                                    <h4 className='user-name'>Катерина Мережко</h4>
                                                    <h4 className='user-role'>Власниця кавʼярні в Києві</h4>
                                                    </div>
                                                
                                                </div>
                                                <div className='user-review'>
                                                    <p>Після запуску через INDI ми отримали наплив нових клієнтів — без жодної реклами. Все просто й ефективно.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                                                        <SwiperSlide>
                                            <div className='right-card'>
                                                <div className='right-user user'>
                                                    <div className='user-face'>
                                                        <img src={userface} alt="Image"/>
                                                    </div>
                                                    <div className='user-props'>
                                                    <h4 className='user-name'>Катерина Мережко</h4>
                                                    <h4 className='user-role'>Власниця кавʼярні в Києві</h4>
                                                    </div>
                                                
                                                </div>
                                                <div className='user-review'>
                                                    <p>Після запуску через INDI ми отримали наплив нових клієнтів — без жодної реклами. Все просто й ефективно.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                                                        <SwiperSlide>
                                            <div className='right-card'>
                                                <div className='right-user user'>
                                                    <div className='user-face'>
                                                        <img src={userface} alt="Image"/>
                                                    </div>
                                                    <div className='user-props'>
                                                    <h4 className='user-name'>Катерина Мережко</h4>
                                                    <h4 className='user-role'>Власниця кавʼярні в Києві</h4>
                                                    </div>
                                                
                                                </div>
                                                <div className='user-review'>
                                                    <p>Після запуску через INDI ми отримали наплив нових клієнтів — без жодної реклами. Все просто й ефективно.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                                                        <SwiperSlide>
                                            <div className='right-card'>
                                                <div className='right-user user'>
                                                    <div className='user-face'>
                                                        <img src={userface} alt="Image"/>
                                                    </div>
                                                    <div className='user-props'>
                                                    <h4 className='user-name'>Катерина Мережко</h4>
                                                    <h4 className='user-role'>Власниця кавʼярні в Києві</h4>
                                                    </div>
                                                
                                                </div>
                                                <div className='user-review'>
                                                    <p>Після запуску через INDI ми отримали наплив нових клієнтів — без жодної реклами. Все просто й ефективно.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className='left-button'>
                                        <a href="#">Контакт</a>
                            </div>
                    </div>
                </div>
        </section>): (<section className='indibusines pt-[60px] pb-[60px]'>
        <div className='indibusines-container mx-auto max-w-[1280px] place-items-center pl-[90px] pr-[90px]'>
            <div className='indibusines-wrapper grid grid-cols-1 w-full items-center justify-center md:grid-cols-2  gap-6 '>
                    <div className='indibusines-left left'>
                        <div className='left-title'>
                            <h3>
                                INDI очима Бізнесу
                            </h3>
                        </div>
                        <div className='left-subtitle'>
                            <h4>
                                Це зручна й легка у використанні система,
                                яка спрощує створення контенту та допомагає зосередитися на головному.
                            </h4>
                        </div>
                        <div className='left-button'>
                                <a href="#">Контакт</a>
                        </div>
                    </div>
                    <div className='indibusines-right right bg-[#F9FAFB] rounded-[30px] '>
                        <div className='right-slider'>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop
                                >
                                <SwiperSlide>
                                    <div className='right-card'>
                                        <div className='right-user user'>
                                            <div className='user-face'>
                                                <img src={userface} alt="Image"/>
                                            </div>
                                            <div className='user-props'>
                                            <h4 className='user-name'>Катерина Мережко</h4>
                                            <h4 className='user-role'>Власниця кавʼярні в Києві</h4>
                                            </div>
                                        
                                        </div>
                                        <div className='user-review'>
                                            <p>Після запуску через INDI ми отримали наплив нових клієнтів — без жодної реклами. Все просто й ефективно.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                                                <SwiperSlide>
                                    <div className='right-card'>
                                        <div className='right-user user'>
                                            <div className='user-face'>
                                                <img src={userface} alt="Image"/>
                                            </div>
                                            <div className='user-props'>
                                            <h4 className='user-name'>Катерина Мережко</h4>
                                            <h4 className='user-role'>Власниця кавʼярні в Києві</h4>
                                            </div>
                                        
                                        </div>
                                        <div className='user-review'>
                                            <p>Після запуску через INDI ми отримали наплив нових клієнтів — без жодної реклами. Все просто й ефективно.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                                                <SwiperSlide>
                                    <div className='right-card'>
                                        <div className='right-user user'>
                                            <div className='user-face'>
                                                <img src={userface} alt="Image"/>
                                            </div>
                                            <div className='user-props'>
                                            <h4 className='user-name'>Катерина Мережко</h4>
                                            <h4 className='user-role'>Власниця кавʼярні в Києві</h4>
                                            </div>
                                        
                                        </div>
                                        <div className='user-review'>
                                            <p>Після запуску через INDI ми отримали наплив нових клієнтів — без жодної реклами. Все просто й ефективно.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='right-card'>
                                        <div className='right-user user'>
                                            <div className='user-face'>
                                                <img src={userface} alt="Image"/>
                                            </div>
                                            <div className='user-props'>
                                            <h4 className='user-name'>Катерина Мережко</h4>
                                            <h4 className='user-role'>Власниця кавʼярні в Києві</h4>
                                            </div>
                                        
                                        </div>
                                        <div className='user-review'>
                                            <p>Після запуску через INDI ми отримали наплив нових клієнтів — без жодної реклами. Все просто й ефективно.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
            </div>
        </div>
    </section>)}
    </section>
  )
}

export default Indibusines