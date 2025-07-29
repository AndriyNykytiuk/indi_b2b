import React from 'react'
import Header from './components/Header'
import Swipercomponent from './components/Swipercomponent'
import Magic from './components/Magic'
import Posibilities from './components/Posibilities'
import HowToStart from './components/HowToStart'
import Indibusines from './components/Indibussines'
import InvolveClients from './components/InvolveClients'
import Footer from './components/Footer'
import Questions from './components/Questions'
import MainQuestionComponent from './components/MainQuestionComponent'

const App = () => {
  return (
    <>
      <body>
        <main>
            <Header/>
            <Swipercomponent/>
            <Magic/>
            <Posibilities/>
            <HowToStart/>
            <Indibusines/>
            <InvolveClients/>
            <Questions/>
            <MainQuestionComponent/>
            <Footer/>
        </main>
      </body>
    
    </>
  )
}

export default App