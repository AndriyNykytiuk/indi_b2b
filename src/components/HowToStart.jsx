import React,{useState}from 'react'
import '../css/howtostart.css'
import pensil from '../img/pensil.svg'
import label from '../img/label.svg'
import men from '../img/men.svg'
const HowToStart = () => {
    const [isMessage, setIsMessage] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [isPorpose, setIsPorpose] = useState(false);
    const[isActivate, setIsActivate] = useState(false);
  return (
    <section className='howtostart pt-[40px] pb-[40px]'>

        <div className='howtostart-container mx-auto max-w-[1280px] flex flex-col items-center text-center'>
            <div className='title'>
                <h2>Як почати з INDI</h2>
            </div>
            <div className='subtitle'>
                <h4>
                    Потрібно лише декілька хвилин щоб запустити свою першу пропозицію
                </h4>
            </div>
            <div className='howtostart-items flex gap-4 mb-[60px]'>
                <div className='howtostart-item card flex-1 flex flex-col'>
                    <div className='card-item-pict'>
                        <img src={pensil} alt="Image"/>
                    </div>
                    <div className='card-item-text flex-1'>
                        <h3>Зареєструйтесь</h3>
                        <p>Створіть бізнес-акаунт за кілька хвилин — без договорів і зайвих дзвінків.</p>
                    </div>
                    <div className='card-item-button mt-auto relative'
                            onClick={(e) =>{ e.preventDefault()
                                 setIsRegistered(true)}}
                            onMouseLeave={()=> setIsRegistered(false)}>
                            {isRegistered && <span className='absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
                        <a href="#">Детальніше</a>
                    </div>
                </div>
                <div className='howtostart-item card flex-1 flex flex-col'>
                    <div className='card-item-pict'>
                        <img src={label} alt="Image"/>
                    </div>
                    <div className='card-item-text flex-1'>
                        <h3>Створіть пропозицію</h3>
                        <p>Додайте акцію, знижку або подарунок — все інтуїтивно і просто.</p>
                    </div>
                        <div className='card-item-button mt-auto relative'
                            onClick={(e) => {
                             e.preventDefault()
                             setIsPorpose(true)}}
                            onMouseLeave={()=> setIsPorpose(false)}>
                            {isPorpose && <span className='absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
                        <a href="#">Детальніше</a>
                    </div>
                </div>
                <div className='howtostart-item card flex-1 flex flex-col'>
                    <div className='card-item-pict'>
                        <img src={men} alt="Image"/>
                    </div>
                    <div className='card-item-text flex-1'>
                        <h3>Отримуйте клієнтів</h3>
                        <p>Пропозиції одразу з’являються на мапі або в маркетплейсі — користувачі бачать, грають та активують.</p>
                    </div>
                        <div className='card-item-button relative'
                            onClick={(e) => {
                             e.preventDefault()
                              setIsMessage(true)}}
                            onMouseLeave={()=> setIsMessage(false)}>
                            {isMessage && <span className='absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
                        <a href="#">Детальніше</a>
                    </div>
                </div>
            </div>
            <div className='button relative'
                            onClick={(e) => {
                             e.preventDefault()
                             setIsActivate(true)}}
                            onMouseLeave={()=> setIsActivate(false)}>
                            {isActivate && <span className='absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
                <a href="#">Активувати INDI</a>
            </div>
        </div>


    </section>
  )
}

export default HowToStart