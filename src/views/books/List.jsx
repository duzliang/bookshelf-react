import React, { useState, useEffect } from 'react';
import { Table, Space, Modal, message } from 'antd';
import { Link } from 'react-router-dom';

import API from '../../utils/api';
import server from '../../utils/server';

import Edit from './Edit';

export default function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    server.get(API.book.list()).then(res => setList(res.list));
  };

  const handleDelete = (id) => {
    Modal.confirm({
      title: '确定要删除吗？',
      onOk: () => {
        server.delete(API.book.delete(id)).then(res => {
          if (res.status === 0) {
            message.success('删除成功');
            getList();
          }
        });
      },
    });
  };

  const columns = [
    {
      title: '名称',
      dataIndex: 'title',
      key: 'title',
      render: (title, record) => <Link to={`/book/${record._id}`}>{title}</Link>,
    },
    {
      title: '副标题',
      dataIndex: 'sub_title',
      key: 'sub_title',
    },
    {
      title: '封面',
      dataIndex: 'binding',
      key: 'binding',
      render: url => <img src={url} alt="" width={100} />,
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '出版社',
      dataIndex: 'publisher',
      key: 'publisher',
    },
    {
      title: '出版时间',
      dataIndex: 'publish_date',
      key: 'publish_date',
      render: val => new Date(val).toLocaleDateString(),
    },
    {
      title: '操作',
      dataIndex: '_id',
      key: 'id',
      render: (id) => (
        <Space size="middle">
          <Edit id={id} />
          <a onClick={() => handleDelete(id)}>删除</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div style={{ marginBottom: 10, float: 'right' }}>
        <Edit />
      </div>
      <Table rowKey={record => record._id} dataSource={list} columns={columns} />
    </>
  );
}
