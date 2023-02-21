import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Space, Modal, message } from 'antd';

import { getBooks, remove } from '../../stores/bookSlice';

import Edit from './Edit';

/**
 * @note const canSave = [title, content].every(Boolean) && addRequestStatus === 'idle'
 * @returns 
 */
export default function List() {
  const status = useSelector(state => state.book.status);
  const list = useSelector(state => state.book.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getBooks());
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
              dispatch(getBooks());
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
      title: '名称',
      dataIndex: 'title',
      key: 'title',
      render: (title, record) => <Link to={`/books/${record._id}`}>{title}</Link>,
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
      key: '_id',
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
