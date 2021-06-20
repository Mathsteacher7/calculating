import React from "react";

const Bottom = ({
  shift,
  setShowOnMonitor,
  showOnMonitor,
  setLastAnswer,
  lastAnswer,
}) => {
  const clicking = (value) => {
    const lastShow = showOnMonitor;
    setShowOnMonitor(`${lastShow}${value}`);
  };

  const deleting = () => {
    const lastShow = showOnMonitor.slice(0, -1);
    setShowOnMonitor(lastShow);
  };

  const reseting = () => {
    setLastAnswer(showOnMonitor);
    setShowOnMonitor("");
  };

  const showLastResult = () => {
    setShowOnMonitor(lastAnswer);
  };

  return (
    <div className="bottom">
      <div>
        <button type="button" onClick={() => clicking("7")}>
          7
        </button>
        <button type="button" onClick={() => clicking("8")}>
          8
        </button>
        <button type="button" onClick={() => clicking("9")}>
          9
        </button>
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
        <button type="button" onClick={() => clicking("4")}>
          4
        </button>
        <button type="button" onClick={() => clicking("5")}>
          5
        </button>
        <button type="button" onClick={() => clicking("6")}>
          6
        </button>
        <button type="button">×</button>
        <button type="button">÷</button>
      </div>
      <div>
        <button type="button" onClick={() => clicking("1")}>
          1
        </button>
        <button type="button" onClick={() => clicking("2")}>
          2
        </button>
        <button type="button" onClick={() => clicking("3")}>
          3
        </button>
        <button type="button">{shift ? "nCr" : "+"}</button>
        <button type="button">-</button>
      </div>
      <div>
        <button type="button" onClick={() => clicking("0")}>
          0
        </button>
        <button type="button">.</button>
        <button type="button">EXP</button>
        <button type="button" onClick={showLastResult}>
          Ans
        </button>
        <button type="button">=</button>
      </div>
    </div>
  );
};

export default Bottom;
