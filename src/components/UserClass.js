import { json } from "body-parser";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "dummy",
        avatar_url: "",
        bio: "nop",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/arya-devi");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo;

    return (
      <div className="user-card">
        <div>
          <h1>{bio}</h1>
          <h2>{name}</h2>
          <h3>{location}</h3>
        </div>
        <div>
          <img src={avatar_url} alt="" />
        </div>
      </div>
    );
  }
}
export default UserClass;
