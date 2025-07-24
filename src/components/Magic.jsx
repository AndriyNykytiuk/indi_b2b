import React from 'react'
import '../css/magic.css'
import { motion } from 'framer-motion'
import { firstStep, fourthStep, secondStep, thirdStep } from './animations/anime'

const Magic = () => {
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
                <div className='magic-items grid grid-cols-4 gap-3 '>
                        <motion.div className='magic-item item'
                        variants={firstStep}
                         initial="hidden" 
                         animate="visible"
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
                        variants={secondStep}
                         initial="hidden" 
                         animate="visible"
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
                        variants={thirdStep}
                         initial="hidden" 
                         animate="visible">
                            <div className='item-step'>
                                <h4>03.</h4>
                            </div>
                            <div className='item-text'>
                                <h4>Аналітика під рукою</h4>
                                <p>В особистому кабінеті — статистика по користувачах, знижках, активностях та роботі менеджерів.</p>
                            </div>
                        </motion.div>
                        <motion.div className='magic-item item'
                        variants={fourthStep}
                         initial="hidden" 
                         animate="visible">
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