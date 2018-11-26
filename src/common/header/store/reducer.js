import * as constants from './constants'
import { fromJS } from 'immutable';// immutable 创建不可更改的对象

//immutable对象获取 xx.get('key')  immutable对象设置 xx.set('key','value')

// 利用 immutable 库创建不可更改的对象（immutable对象）
const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state=defaultState,action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      // 结合之前的数据，生成新的数据
      return state.set('focused',true);
    case constants.SEARCH_BLUR:
      return state.set('focused',true);
    case constants.CHANGE_LIST:
      // action.data 是一个immutable 对象，不可更改。
      return state.set('list',action.data);
    default:
      return state;
  }
}
