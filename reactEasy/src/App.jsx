import React, { Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
    };
  }

  render() {
    return (
      <div>
        <h1>Basic Information</h1>
        <p>Name: {this.state.person.name}</p>
        <p>Phone Number: {this.state.person.phone}</p>
        <p>Date of Birth: {this.state.person.birthdate}</p>
      </div>
    );
  }
}
export default App;
