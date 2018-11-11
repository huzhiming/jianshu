import React from 'react';
import ReactDOM from 'react-dom';
import { Globalstyle } from './style'//全局样式文件
import App from './App';


ReactDOM.render(
  <React.Fragment>
    <App />
    <Globalstyle/>
  </React.Fragment>
  , document.getElementById('root')
);
