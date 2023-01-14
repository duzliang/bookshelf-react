import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Form, Input, Modal, message, Button } from 'antd';
import { LockOutlined } from '@ant-design/icons'

import { getUsers, getUser, add, edit } from '../../stores/userSlice';

const Edit = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);

    if (id) {
      dispatch(getUser(id)).unwrap().then(detail => {
        form.setFieldsValue({
          username: detail.username,
          password: detail.password,
        });
      })
    }
  };
  const handleOk = () => {
    const values = form.getFieldsValue();
    if (id) {
      values._id = id;
    }
    dispatch(id ? edit(values) : add(values)).unwrap()
      .then(res => {
        if (res.status === 0) {
          message.success(id ? '编辑成功' : '添加成功');
          dispatch(getUsers());
          setIsModalOpen(false);
        } else {
          message.error('操作失败');
        }
      })
      .catch(err => {
        message.error(`操作失败[${err}]`);
      });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {id
        ? <a onClick={showModal}>编辑</a>
        : <Button type="primary" onClick={showModal}>新增</Button>
      }

      <Modal
        title={id ? '编辑用户' : '新增用户'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="user_edit"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

Edit.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Edit;
