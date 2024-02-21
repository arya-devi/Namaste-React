import React from "react";
import ReactDOM from "react-dom/client";

//this is an api call for attack us, so if the code is executed it will affected our safety
const maliciousData = api.getData("malicious data");

const ReactComponent = () => (
  <div id="container">
    {maliciousData}
    {/* dont be afraid JSX will take care of it , JSX is not executing tha data directly , JSX  will be automatically sanitize the data before execution,so no one can attack us */}
    <h1 className="header">Iam Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ReactComponent />);
