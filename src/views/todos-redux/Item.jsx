import React from 'react';

export default class Item extends React.Component {
  delete = () => {
    this.props.delete(this.props.item.id);
  }

  render() {
    const { item } = this.props;
    return (
      <li>
        {item.delete ? <del>{item.value}</del> : <label>{item.value}</label>}
        <button disabled={item.delete} onClick={this.delete}>
          删除
        </button>
      </li>
    )
  }
}