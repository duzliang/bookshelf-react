import React from "react";
import { ThemeContext } from "./context";

const connect = (Component) => (
  class WrapperComponent extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {context => <Component {...context.store} />}
        </ThemeContext.Consumer>
      )
    }
  }
)

export default connect;
