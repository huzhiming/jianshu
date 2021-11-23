import * as constants from './constants';
import { fromJS } from 'immutable';// immutable 创建不可更改的对象
import axios from 'axios';
const changeList = (data)=>({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

// 单独抽成文件，增加代码可维护性，对自动化测试有利
export const searchFocus = ()=>({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = ()=>({
  type: constants.SEARCH_BLUR
});

export const mouseEnter = ()=>({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = ()=>({
  type: constants.MOUSE_LEAVE
});
export const changePage = (page)=>({
  type: constants.CHANGE_PAGE,
  page
});

// 获取热门搜索列表
export const getlist = ()=>{
  // 写异步请求，获取数据
  return (dispatch) =>{
    //https://www.jianshu.com/trending_search
    axios.get('/api/headerList.json').then((res)=>{
      const data = res.data;
      const action = changeList(data.data)
      dispatch(action);
    }).catch((error)=>{
      console.log(error);
    });
  }
}