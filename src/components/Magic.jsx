import React from 'react'
import '../css/magic.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { firstStep, fourthStep, secondStep, thirdStep } from './animations/anime'

const Magic = () => {
    const {ref,inView}=useInView({
        threshold:0.3,
        triggerOnce:true,
    })
  return (
    <section className='magic'>

        <div className='magic-container mx-auto max-w-[1280px] p-[80px] '>
                <div className='magic-title mb-[10px]'>
                    <h3>
                        Проста магія INDI
                    </h3>
                </div>
                <div className='magic-subtitle mb-[95px]'>
                    <h4>INDI робить залучення клієнтів легким і навіть трохи чарівним. Просто створіть пропозицію — ми зробимо решту.</h4>
                </div>
                <div className='magic-items grid grid-cols-2 gap-3 md:grid-cols-4 gap-2 '>
                        <motion.div className='magic-item item'
                       
                        ref={ref}
                        variants={firstStep}
                         initial="hidden" 
                         animate={inView ? 'visible' : 'hidden'}
                        >
                            <div className='item-step'>
                                <h4>01.</h4>
                            </div>
                            <div className='item-text'>
                                <h4>Легкий старт</h4>
                                <p>Запустіть першу пропозицію за 5 хвилин — без інтеграцій та технічних знань.</p>
                            </div>
                        </motion.div>
                        <motion.div className='magic-item item'
                        ref={ref}
                        variants={secondStep}
                         initial="hidden" 
                         animate={inView ? 'visible' : 'hidden'}
                        >
                            <div className='item-step'>
                                <h4>02.</h4>
                            </div>
                            <div className='item-text'>
                                <h4>Гра замість реклами</h4>
                                <p>Ваші пропозиції з’являються у форматі ігор, маркетплейсі або у міні-квестах. </p>
                            </div>
                        </motion.div>
                        <motion.div className='magic-item item'
                        ref={ref}
                        variants={thirdStep}
                         initial="hidden" 
                         animate={inView ? 'visible' : 'hidden'}>
                            <div className='item-step'>
                                <h4>03.</h4>
                            </div>
                            <div className='item-text'>
                                <h4>Аналітика під рукою</h4>
                                <p>В особистому кабінеті — статистика по користувачах, знижках, активностях та роботі менеджерів.</p>
                            </div>
                        </motion.div>
                        <motion.div className='magic-item item'
                        ref={ref}
                        variants={fourthStep}
                         initial="hidden" 
                         animate={inView ? 'visible' : 'hidden'}>
                            <div className='item-step'>
                                <h4>04.</h4>
                            </div>
                            <div className='item-text'>
                                <h4>Повна свобода налаштувань</h4>
                                <p>Від тривалості акції й локації розміщення до кількості та моменту активації — ти вирішуєш, як, де і скільки.</p>
                            </div>
                        </motion.div>
                </div>
        </div>


    </section>
  )
}

export default Magic