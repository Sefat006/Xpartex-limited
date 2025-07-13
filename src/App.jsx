import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import IntroSection from './Components/IntroSection/IntroSection'
import Portfolio from './Components/Portfolio/Portfolio'
import BrandValues from './Components/Brand Values/BrandValues'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8'>
      <Navbar></Navbar>
      <IntroSection></IntroSection>
      <Portfolio></Portfolio>
      <BrandValues></BrandValues>
    </div>
  )
}

export default App
