import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  BookOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('图书', 'book', <BookOutlined />, [
    getItem(<Link to="/book/list">书籍管理</Link>, 'list'),
  ]),
];

// todo 待完善
const breadcrumbNameMap = {
  '/book': '图书管理',
  '/book/list': '列表',
  'book/*': '详情',
};

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  // const extraBreadcrumbItems = pathSnippets.map((_, index) => {
  //   const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
  //   return (
  //     <Breadcrumb.Item key={url}>
  //       <Link to={url}>{breadcrumbNameMap[url]}</Link>
  //     </Breadcrumb.Item>
  //   );
  // });
  // const breadcrumbItems = [
  //   <Breadcrumb.Item key="home">
  //     <Link to="/">首页</Link>
  //   </Breadcrumb.Item>,
  // ].concat(extraBreadcrumbItems);

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
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            {breadcrumbItems}
          </Breadcrumb> */}

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
