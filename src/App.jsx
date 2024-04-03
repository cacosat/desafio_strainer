import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import heroImg from './assets/heroImg.png'
import logoStrainer from './assets/logo_strainer.png'
import header from './assets/header.png'
import Chat from './components/Chat'
import Form from './components/Form'
import './App.css'

function App() {
  const [messages, setmessages] = useState([])
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' }); // Use 'smooth' for smooth scrolling
    }
  };

  return <>
      <div className='flex flex-col gap-8 w'>
        <div className='flex justify-center'>
          <img src={header} alt="header strainer"  />
        </div>
        {/* Body */}


        <div className='flex flex-wrap justify-center items-center gap-16'>
          {/* Hero */}
          <div className='flex flex-col gap-16 max-w-[512px]'>
            <h1 className='text-blue text-[50px] sm:text-7xl font-bold text-left'>Recruitment made easy<span className='text-yellow'>.</span></h1>
            <img src={heroImg} alt="picture of two people" className='w-full' />
          </div>
          <Chat props={messages} />
        </div>

        <div className='bg-blue w-screen p-6 flex flex-col sm:flex-row items-center justify-center gap-8'>
          <img src={logoStrainer} alt="strainer logo" className='hidden sm:inline' />
          <p className='text-xl max-w-[40ch]'>Una vez que el agente complete tu formulario podrás revisarlo y enviarlo</p>
          <button onClick={scrollToForm} className="bg-white text-blue hover:border-[1px] border-white py-2 px-8 rounded-full">Revisa tu formulario</button>
        </div>

        <div ref={formRef}>
          <Form />
        </div>


      </div>
    </>
}

export default App
