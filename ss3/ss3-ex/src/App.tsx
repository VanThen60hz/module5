import React, { Component } from "react";
import "./App.css";

const predefinedList: string[] = ["Ăn", "Ngủ", "Đi vệ sinh"];

interface AppState {
  list: string[];
  item: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      list: [...predefinedList],
      item: "",
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ item: event.target.value });
  };

  handleAddItem = () => {
    this.setState((state) => ({
      list: [...state.list, state.item],
      item: "",
    }));
  };

  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      this.handleAddItem();
    }
  };

  render() {
    return (
      <div className="App" style={{ width: "280px", margin: "0 auto" }}>
        <h1>Todo List</h1>
        <input
          type="text"
          value={this.state.item}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          style={{ height: "30px" }}
          placeholder="Enter task..."
        />

        <button
          style={{ height: "35px", marginLeft: "3%" }}
          onClick={this.handleAddItem}
        >
          Add
        </button>
        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
