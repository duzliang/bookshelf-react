import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  BookOutlined,
  CodeOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('图书', 'book', <BookOutlined />, [
    getItem(<Link to="/book/list">书籍管理</Link>, 'list'),
  ]),
  getItem('实验室', 'lab', <CodeOutlined />, [
    getItem(<Link to="/store-app">TODO ContextAPI</Link>, 'todo_context_api'),
    getItem(<Link to="/todos-redux">TODO_Redux</Link>, 'todo_redux'),
    getItem(<Link to="/todos-rtk">TODO_RTK</Link>, 'todo_rtk'),
    getItem(<Link to="/todos-mobx">TODO_Mobx</Link>, 'todo_mobx'),
  ]),
];

const App = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          onClick={({ item, key, keyPath, e }) => {
            console.log('log=>menu click:', key, keyPath);
          }}
        />
      </Sider>

      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>

          <Outlet />
        </Content>

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          DuerOS ©2023 Created by Duke
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
