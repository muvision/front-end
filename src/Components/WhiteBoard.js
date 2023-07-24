import React from 'react'
import Sketchpad from sketchpad

var sketchpad = new Sketchpad({
  element: '#sketchpad',
  width: 400,
  height: 400,
});

const WhiteBoard = () => {
  return (
  <canvas id="sketchpad"></canvas>

  )
}

export default WhiteBoard