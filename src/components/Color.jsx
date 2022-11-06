import React, { useState, useEffect } from "react";

let red = 0;
let green = 0;
let blue = 0;

const Color = () => {
  const initialStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    width: "255px",
    height: "255px",
  };

  const [style, setstyle] = useState(initialStyle);
  const [generate, setgenerate] = useState(false);

  useEffect(() => {
    //Instanciamos el setinterval que nos permitirá actualizar el estado cada segundo
    const intervalID = setInterval(() => {
      randomRGB();
    }, 300);
    return () => {
      clearInterval(intervalID);
    };
  }, [generate]);

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomRGB = () => {
    if (generate) {
      red = random(0, 255);
      green = random(0, 255);
      blue = random(0, 255);

      setstyle({
        ...style,
        backgroundColor: `rgb(${red},${green},${blue})`,
      });
    }
  };

  const generator = (status) => {
    setgenerate(status);
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <div
        style={style}
        onMouseOver={() => generator(true)}
        onMouseOut={() => generator(false)}
        onDoubleClick={() => generator(false)}
      ></div>
    </div>
  );
};

export default Color;
