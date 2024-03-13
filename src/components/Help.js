//This is the parent component

import React from "react";
import UserClass from "./UserClass";

class Help extends React.Component {
  constructor() {
    super();
    console.log("parent constructor"); //when this component render at first this constructor is called
  }
  componentDidMount() {
    console.log("parent componentDidMount"); //when the child component is finished all the life cycle methods then only the componentdidmount is called
  }
  render() {
    console.log("parent render"); //then it consists of render method after the parent constructor is called then render will called
    return (
      <div className="user-details">
        <h2>User Details</h2>
        <UserClass //Then it seen a class component  then it will goes to the class component
          name={"Aryadevi"}
          location={"Kerala"}
          email={"dewisdevelops@gmail.com"}
        />
      </div>
    );
  }
}

export default Help;
