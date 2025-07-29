import React,{useState} from 'react'
import GeneralQuestions from './GeneralQuestions'
import '../css/qustions.css'

const Questions = ({title, ListOfquestions}) => {
    const [isOpenList, setIsOpenList]=useState(false)
  return (
    <section className='questions'>

        <div className='qustions-container mx-auto max-w-[1280px] flex flex-col gap-2'>
            <div className='questions-title'>
                <h2 className='text-center text-4xl font-bold block-title'>Поширені запитання</h2>
            </div>
     
           

        </div>

    </section>
  )
}

export default Questions