import React from "react";

const Top = ({ setShift }) => {
  const shiftClick = () => {
    setShift((prev) => !prev);
  };

  return (
    <div className="top">
      <button type="button" id="shift" onClick={shiftClick}>
        SHIFT
      </button>
    </div>
  );
};

export default Top;
