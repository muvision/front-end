import React from 'react'
let Latex = require('react-latex');

const LatexWindow = (props) => {
  return (
    <div className='border-2 border-theme-stroke ml-3 py-3 px-5 rounded-md w-max' style={{width:window.innerWidth*0.4}}>
        <h1 className='text-xl'>Compiled Latex</h1>
        <Latex displayMode={true}>{props.code}</Latex>
        <hr className='my-5 text-black border border-slate-400'/>
        <h1 className='text-xl'>Latex Code</h1>
        <p>{props.code}</p>
    </div>

  )
}

export default LatexWindow