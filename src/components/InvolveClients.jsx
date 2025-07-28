import React from 'react'
import '../css/involveclients.css'
import mobile from '../img/mobile.png'

const InvolveClients = () => {
  return (
    <section>
        <div className='involveclients-container mx-auto max-w-[1280px] p-[15px] md:p-[100px]'>
            <div className='involveclients-gridcontainer gridcontainer grid grid-cols-1 md:grid-cols-3'>

                <div className='gridcontainer-left left-gridcontainer col-span-2 flex flex-col justify-center '>
                        <div className='left-gridcontainer-title'>
                            <h3>Готові залучати клієнтів через гру - інтерактив?</h3>
                        </div>
                         <div className='left-gridcontainer-subtitle'>
                            <h4>INDI — це новий спосіб взаємодії з клієнтами: без складних інтеграцій, з мінімальними витратами на рекламу та повним контролем</h4>
                        </div>
                        <div className='left-gridcontainer-button flex'>
                            <a href="#">Запустити INDI</a>
                        </div>
                </div>
                <div className='gridcontainer-right right-gridcontainer'>
                        <div className='right-gridcontainer-image'>
                            <img src={mobile} alt="Image"/>
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InvolveClients