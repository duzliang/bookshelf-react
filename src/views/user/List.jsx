import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Space, Modal, message } from 'antd';

import { getUsers, remove } from '../../stores/userSlice';

import Edit from './Edit';

export default function List() {
  const status = useSelector(state => state.user.status);
  const list = useSelector(state => state.user.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getUsers());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    Modal.confirm({
      title: '确定要删除吗？',
      onOk: () => {
        /**
       *  example: await dispatch(addNewPost({ title, content, user: userId })).unwrap()
       *  unwrap() return a new Promise has the actual action.payload value from a fulfilled action, or throws an error if it's the rejected action.
       */
        dispatch(remove(id)).unwrap()
          .then(res => {
            if (res.status === 0) {
              message.success('删除成功');
              dispatch(getUsers());
            } else {
              message.error('操作失败');
            }
          })
          .catch(err => {
            message.error(`操作失败[${err}]`);
          });
      },
    });
  };

  const columns = [
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
      render: (username, record) => <Link to={`/users/${record._id}`}>{username}</Link>,
    },
    {
      title: '创建时间',
      dataIndex: 'create_at',
      key: 'create_at',
      render: val => new Date(val).toLocaleDateString(),
    },
    {
      title: '修改时间',
      dataIndex: 'update_at',
      key: 'update_at',
      render: val => new Date(val).toLocaleDateString(),
    },
    {
      title: '操作',
      dataIndex: '_id',
      key: 'id',
      render: (id) => (
        <Space size="middle">
          <Edit id={id} />
          <a href='#' onClick={() => handleDelete(id)}>删除</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div style={{ marginBottom: 10, float: 'right' }}>
        <Edit />
      </div>
      <Table
        loading={status === 'loading'}
        rowKey={record => record._id}
        dataSource={list}
        columns={columns}
      />
    </>
  );
}
