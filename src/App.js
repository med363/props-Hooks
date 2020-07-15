import React from "react";
import Child2 from "./composent/Propriete2";
import Child1 from "./composent/Propriete";
import HooksOb from "./StateObject";
import HooksOb1 from "./StateOb";

class App extends React.Component {
  GoodViews = () => {
    alert("i hope you learnt new knowledge");
  };
  render() {
    return (
      <div
        style={{
          marginLeft: "509px",
          marginRight: "50px",
          marginTop: "50px",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Child1
          src="/cc.jpg"
          title="nature"
          abc={this.GoodViews}
          widthImg="400px"
        />
        <Child2 style={{ color: "red" }}>Med aMine</Child2>
        <Child2 petit>Reseau</Child2>
        <HooksOb />
        <HooksOb1 style={{ marginLeft: 0 }} />
      </div>
    );
  }
}

export default App;
