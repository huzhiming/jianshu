import * as constants from './constants'
import { fromJS } from 'immutable';// immutable 创建不可更改的对象

//immutable对象获取 xx.get('key')  immutable对象设置 xx.set('key','value')

// 利用 immutable 库创建不可更改的对象（immutable对象）
const defaultState = fromJS({
  focused: false
});

export default (state=defaultState,action) => {
  if (action.type===constants.SEARCH_FOCUS) {
    // 结合之前的数据，生成新的数据
    return state.set('focused',true);
  }
  if (action.type===constants.SEARCH_BLUR) {
    return state.set('focused',false);
  }
  return state;
}
