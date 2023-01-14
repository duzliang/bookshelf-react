import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  BookOutlined,
  UserOutlined,
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
    getItem(<Link to="/books">书籍管理</Link>, 'books'),
  ]),
  getItem('用户', 'user', <UserOutlined />, [
    getItem(<Link to="/users">用户管理</Link>, 'users'),
  ]),
];

// todo 待完善
const breadcrumbNameMap = {
  '/books': '图书管理',
  '/books/*': '详情',
  '/users': '用户管理',
  '/users/*': '详情',
};

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">首页</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            textAlign: 'center',
            fontSize: 22,
            color: '#fff',
            fontWeight: 'bold',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          图书管理系统
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
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
            {breadcrumbItems}
          </Breadcrumb>

          <Outlet />
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          DuerOS ©2023 Created by Duke
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
