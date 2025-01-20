import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React, { Component } from "react";
import BasicInfo from "./components/basicInfo.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: [
        {
          name: "Ismael",
          phone: "11/21/2004",
          birthdate: "11/21/2004",
        },
        {
          name: "Carlos",
          phone: "12/21/2003",
          birthdate: "12/21/2003",
        },
        {
          name: "Juan",
          phone: "01/21/2005",
          birthdate: "01/21/2005",
        },
      ],
    };
  }
  render() {
    const peopleList = [];
    //VeryHard Challenge!!: Looping through people to display all people within state

    //Medium challenege: Update BasicInfo prop with person object
    for (let i = 0; i < this.state.person.length; i++) {
      //key is when you loop through list you need to provide a unique key for each prop, helps react update the DOM
      peopleList.push(<BasicInfo key={i} person={this.state.person[i]} />);
    }

    return <div>{peopleList}</div>;
  }
}

export default App;
