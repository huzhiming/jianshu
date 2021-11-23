import * as constants from './constants';
// import { fromJS } from 'immutable';// immutable 创建不可更改的对象
import axios from 'axios';

const changeHomeData = (data)=>({
  type: constants.CHANGE_HOME_DATA,
  ...data
});

export const getlist = () => (dispatch) =>{
  axios.get('/api/home.json')
  .then((res)=>{
    const action = changeHomeData(res.data.data);
    dispatch(action);
  });
}

const addHomeList = (list,nextPage)=>({
  type: constants.ADD_ARTICLE_LIST,
  list,
  nextPage
})

export const getMoreList = (page)=>{
  return (dispatch) =>{
    axios.get('/api/homeList.json?page='+page)
    .then((res)=>{
      const result = res.data.data;
      dispatch(addHomeList(result,page+1));
    });
  }
}

export const toggleTopShow = (show)=>({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})

// 单独抽成文件，增加代码可维护性，对自动化测试有利
export const mouseEnter = ()=>({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = ()=>({
  type: constants.MOUSE_LEAVE
});
