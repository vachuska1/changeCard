import * as React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Figurka } from "./Figurka/Figurka";
import "./Bunka.less";

export const Bunka: React.FC = ({ children }) => {
  //props jsou zbytecny, nic nedelaji
  //   const [classNames, setClassNames] = useState(``);
  //   const [showColor, setShowColor] = useState(false); //false bude zluta, true je cervena
  //   const [showYellow, setShowYellow] = useState(false);

  //   const [counter, setCounter] = useState(0);
  //   const [extendClass, setExtendClass] = useState("");
  const cardRef = useRef(null);
  Figurka(cardRef);

  //   useEffect(() => {
  //     setClassNames(
  //       `${showColor ? "bunkacervena" : "bunkamodra"}
  //       }` /*`${showYellow ? "bunkazluta" : "bunkaoranzova"}` */
  //     );
  //   }, [showColor]);

  //   const handleClick = () => {
  //     if (counter === 0) {
  //       setExtendClass("bunka--1");
  //       setCounter(counter + 1);
  //     } else if (counter === 1) {
  //       setExtendClass("bunka--2");
  //       setCounter(counter + 1);
  //     } else if (counter === 2) {
  //       setExtendClass("bunka--3");
  //       setCounter(counter + 1);
  //     } else {
  //       setExtendClass("");
  //       setCounter(0);
  //     }
  //   };

  return (
    <div>
      <div className="card" ref={cardRef}>
        {children}
      </div>

      {/*<div> 
            className={classNames}
            onClick={() => setShowYellow((showYellow) => !showYellow)}
           </div>
        */}

      {/* <div className={`bunka ${extendClass}`} onClick={() => handleClick()}>
        foo
      </div> */}
    </div>
  );
};
