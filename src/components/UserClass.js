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
  /**
   *  --- Mounting ---
   *
   *  Constructor (dummy data)
   *  Render (Dummy data)
   *       <HTML Dummy >
   *  Component did mount
   *       <Api Call>
   *       this.setState -> State Variable is updated
   */
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/arya-devi");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log(" componentDidMount");
  }
  /**      --- Update ---
   *       render (API DATA)
   *       <HTML Api data.
   *       ComponentDidUpdate
   */
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  /**            --- UnMounting ---
   *    when the component changes the Unmounting will work
   */
  componentWillUnmount() {
    console.log("componentWillUnmount"); //This will log when the component will change
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
