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
      <div className="mx-8 md:mx-20 lg:mx-40">
        <WhatWeDo/>
        <WhiteBoard/>
        <Features/>
        <HowItWorks/>
      </ div>
    </>
  )
}

export default App