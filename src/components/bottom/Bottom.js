import React from "react";

const Bottom = ({ shift, setShowOnMonitor, showOnMonitor }) => {
  const clicking = (value) => {
    const lastShow = showOnMonitor;
    setShowOnMonitor(`${lastShow}${value}`);
  };

  const deleting = () => {
    const lastShow = showOnMonitor.slice(0, -1);
    setShowOnMonitor(lastShow);
  };

  const reseting = () => {
    setShowOnMonitor("");
  };
  return (
    <div className="bottom">
      <div>
        <button type="button" onClick={() => clicking("7")}>
          7
        </button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button
          type="button"
          onClick={shift ? () => console.log("I am not ready yet") : deleting}
        >
          {shift ? "INS" : "DEL"}{" "}
        </button>
        <button type="button" onClick={reseting}>
          AC
        </button>
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
