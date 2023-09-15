import React from "react";
import "./EmpManButtons.scss";
const EmpManButtons = ({chooseButton}) => {
  return (
    <>
      <h1 className="title pt-4">
        Which<span style={{ color: "#06c05e" }}> Position </span>are you
      </h1>
      <div className="box_data d-grid gap-2 lh-lg pt-5 pb-3">
        <button onClick={()=>chooseButton("Employee")}>Employee</button>
        <button onClick={()=>chooseButton("Manager")}>Manager</button>
      </div>
    </>
  );
};

export default EmpManButtons;
