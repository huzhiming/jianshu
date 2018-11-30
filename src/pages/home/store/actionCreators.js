import * as constants from './constants';
// import { fromJS } from 'immutable';// immutable 创建不可更改的对象
// import axios from 'axios';

// 单独抽成文件，增加代码可维护性，对自动化测试有利
export const mouseEnter = ()=>({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = ()=>({
  type: constants.MOUSE_LEAVE
});
