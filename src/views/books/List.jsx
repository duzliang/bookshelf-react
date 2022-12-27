import React, { useState } from "react";
import { Table } from "antd";

export default function List() {
  const [list, setList] = useState([
    { id: 1, name: '思考致富', author: 'siller' },
    { id: 2, name: '富有的习惯', author: 'domer' },
    { id: 3, name: '底层逻辑', author: 'liurun' },
  ]);

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

  return <Table dataSource={list} columns={columns} />;
}
