import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

const ReactComponent = () => (
  <>
    <h1 className="heading">Header</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam odit
      officia iusto. Officiis, voluptatem in possimus debitis quos repellat!
      Culpa omnis aut ipsa mollitia non, totam facilis ut enim!
    </p>
  </>
);

const HeaderComponent2 = () => (
  <div id="container">
    {/* this is how we can pass a component and use it inside */}
    <ReactComponent />
    <h1 className="header">Footer</h1>
  </div>
);
//if we use a component inside another component like this known as component composition
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent2 />);
