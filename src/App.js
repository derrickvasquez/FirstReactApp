import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/header";
import Groceries from "./components/Groceries";
import AddGroceries from "./components/AddGroceries";
import About from "./components/pages/About";
import uuid from "uuid";

import "./App.css";


class App extends Component {
  state = {
    list: [
      {
        id: uuid.v4(),
        title: "Sweet Bread",
        purchased: false
      },
      {
        id: uuid.v4(),
        title: "Red Wine",
        purchased: false
      },
      {
        id: uuid.v4(),
        title: "Blue Cheese",
        purchased: false
      }
    ]
  };

  // toggle complete
  markComplete = id => {
    this.setState({
      list: this.state.list.map(list => {
        if (list.id === id) {
          list.completed = !list.completed;
        }
        return list;
      })
    });
  };

  //Delete Grocery List item
  deleteList = id => {
    console.log(id);
    this.setState({
      list: [...this.state.list.filter(list => list.id !== id)]
    });
  };

  //Adding grocery item
  addGroceries = title => {
    const newItem = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ list: [...this.state.list, newItem] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddGroceries addGroceries={this.addGroceries} />
                  <Groceries
                    list={this.state.list}
                    markComplete={this.markComplete}
                    deleteList={this.deleteList}
                  />
                </React.Fragment>
              )}
            />
            <Route path ="/about" component = { About } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;


