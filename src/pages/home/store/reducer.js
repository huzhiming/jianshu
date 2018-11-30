import * as constants from './constants'
import { fromJS } from 'immutable';// immutable 创建不可更改的对象

//immutable对象获取 xx.get('key')  immutable对象设置 xx.set('key','value') xx.merge({})

// 利用 immutable 库创建不可更改的对象（immutable对象）
const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },{
    id: 2,
    title: '手绘',
    imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }],

  articleList: [{
    id: 1,
    title: '短片|AV如何摧残大脑 ？蠢到极点的人才会争先恐后地进“坑”！',
    desc: '我是一个沉迷于色情电影和手淫长达十五年的人。对于色情电影的危害，我实在是清楚不过了。下面我就以自己的亲身经历为大家说说色情电影的危害。 一种东西...',
    imgUrl: '//upload-images.jianshu.io/upload_images/12856863-6abe0e8d27b19e0a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 2,
    title: '短片|AV如何摧残大脑 ？蠢到极点的人才会争先恐后地进“坑”！',
    desc: '我是一个沉迷于色情电影和手淫长达十五年的人。对于色情电影的危害，我实在是清楚不过了。下面我就以自己的亲身经历为大家说说色情电影的危害。 一种东西...',
    imgUrl: '//upload-images.jianshu.io/upload_images/12856863-6abe0e8d27b19e0a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 3,
    title: '短片|AV如何摧残大脑 ？蠢到极点的人才会争先恐后地进“坑”！',
    desc: '我是一个沉迷于色情电影和手淫长达十五年的人。对于色情电影的危害，我实在是清楚不过了。下面我就以自己的亲身经历为大家说说色情电影的危害。 一种东西...',
    imgUrl: '//upload-images.jianshu.io/upload_images/12856863-6abe0e8d27b19e0a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },],

  mouseIn: false,
});

export default (state=defaultState,action) => {
  switch (action.type) {
    case constants.MOUSE_ENTER:
      return state.set('mouseIn',true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn',false);
    default:
      return state;
  }
}
