import React from 'react';
import ReactDOM from 'react-dom';
import './styles/var.scss';
import './styles/reset.scss';
import './index.css';
import { Provider } from 'mobx-react';
import * as stores from './store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import '@/utils/rem';
ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <BrowserRouter>
        <ConfigProvider locale={zhCN}>
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
