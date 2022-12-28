import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
  }

  addTodoItem = () => {
    const newItem = {
      value: this.input.current.value,
      done: false,
      delete: false
    };
    this.props.add(newItem);
    this.input.current.value = '';
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.input}
          placeholder="add or search something..."
        />
        <button type="submit" onClick={this.addTodoItem}>添加
        </button>
      </div>
    )
  }
}