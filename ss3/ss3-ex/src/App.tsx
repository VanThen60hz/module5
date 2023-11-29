import React, { Component } from "react";
import "./App.css";
interface AppState {
  isExpanded: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  handleToggleExpand = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 style={{ backgroundColor: "green", color: "white" }}>
          Condition Rendering
        </h1>
        {this.state.isExpanded ? (
          <>
            <button onClick={this.handleToggleExpand}>Đóng giới thiệu</button>
            <h1>Giới thiệu</h1>
            <p>
              Trong ReactJs, đôi khi bạn có một thuộc vào từng điều kiện ví dụ
              như trạng thái của state, props,... mà bạn muốn hiển thị một hoặc
              một số component nào đó. Khi đó bạn có thể sử dụng Conditional
              rendering để render ra component mà bạn mong muốn.
            </p>
          </>
        ) : (
          <button onClick={this.handleToggleExpand}>Xem giới thiệu</button>
        )}
      </div>
    );
  }
}

export default App;
