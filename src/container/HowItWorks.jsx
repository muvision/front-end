import React from 'react'

const HowItWorks = () => {
  return (
    <div>
      <div id="howitworks">features</div>
      <h1>How It Works</h1>
      <p>
        We use OpenCV to split the image into lines of math expressions and feed the individual characters into our own weighted average ensemble neural network which classifies the individual characters. 🤖 <br />
        Our weighted average model is built out of a custom Tensorflow and Keras model, and pretrained models including Resnet-50, VGG-19, and MobileNet. 🔬 <br />
        Finally, we use the PyLatex library to convert the text into Latex code. 💻 <br />
        We hope you enjoy using MuVision! 😊
      </p>
    </div>
  )
}

export default HowItWorks