import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 1,
    };
  }

  render() {
    const { name, location, email } = this.props;
    const { count1, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>{email}</h3>
        <h1>count:{count1}</h1>
        <h1>count:{count2}</h1>
      </div>
    );
  }
}
export default UserClass;
