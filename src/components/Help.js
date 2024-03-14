import React from "react";
import UserClass from "./UserClass";

class Help extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  render() {
    return (
      <div className="user-details">
        <h2>User Details</h2>
        <UserClass
          name={"first"}
          location={"Kerala"}
          email={"dewisdevelops@gmail.com"}
        />
      </div>
    );
  }
}

export default Help;
