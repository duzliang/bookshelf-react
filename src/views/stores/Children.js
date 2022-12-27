import React from "react";
import { ThemeContext } from "./context";

export default class Children extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => (
          <div>
            {context.store.getState().count}
            <button onClick={() => context.store.add()}>add 1</button>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}