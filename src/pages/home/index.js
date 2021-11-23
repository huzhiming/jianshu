// PureComponent 内置了性能调优(shouldComponentUpdate),需配合immutable对象一起使用 利用 immutable 库创建不可更改的对象（immutable对象）
import React, { PureComponent,Fragment} from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';


class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0,0);
  }
  render(){
    return (
      <Fragment>
        <HomeWrapper>
          <HomeLeft>
            <img className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4552/532152a690ad5a98d1c22eb48a316ca7ff428970.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='banner'/>
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
        </HomeWrapper>
        {
          this.props.showScroll?<BackTop onClick={this.handleScrollTop}>返回顶部</BackTop>:null
        }
      </Fragment>
    )
  }

  bindEvents() {
    window.addEventListener('scroll',this.props.changeScrollToShow)
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll',this.props.changeScrollToShow)
  }

}

const mapState = (state)=>({
  showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch)=>({
  changeHomeData() {
    const action = actionCreators.getlist();
    dispatch(action);
  },
  changeScrollToShow(e) {
    if (document.documentElement.scrollTop>400) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect( mapState, mapDispatch )(Home);