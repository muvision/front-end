import React from 'react'
// let Latex = require('react-latex');
// import Latex from 'react-latex-next'
import { MathJax, MathJaxContext } from "better-react-mathjax";

const LatexWindow = (props) => {
  return (
    <div className='border-2 border-theme-stroke ml-3 py-3 px-5 rounded-md w-max' style={{width:window.innerWidth*0.4}}>
        <h1 className='text-xl'>Compiled Latex</h1>
        <MathJaxContext>
          <MathJax>{props.code}</MathJax>
        </MathJaxContext>

        <hr className='my-5 text-black border border-slate-400'/>
        <h1 className='text-xl'>Latex Code</h1>
        <h4>{props.code} </h4>
    </div>

  )
}

export default LatexWindow