//This is the child component

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name + "child constructor"); //when a class component load at first this constructor is called
  }
  componentDidMount() {
    console.log(this.props.name + "child componentDidMount"); //if there are multiple children in the parent class component this will called after the completion of all child constructor and render method
  }
  //There are  three life cycle methods
  //  1) Mounthing
  //  2) Updating
  //  3) Unmounting
  // in react when the component is mounted , it is mounted in 2 phases
  //  1) Render phace
  //  {React is fast because of these phases}
  //  2) Commit phase
  //when the component is mounting , first the constructor is called then the render is called.This constructor and render comes under the Render phase, then the react updates the dom and then componentdidmount is called this is in the commit phase
  render() {
    console.log(this.props.name + "child render"); //once the constructor is called then the render is called
    const { name, location, email } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>{email}</h3>
        <h1>count:{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          decrement
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}
export default UserClass;
