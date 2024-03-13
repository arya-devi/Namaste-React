//This is the parent component consisting of mutiple children

import React from "react";
import UserClass from "./UserClass";

class Help extends React.Component {
  constructor() {
    super();
    console.log("parent constructor"); //when this component render at first this constructor is called
  }
  componentDidMount() {
    console.log("parent componentDidMount"); //when all the child components constructor,render and componentdidmount method is finished then only this parent componentdidmount is called
  }
  render() {
    console.log("parent render"); //then it consists of render method after the parent constructor is called then render will called
    return (
      <div className="user-details">
        <h2>User Details</h2>
        <UserClass              //Then it seen a class component then it will goes to that class component,in this class there are multiple child so after the first childs constructor and render method finished then it goes to the second child and repeat this
          name={"first"}
          location={"Kerala"}
          email={"dewisdevelops@gmail.com"}
        />
        <UserClass 
          name={"second"}     //second child
          location={"Kerala"}
          email={"dewisdevelops@gmail.com"}
        />
      </div>
    );
  }
}

export default Help;
