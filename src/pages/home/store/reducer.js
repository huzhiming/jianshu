import * as constants from './constants'
import { fromJS } from 'immutable';// immutable 创建不可更改的对象

//immutable对象获取 xx.get('key')  immutable对象设置 xx.set('key','value') xx.merge({})

// 利用 immutable 库创建不可更改的对象（immutable对象）
const defaultState = fromJS({
  topicList: [],

  articleList: [],

  recommendList: [],

  writerList: [],

  mouseIn: false,
});

export default (state=defaultState,action) => {
  switch (action.type) {
    case 'change_home_data':
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList),
      });
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    default:
      return state;
  }
}
