import React from "react";
import { ThemeContext, store } from "./context";
import Children from "./Children";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // count: 1, // v1
      store, // v2
    }
  }

  _updateState = () => {
    const state = this.state.store.getState();
    this.setState(state);
  }

  componentDidMount() {
    this.state.store.subscribe(() => this._updateState());
  }

  render() {
    const { store } = this.state;
    return (
      <ThemeContext.Provider value={{ store }}>
        <Children />
      </ThemeContext.Provider>
    )
  }
}