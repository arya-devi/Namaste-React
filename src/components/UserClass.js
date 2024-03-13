import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); //In React components specifically, super(props) is used to pass props to the constructor of the parent class.
    console.log(props);
  }
 
  render() {
    const { name, location, email } = this.props;  //we can destructure the props and use it that component whenever you want 
    return (
      <div className="user-card">
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>{email}</h3>
      </div>
    );
  }
}
export default UserClass;
