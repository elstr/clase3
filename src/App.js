import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ItemList } from "./Component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [
        {
          id: 1,
          category: "bebida",
          description: "fernet",
          rangeOfPrice: [150, 180, 200]
        },
        {
          id: 2,
          category: "bebida",
          description: "coca",
          rangeOfPrice: [45, 50, 70]
        },
        {
          id: 3,
          category: "bebida",
          description: "fanta",
          rangeOfPrice: [35, 55, 60]
        },
        {
          id: 4,
          category: "comida",
          description: "papitas",
          rangeOfPrice: [35, 45, 60]
        },
        {
          id: 5,
          category: "comida",
          description: "manice",
          rangeOfPrice: [35, 45, 60]
        }
      ]
    };
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.filtrar}>Filtrar</button>
        <ItemList lista={this.state.productos} />
      </div>
    );
  }
}

export default App;
