import * as constants from './constants'
import { fromJS } from 'immutable';// immutable 创建不可更改的对象

//immutable对象获取 xx.get('key')  immutable对象设置 xx.set('key','value')

// 利用 immutable 库创建不可更改的对象（immutable对象）
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state=defaultState,action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      // 结合之前的数据，生成新的数据
      return state.set('focused',true);
    case constants.SEARCH_BLUR:
      return state.set('focused',false);
    case constants.CHANGE_LIST:
      // action.data 是一个immutable 对象，不可更改。
      // return state.set('list',action.data).set('totalPage',action.totalPage);
      return state.merge({ // 优化：修改多个数据用merge 方法
        list: action.data,
        totalPage: action.totalPage
      });
    case constants.MOUSE_ENTER:
      return state.set('mouseIn',true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn',false);
    case constants.CHANGE_PAGE:
      return state.set('page',action.page);
    default:
      return state;
  }
}
