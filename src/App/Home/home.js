import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  state = {
    navItems: [
      { address: "/profile", title: "Profile" },
      { address: "/photography", title: "Photography" },
      { address: "/demo", title: "Demo" }
    ]
  };
  render() {
    return <div className="bodyContents home" />;
  }
}

export default Home;
