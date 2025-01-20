import React, { Component } from "react";

//Medium Challenge!!!! taking out the hard code
class BasicInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Basic Information</h1>
        <p>Name: {this.props.person.name}</p>
        <p>Phone: {this.props.person.phone}</p>
        <p>Birthdate: {this.props.person.birthdate}</p>
      </div>
    );
  }
}

export default BasicInfo;
