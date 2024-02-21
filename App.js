import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
//now we are going to convert this react element to react component
const reactElement = (
  <>
    <h1 className="heading">
      The JSX is converted into browser understand language 🚀
    </h1>
    <p>Paragraph</p>
  </>
);
const ReactComponent = () => (
  <>
    <h1 className="heading">
      The JSX is converted into browser understand language 🚀
    </h1>
    <p>Paragraph</p>
  </>
);
//this is how that looks like 

const HeaderComponent2 = () => (
<h1 className="header">Namaste React by JSX Component 🚀</h1>
);


const root = ReactDOM.createRoot(document.getElementById("root")); 

// to render react component we want to wrap the component inside < />

root.render(<HeaderComponent2 />);
