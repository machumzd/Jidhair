import React, { useState } from "react";
import "./LandingPage.scss";
import EmpManButtons from "Components/Buttons";
import Signup from "Pages/Signup";

const LandingPage = () => {
  const [selectedPosition, setSelectedPostition] = useState(null);
  const PositionHandler = (position) => {
    setSelectedPostition(position)
  };
  return (
    <div className="container">
      <div className="box_contents p-5 mx-auto my-5">
        {selectedPosition === null ? (
          <EmpManButtons chooseButton={PositionHandler}/>
        ) : (selectedPosition === "Employee" )? (
          <Signup user="Employee" />
        ) : (
          <Signup user="Manager"/>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
