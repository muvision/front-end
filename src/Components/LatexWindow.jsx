import React from 'react'
let Latex = require('react-latex');

const LatexWindow = (props) => {
  return (
    <div className='border-2 border-black ml-3 py-3 px-5 rounded-md'>
        <h1 className='text-2xl'>Compiled Latex</h1>
        <Latex displayMode={true}>{props.code}</Latex>
        <hr className='my-5 text-black'/>
        <h1 className='text-2xl'>Latex Code</h1>
        <p>{props.code}</p>
    </div>

  )
}

export default LatexWindow