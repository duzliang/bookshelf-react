import React from "react";
import { Table } from "antd";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, name: '思考致富', author: 'sill' },
        { id: 2, name: '富有的习惯', author: 'ddom' },
        { id: 3, name: '底层逻辑', author: 'liurun' },
      ]
    };
  }

  render() {
    const { list } = this.state;
    
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
      },
    ];

    return (
      <div>
        <Table dataSource={list} columns={columns} />;
      </div>
    )
  }
}