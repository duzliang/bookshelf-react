import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import './index.css';

// antd 国际化配置
import 'dayjs/locale/zh-cn';
import locale from 'antd/locale/zh_CN';

import reportWebVitals from './reportWebVitals';

import { RouterProvider } from 'react-router-dom';
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider locale={locale}>
      <RouterProvider router={router} />
    </ConfigProvider>;
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
