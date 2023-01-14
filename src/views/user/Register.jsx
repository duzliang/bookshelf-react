import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Col, message } from 'antd';

import API from '../../utils/api';
import server from '../../utils/server';

const Register = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    server.post(API.user.register(), values).then(res => {
      if (res.status === 'ok') {
        message.success('注册成功');
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      }
    });
  };

  return (
    <Row style={{ padding: '40px' }}>
      <Col span={8} offset={8}>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
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

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              注册
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
