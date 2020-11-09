import * as React from "react";
import { Bunka } from "./Bunka/Bunka";
import "./Pole.less";

export const Pole = () => {
  return (
    <div className="container">
      <Bunka> nervak</Bunka>
      <Bunka> Alex</Bunka>
      <Bunka> je</Bunka>
    </div>
    // <div className={"pole"}>
    //   <Bunka />
    //   <Bunka />
    // </div>
  );
};
