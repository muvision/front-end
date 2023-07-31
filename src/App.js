import React from 'react'
import Navbar from './Components/NavBar.jsx'
import { WhiteBoard } from './container/WhiteBoard.jsx'
import { Features } from './container/Features.jsx'
import HowItWorks from './container/HowItWorks.jsx'
import { WhatWeDo } from './container/WhatWeDo.jsx'

const App = () => {
  return (
    <div className="mx-10">
      <Navbar/>
      <WhatWeDo/>
      <WhiteBoard/>
      <Features/>
      <HowItWorks/>
    </ div>
  )
}

export default App