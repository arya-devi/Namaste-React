import React from "react";
import UserClass from "./UserClass";
import { UserContext } from "../utils/globalContext";

//How we can use  Context in a class based component we cannot use hooks insted of this we can use like this

class Help extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="user-details">
        <h2>User Details</h2>
        <UserClass
          name={"first"}
          location={"Kerala"}
          email={"dewisdevelops@gmail.com"}
        />
        <UserContext.Consumer>
          {({loggedUser})=>{
            return <h1>{loggedUser}</h1>
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Help;
