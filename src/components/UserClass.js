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
    //this will do log every 1 sec
    this.timer = setInterval(() => {
      console.log(" componentDidMount");
    }, 1000);
  }

  componentWillUnmount() {
    //if we change the component and the setInterval won't stop that will render again so overcome this...
    // use of componentWillUnmount is to clear things when component changes,
    // React s a SPA so it doest do cleanup by self,so we want to do that after unmount the component
    clearInterval(this.timer);
    // this is why componentWillUnmount works,and we can do same thing on useEffect by adding a return function inside useEffect ,
    //  that will act like componentWillUnmount,when ever the component changes that will be called and will clear unwanted
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
