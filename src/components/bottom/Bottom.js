import React from "react";

const Bottom = ({shift}) => {
  return (
    <div className="bottom">
      <div>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button">{shift ? "INS" : "DEL"} </button>
        <button type="button">AC</button>
      </div>
      <div>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button">×</button>
        <button type="button">÷</button>
      </div>
      <div>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">{shift ? "nCr" : "+"}</button>
        <button type="button">-</button>
      </div>
      <div>
        <button type="button">0</button>
        <button type="button">.</button>
        <button type="button">EXP</button>
        <button type="button">Ans</button>
        <button type="button">=</button>
      </div>
    </div>
  );
};

export default Bottom;