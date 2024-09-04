import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate(nexprop, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  increase = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };
  render() {
    console.log("main component");
    return (
      <div>
        <Title />
        <p>{this.state.count}</p>
        <button onClick={this.increase}>click</button>
      </div>
    );
  }
}
class Title extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log("title Componet");
    return <div>Hello</div>;
  }
}
export default Counter;
