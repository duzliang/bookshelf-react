import React from 'react';
import Item from './Item';

export default class List extends React.Component {
  delete = (id) => {
    this.props.delete(id);
  }

  render() {
    return (
      <ul>
        {
          this.props.todoItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              delete={this.delete}
            />
          ))
        }
      </ul>
    )
  }
}