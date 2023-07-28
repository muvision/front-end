import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import SimpleWhiteBoard from "simple-white-board";
import Controls from "./Controls";
import axios from 'axios';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export interface ReactSimpleWhiteBoardProps {
}

const ReactSimpleWhiteBoard = React.forwardRef<HTMLCanvasElement>((props: ReactSimpleWhiteBoardProps, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const whiteBoard = useRef<SimpleWhiteBoard>();

  const [canvasWidth, setCanvasWidth] = useState<number>();

  useImperativeHandle(ref, () => canvasRef.current as HTMLCanvasElement, []);
  const [lineWidth, setLineWidth] = useState(30);
  const [lineColor, setLineColor] = useState("#000000");

  useEffect(() => {
    const width = Math.min(
      typeof window !== "undefined" ? window.screen.width * 0.8 : 500,
      500
    );

    setCanvasWidth(width);
    
    
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    whiteBoard.current = new SimpleWhiteBoard(canvasRef.current);

    setWhite();

    return () => {
      if (whiteBoard.current) {
        whiteBoard.current.dispose();
      }
    }
  }, [canvasWidth]);

  useEffect(() => {
    if (!whiteBoard.current) return;

    whiteBoard.current.setLineColor(lineColor);
    whiteBoard.current.setLineWidth(lineWidth);
  }, [lineColor, lineWidth]);


  const saveImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvasRef.current?.getContext('2d');
    if (canvas != null && ctx != null) {
      let dataURL = canvas.toDataURL("image/png", 1.0);
      downloadImage(dataURL, 'my-canvas.png');
      console.log(dataURL)
    }
  }

  function downloadImage(data: any, filename = 'untitled.png') {
    let a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
  }

  const setWhite = () => {
    const canvas = canvasRef.current;
    const ctx = canvasRef.current?.getContext('2d');
    ctx!.fillStyle = 'white';
    ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
  }

  const sendImage = async () => {
    const canvas = canvasRef.current;
    const ctx = canvasRef.current?.getContext('2d');
    if (canvas != null && ctx != null) {
      let dataURL = canvas.toDataURL("image/png", 1.0);
      const response = await fetch(dataURL);
      const blob = await response.blob();
      console.log("loading")
      const formData = new FormData();
      formData.append("image", blob, 'image.png');
      let res = await axios.post('http://localhost:8000/muvision/classify_single/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
      console.log(res.data);
    }
  }

  return (
    <>
      <h1>Demo</h1>
      <div className="react-simple-white-board">
        <Controls
          lineColor={lineColor}
          lineWidth={lineWidth}
          setLineColor={setLineColor}
          setLineWidth={setLineWidth}
        />
        <canvas
          ref={canvasRef}
          style={{ border: '#000000 solid 1px' }}
          width={canvasWidth}
          height={canvasWidth}
        />
        <div>
          <button onClick={() => {whiteBoard.current?.erase(); setWhite()}}>Clear</button>
          <button onClick={saveImage}>Get image</button>
          <button onClick={sendImage}>Send image</button>

        </div>
      </div>
    </>
  );
});

export default ReactSimpleWhiteBoard;