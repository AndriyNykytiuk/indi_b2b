import React from 'react'
import '../css/posibilities.css'
import map from '../img/bxs_map.svg'
import medal from '../img/medal.svg'
import box from '../img/box.svg'
import diagram from '../img/mdi_analytics.svg'
import rocket from '../img/rocket.svg'
import dollar from '../img/dollar.svg'
const Posibilities = () => {
  return (
    <section className='posibilities  mb-[80px]'>

        <div className='posibilities-container mx-auto max-w-[1280px] bg-[#F9FAFB] rounded-[64px] p-[120px]'>
                <div className='posibilities-wrapp flex flex-col items-center justify-center'>
                    <div className='title'>
                            <h2>
                                Що дає INDI вашому бізнесу
                            </h2>
                    </div>
                    <div className='subtitle'>
                        <h4>
                            Клієнти приходять грати — ви отримуєте продажі. Мінімум зусиль, максимум залучення.
                        </h4>
                    </div>
                    <div className='posibilities-items item grid grid cols-2 md:grid-cols-3 grid-rows-2 gap-y-8 mb-[60px]'>
                            <div className='item-posibiblity'>
                                <div className='item-pict'>
                                    <div className='item-num'>
                                        01
                                    </div>
                                    <img src={map} alt="Image"/>
                                </div>
                                <div className='item-text'>
                                    <h4>Офлайн пропозиція</h4>
                                    <p>
                                        Ваша знижка або подарунок з’являється на мапі в користувача поруч із закладом, або там, де ви захочете.
                                    </p>
                                </div>
                            </div>
                            <div className='item-posibiblity'>
                                <div className='item-pict'>
                                     <div className='item-num'>
                                        02
                                    </div>
                                    <img src={medal} alt="Image"/>
                                </div>
                                <div className='item-text'>
                                    <h4>Онлайн пропозиція</h4>
                                    <p>
                                        Знижка зʼявляється в маркетплейсі, а користувач отримує її, заробляючи внутрішню валюту в інтерактивах прямо з дивану.
                                    </p>
                                </div>
                            </div>
                            <div className='item-posibiblity'>
                                <div className='item-pict'>
                                     <div className='item-num'>
                                        03
                                    </div>
                                    <img src={box} alt="Image"/>
                                </div>
                                <div className='item-text'>
                                    <h4>Новий тип промо</h4>
                                    <p>
                                        Замість стандартної реклами — залучення через взаємодію - різні ігрові механіки і формати. Люди хочуть грати й вигравати.
                                    </p>
                                </div>
                            </div>
                            <div className='item-posibiblity'>
                                <div className='item-pict'>
                                     <div className='item-num'>
                                        04
                                    </div>
                                    <img src={diagram} alt="Image"/>
                                </div>
                                <div className='item-text'>
                                    <h4>Статистика і аналітика</h4>
                                    <p>
                                        Ваша знижка або подарунок з’являється на мапі в користувача поруч із закладом, або там, де ви захочете.
                                    </p>
                                </div>
                            </div>
                            <div className='item-posibiblity'>
                                <div className='item-pict'>
                                     <div className='item-num'>
                                        05
                                    </div>
                                    <img src={rocket} alt="Image"/>
                                </div>
                                <div className='item-text'>
                                    <h4>Старт за 5 хв</h4>
                                    <p>
                                       Проста активація без технічної мороки. Все налаштовується прямо в адмінці INDI.
                                    </p>
                                </div>
                            </div>
                            <div className='item-posibiblity'>
                                <div className='item-pict'>
                                     <div className='item-num'>
                                        06
                                    </div>
                                    <img src={dollar} alt="Image"/>
                                </div>
                                <div className='item-text'>
                                    <h4>Проста підписка</h4>
                                    <p>
                                      $2 на місяць — і ви маєте 20 активних пропозицій. Без прихованих умов чи додаткових витрат.
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div className='posibilities-button flex gap-8 items-center '>
                        <div className='button'>
                            <a href="#">Долучитись до INDI</a>
                        </div>
                        <div className='button-link'>
                            <a href="#">Дізнатись більше  &gt; </a>
                        </div>
                    </div>
                </div>
        </div>


    </section>
  )
}

export default Posibilities