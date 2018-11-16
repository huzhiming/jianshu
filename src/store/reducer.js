// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'// 用于生成immutable对象，不可更改的对象
import { reducer as headerReducer } from '../common/header/store'

// 使用combineReducers 方法整合模块store数据并导出
const reducer = combineReducers({
  header: headerReducer
});

export default reducer;
