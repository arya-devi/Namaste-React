import React from "react";
import ReactDOM from "react-dom/client";

const ReactComponent = () => (
  <div id="container">
    <h1 className="header">Iam Component</h1>
  </div>
);
const ReactComponent2 = () => (
  <div id="container">
    {/* these are the three ways to call the component.at the end of the day functional component is a normal javascript function because we know that JSX will be converted into normal javascript by babel */}
    <ReactComponent />
    {ReactComponent()}
    <ReactComponent></ReactComponent>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ReactComponent />);
