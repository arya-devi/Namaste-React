import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Iam react Element going to Component</h1>;
const heading1 = <h1>Iam react Element going to React Element</h1>;

const ReactComponent = () => (
  <>
    <h1 className="heading">Iam Component going to Element</h1>
    {heading}
    <h2>
      Basically these all are javascript.... react element becomes js object
      .... jsx becomes react element and then js object....component is used to
      write JSX and we can write js by adding {"{ }"} in component we can write
      any javascript code 🚀
    </h2>
  </>
);
const heading2 = (
  <div>
    <ReactComponent />
    {heading1}
  </div>
);

const HeaderComponent2 = () => (
  <div id="container">
    {heading2}

    <h1 className="header">Iam Component going to Component</h1>
  </div>
);
const HeaderComponent3 = () => (
  <div id="container">
    <HeaderComponent2 />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent3 />);
