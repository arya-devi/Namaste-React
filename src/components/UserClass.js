//This is the child component

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("child constructor"); //when a class component load at first this constructor is called
  }
  componentDidMount() {
    console.log("child componentDidMount"); //The componentdidMount helps to make API calls.after render method this componentdidMount will be called
  }
  render() {
    console.log("child render"); //once the constructor is called then the render is called
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
