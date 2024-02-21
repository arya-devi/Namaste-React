import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

const jsxHeading = (
  <>
    <h1 className="heading">
      The JSX is converted into browser understand language 🚀
    </h1>
    <p>Paragraph</p>
  </>
);
//React Component
//Class Component
//Functional Components

//React functional Component
//This is how we create React Component using return keyword
const HeaderComponent = () => {
  return <h1 className="header">Header</h1>;
};
//this is how we create React Component without using return keyword just wrapping into a () paranthisis
const HeaderComponent2 = () => <h1 className="header">Header</h1>;

//Both wat to create react component is valid syntax
//React component is just a javascript function that return some jsx or react element
//and the first letter ofreact component name is must be capital letter

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
