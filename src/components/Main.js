import React from "react";
import Bottom from "./bottom/Bottom";
import Top from "./top/Top";

const Main = () => {
  const [shift, setShift] = React.useState(false);

  return (
    <div>
      <Top setShift={setShift} />
      <Bottom shift={shift} />
    </div>
  );
};

export default Main;
