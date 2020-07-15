import React, { useState } from "react";
export default () => {
  const [variable, setVariable] = useState({
    photo: "/1.jpg",
    nameOFcontry: "tunisia",
    capital: "tunisia",
  });
  {
    variable.function1 = () => {
      setVariable({
        photo: "/1.jpg",
        nameOFcontry: "tunisia",
        capital: "tunisia",
      });
    };
  }
  {
    variable.function2 = () => {
      setVariable({
        photo: "/2.jpg",
        nameOFcontry: "ALLEMANGNE",
        capital: "berlin",
      });
    };
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>choose country</h1>
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={variable.function1}>TUNISIA</button>
          <button onClick={() => variable.function2()}>allemangne</button>
        </div>
        <img src={variable.photo} />
        <h1>nameOFcontry:{variable.nameOFcontry}</h1>
        <h2>capital:{variable.capital}</h2>
      </div>
    </div>
  );
};
