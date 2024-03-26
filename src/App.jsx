import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Chat from './components/chat'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <>
      <div>
        <div>
          {/* Recruitment made easy e imagen */}
        </div>
        <Chat />
      </div>
    </>
}

export default App
