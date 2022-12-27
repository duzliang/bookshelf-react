import React from "react";
import connect from "./connect";

class Children extends React.Component {
  render() {
    return (
      <div>
        {this.props.getState().count}
        <button onClick={() => this.props.dispatch({ type: 'AddOne' })}>add 1</button>
        <button onClick={() => this.props.dispatch({ type: 'MultiThree' })}>multi 3</button>
      </div>
    )
  }
}

export default connect(Children);
