import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col, message } from 'antd';

import API from '../../utils/api';
import server from '../../utils/server';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    server.post(API.user.login(), values).then(res => {
      if (res.status === 'ok') {
        message.success('登录成功');
        localStorage.setItem('token', res.token);
        setTimeout(() => {
          navigate('/book/list');
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
          initialValues={{
            remember: true,
          }}
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
            <Form.Item name="记住" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              忘记密码
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            Or <Link to="/register">注册</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
