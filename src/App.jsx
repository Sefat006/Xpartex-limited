import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import IntroSection from './Components/IntroSection/IntroSection'
import Portfolio from './Components/Portfolio/Portfolio'
import BrandValues from './Components/Brand Values/BrandValues'
import Construction from './Construction/Construction'
import WhatWeDo from './Components/What We Do/WhatWeDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8'>
      <Navbar></Navbar>
      <IntroSection></IntroSection>
      <Portfolio></Portfolio>
      <BrandValues></BrandValues>
      <Construction></Construction>
      <WhatWeDo></WhatWeDo>
    </div>
  )
}

export default App
