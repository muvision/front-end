import React from 'react'
import Navbar from './Components/NavBar.jsx'
import { WhiteBoard } from './container/WhiteBoard.jsx'
import { Features } from './container/Features.jsx'
import HowItWorks from './container/HowItWorks.jsx'
import { WhatWeDo } from './container/WhatWeDo.jsx'

const App = () => {
  return (
    <>
      <Navbar/>
      <WhatWeDo/>
      <WhiteBoard/>
      <Features/>
      <HowItWorks/>
    </>

  )
}

export default App