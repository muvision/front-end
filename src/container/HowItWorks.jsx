import React from 'react'

const HowItWorks = () => {
  return (
    <div>
      <div id="howitworks">features</div>
      <h1>How It Works</h1>
      <p>
        MuVision uses the power of OpenCV to scan your image and extract the lines of math expressions. 📸 <br />
        Then, our algorithm splits each line into individual characters with bounding boxes. 🔲 <br />
        Each character is then fed into our amazing ensemble neural network, which can recognize any symbol or letter in your writing. 🤖 <br />
        Our ensemble model combines the best of both worlds: our own custom Tensorflow model, and several state-of-the-art pretrained models such as Resnet-50, VGG-19, and MobileNet. 🚀 <br />
        By taking a weighted average of their results, we can achieve high accuracy and robustness. 💯 <br />
        Finally, we use the PyLatex library to convert the text into Latex code, which you can copy and paste into your documents. 📝 <br />
        MuVision makes math easy and fun! 😊 <br />
        We hope you enjoy using MuVision! 🙌
      </p>
    </div>
  )
}

export default HowItWorks