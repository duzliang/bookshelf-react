import React from 'react';
import Item from './Item';

export default class List extends React.Component {
  deleteTodoItem = (item) => {
    this.props.deleteTodoItem(item);
  }

  render() {
    return (
      <ul>
        {
          this.props.todoItems.map((item) => {
            if (item.delete) return null;
            return (
              <Item
                key={item.id}
                item={item}
                deleteTodoItem={this.deleteTodoItem}
              />
            )
          })
        }
      </ul>
    )
  }
}