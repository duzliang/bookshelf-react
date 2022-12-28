import React from 'react';
import axios from 'axios';
import TodoForm from './Form';
import TodoList from './List';

const HOST = 'http://localhost:8000';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    }
  }

  componentDidMount() {
    const that = this;
    axios.get(`${HOST}/items`)
      .then(function (response) {
        that.setState({
          todoItems: [...response.data]
        })
      })
  }

  addTodoItem = (value) => {
    const newTodoItem = {
      id: this.state.todoItems.length,
      value,
      done: false,
      delete: false
    };

    axios
      .post(`${HOST}/items`, { todoItem: newTodoItem })
      .then((res) => {
        console.log('data:', res.data);
        this.setState({ todoItems: res.data })
      })
  }

  deleteTodoItem = (item) => {
    console.log('del', item);
    axios
      .delete(`${HOST}/items`, { data: { id: item.id } })
      .then((res) => {
        console.log('delete data:', res.data);
        this.setState({ todoItems: res.data })
      })
  }

  render() {
    return (
      <div>
        <TodoForm
          addTodoItem={this.addTodoItem}
        />
        <TodoList
          todoItems={this.state.todoItems}
          deleteTodoItem={this.deleteTodoItem}
        />
      </div>
    );
  }
}
