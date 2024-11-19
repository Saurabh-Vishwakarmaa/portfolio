import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import { div } from 'framer-motion/client'
import Hero from './components/Hero'
import ScrollIndicator from './components/Secondhero'
import TypeWriter from './components/Animation'
import Aboutme from './components/Aboutme'
import StackingCards from './Stackingprojects'




function App() {
 

  return (
    <div className="here">
<Nav/>
<Hero/>
<TypeWriter/>
<ScrollIndicator/>
<Aboutme/>
<StackingCards/>

    </div>

    
  )
}

export default App
