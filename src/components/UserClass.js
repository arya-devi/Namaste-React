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
    console.log("constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/arya-devi");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log(" componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  // if we want to do anything on specific state changes how will be modify our componentDidUpdate ?

  // we need to check that whether the previous state and current state changed or not in componentDidUpdate.

  // if we want to do something when multiple state changes that means same thing to do then we have to put || in the condition like

  // if(prevState !== this.state.userInfo || this.state.userData ) // Do something

  // if we want to do something when multiple state changes that means differents thing to do then we have to put more conditions like

  // if(prevState !== this.state.userInfo) // Do something

  // if(prevState !== this.state.userData) // Do something

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.userInfo) {
      // Do something
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount"); 
  }

  render() {
    console.log("rendering");
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
