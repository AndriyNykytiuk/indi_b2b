import { useMediaQuery } from 'react-responsive';
import React,{useState} from 'react'
import '../css/indibussines.css'
import userface from '../img/userFace.jpg'
import kate from '../img/Kate.png'
import vlad from '../img/Vlad.png'
import dmytro from '../img/Dmytro.png'
import sergiy from '../img/segiy.png'
import pavlo from '../img/Pavlo.png'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Indibusines = () => {
    const isMobile=useMediaQuery({maxWidth:768})
    const [isMessage, setIsMessage] = useState(false);
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
                                                        <img src={kate} alt="Image"/>
                                                    </div>
                                                    <div className='user-props'>
                                                    <h4 className='user-name'>Марина Шевченко</h4>
                                                    <h4 className='user-role'> Власниця студії манікюру</h4>
                                                    </div>
                                                
                                                </div>
                                                <div className='user-review'>
                                                    <p>Через INDI ми швидко заповнили розклад на тиждень вперед. Клієнти активно діляться акціями з друзями.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='right-card'>
                                                <div className='right-user user'>
                                                    <div className='user-face'>
                                                        <img src={vlad} alt="Image"/>
                                                    </div>
                                                    <div className='user-props'>
                                                    <h4 className='user-name'>Владислав Романюк</h4>
                                                    <h4 className='user-role'>Співвласник фітнес-студії</h4>
                                                    </div>
                                                
                                                </div>
                                                <div className='user-review'>
                                                    <p>INDI дозволив нам залучити клієнтів у години найменшого навантаження. Заповнили ранкові та денні слоти без додаткової реклами.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='right-card'>
                                                <div className='right-user user'>
                                                    <div className='user-face'>
                                                        <img src={dmytro} alt="Image"/>
                                                    </div>
                                                    <div className='user-props'>
                                                    <h4 className='user-name'>Дмитро Іванчук</h4>
                                                    <h4 className='user-role'>Співвласник кав’ярні</h4>
                                                    </div>
                                                
                                                </div>
                                                <div className='user-review'>
                                                    <p>Ідеальний інструмент для залучення нових гостей. Витрати мінімальні, а результат — стабільний потік клієнтів.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='right-card'>
                                                <div className='right-user user'>
                                                    <div className='user-face'>
                                                        <img src={pavlo} alt="Image"/>
                                                    </div>
                                                    <div className='user-props'>
                                                    <h4 className='user-name'>Павло Кравченко</h4>
                                                    <h4 className='user-role'>Організатор гастрономічних фестивалів</h4>
                                                    </div>
                                                
                                                </div>
                                                <div className='user-review'>
                                                    <p>Через INDI ми змогли залучити додаткових відвідувачів саме у пікові години події. Атмосфера стала ще активнішою.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='right-card'>
                                                <div className='right-user user'>
                                                    <div className='user-face'>
                                                        <img src={sergiy} alt="Image"/>
                                                    </div>
                                                    <div className='user-props'>
                                                    <h4 className='user-name'>Сергій Ткаченко</h4>
                                                    <h4 className='user-role'>Власник піцерії</h4>
                                                    </div>
                                                </div>
                                                <div className='user-review'>
                                                    <p>Ми бачимо, хто і коли скористався знижкою. Це вперше ми можемо реально виміряти ефективність акцій.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className='left-button relative '>
                                 {isMessage && <span className='absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}      
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
                        <div className='left-button relative '
                            onMouseEnter={() => setIsMessage(true)}
                            onMouseLeave={()=> setIsMessage(false)}>
                             {isMessage && <span className='absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}      
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
                                                        <img src={kate} alt="Image"/>
                                                    </div>
                                                    <div className='user-props'>
                                                    <h4 className='user-name'>Марина Шевченко</h4>
                                                    <h4 className='user-role'> Власниця студії манікюру</h4>
                                                    </div>
                                                
                                                </div>
                                                <div className='user-review'>
                                                    <p>Через INDI ми швидко заповнили розклад на тиждень вперед. Клієнти активно діляться акціями з друзями.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='right-card'>
                                                <div className='right-user user'>
                                                    <div className='user-face'>
                                                        <img src={vlad} alt="Image"/>
                                                    </div>
                                                    <div className='user-props'>
                                                    <h4 className='user-name'>Владислав Романюк</h4>
                                                    <h4 className='user-role'>Співвласник фітнес-студії</h4>
                                                    </div>
                                                
                                                </div>
                                                <div className='user-review'>
                                                    <p>INDI дозволив нам залучити клієнтів у години найменшого навантаження. Заповнили ранкові та денні слоти без додаткової реклами.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='right-card'>
                                                <div className='right-user user'>
                                                    <div className='user-face'>
                                                        <img src={dmytro} alt="Image"/>
                                                    </div>
                                                    <div className='user-props'>
                                                    <h4 className='user-name'>Дмитро Іванчук</h4>
                                                    <h4 className='user-role'>Співвласник кав’ярні</h4>
                                                    </div>
                                                
                                                </div>
                                                <div className='user-review'>
                                                    <p>Ідеальний інструмент для залучення нових гостей. Витрати мінімальні, а результат — стабільний потік клієнтів.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='right-card'>
                                                <div className='right-user user'>
                                                    <div className='user-face'>
                                                        <img src={pavlo} alt="Image"/>
                                                    </div>
                                                    <div className='user-props'>
                                                    <h4 className='user-name'>Павло Кравченко</h4>
                                                    <h4 className='user-role'>Організатор гастрономічних фестивалів</h4>
                                                    </div>
                                                
                                                </div>
                                                <div className='user-review'>
                                                    <p>Через INDI ми змогли залучити додаткових відвідувачів саме у пікові години події. Атмосфера стала ще активнішою.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='right-card'>
                                                <div className='right-user user'>
                                                    <div className='user-face'>
                                                        <img src={sergiy} alt="Image"/>
                                                    </div>
                                                    <div className='user-props'>
                                                    <h4 className='user-name'>Сергій Ткаченко</h4>
                                                    <h4 className='user-role'>Власник піцерії</h4>
                                                    </div>
                                                </div>
                                                <div className='user-review'>
                                                    <p>Ми бачимо, хто і коли скористався знижкою. Це вперше ми можемо реально виміряти ефективність акцій.</p>
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