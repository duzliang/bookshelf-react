import React from "react";
import { ThemeContext } from "./context";

const connect = (mapStateToProps) => (mapDispatchToProps) => (Component) => (
  class ChildComponent extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {context => {
            const stateProps = mapStateToProps ? mapStateToProps(context.store.getState()) : {};
            const dispatchProps = mapDispatchToProps ? mapDispatchToProps(context.store.dispatch) : {};
            const allProps = {
              ...stateProps,
              ...dispatchProps,
              ...this.props,
            };

            return <Component {...allProps} />
          }}
        </ThemeContext.Consumer>
      )
    }
  }
)

export default connect;
