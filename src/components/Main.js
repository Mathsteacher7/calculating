import React from "react";
import Bottom from "./bottom/Bottom";
import Screen from "./screen/Screen";
import Top from "./top/Top";

const Main = () => {
  const [shift, setShift] = React.useState(false);
  const [showOnMonitor, setShowOnMonitor] = React.useState("test");

  return (
    <div className="main">
      <Screen showOnMonitor={showOnMonitor} />
      <Top setShift={setShift} />
      <Bottom
        shift={shift}
        setShowOnMonitor={setShowOnMonitor}
        showOnMonitor={showOnMonitor}
      />
    </div>
  );
};

export default Main;
