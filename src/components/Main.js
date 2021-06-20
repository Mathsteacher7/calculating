import React from "react";
import Bottom from "./bottom/Bottom";
import Screen from "./screen/Screen";
import Top from "./top/Top";

const Main = () => {
  const [shift, setShift] = React.useState(false);
  const [showOnMonitor, setShowOnMonitor] = React.useState("");
  const [lastAnswer, setLastAnswer] = React.useState("");

  return (
    <div className="main">
      <Screen showOnMonitor={showOnMonitor} />
      <Top setShift={setShift} />
      <Bottom
        shift={shift}
        setShowOnMonitor={setShowOnMonitor}
        showOnMonitor={showOnMonitor}
        lastAnswer={lastAnswer}
        setLastAnswer={setLastAnswer}
      />
    </div>
  );
};

export default Main;
