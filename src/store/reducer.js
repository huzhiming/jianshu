// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable';// 用于生成immutable对象，不可更改的对象
import { reducer as headerReducer } from '../common/header/store';
import { reducer as HomeReducer } from '../pages/home/store';

// 使用combineReducers 方法整合模块store数据并导出
const reducer = combineReducers({
  header: headerReducer,
  home: HomeReducer,
});

export default reducer;
