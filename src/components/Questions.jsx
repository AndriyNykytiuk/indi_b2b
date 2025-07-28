import React,{useState} from 'react'


const Questions = () => {
  return (
    <section className='questions'>

        <div className='qustions-container mx-auto max-w-[1280px] flex flex-col gap-2'>
            <div className='questions-title'>
                <h2>Поширені запитання</h2>
            </div>
            <div className='questions-topics topic'>
                <ul className='topic-list'>
                    <li>Загальні</li>
                    <li>Підключення</li>
                    <li>Ціни</li>
                    <li>Платформа</li>
                </ul>
            </div>

        </div>

    </section>
  )
}

export default Questions