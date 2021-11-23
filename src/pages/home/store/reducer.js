import * as constants from './constants'
import { fromJS  } from 'immutable';// immutable 创建不可更改的对象

//immutable对象获取 xx.get('key')  immutable对象设置 xx.set('key','value') xx.merge({})

// 利用 immutable 库创建不可更改的对象（immutable对象）
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],

  articlePage: 1,

  mouseIn: false,
  showScroll: false
});

const change_home_data = (state,action)=>{
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    writerList: fromJS(action.writerList),
  });
}
const add_article_list = (state,action)=>{
  const newList = fromJS(action.list);
  const nextPage = fromJS(action.nextPage);
  return state.merge({
    articleList: state.get('articleList').concat(newList),
    articlePage: nextPage
  });
}

export default (state=defaultState,action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return change_home_data(state,action);
    case constants.ADD_ARTICLE_LIST:
      return add_article_list(state,action);
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll',action.show)
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    default:
      return state;
  }
}
