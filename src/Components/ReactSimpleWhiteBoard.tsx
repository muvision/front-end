import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import SimpleWhiteBoard from "simple-white-board";
import Controls from "./Controls";

export interface ReactSimpleWhiteBoardProps {
}

const ReactSimpleWhiteBoard = React.forwardRef<HTMLCanvasElement>((props: ReactSimpleWhiteBoardProps, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const whiteBoard = useRef<SimpleWhiteBoard>();

  const [canvasWidth, setCanvasWidth] = useState<number>();

  useImperativeHandle(ref, () => canvasRef.current as HTMLCanvasElement, []);
  const [lineWidth, setLineWidth] = useState(5);
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

  return (
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
        <button onClick={() => whiteBoard.current?.erase()}>Erase</button>
      </div>
    </div>
  );
});

export default ReactSimpleWhiteBoard;