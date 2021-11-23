import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom'

// import { connect } from 'react-redux';
// import { actionCreators } from './store'

import {
  DetailWrapper,
  NoteSide,
  Header,
  Author,
  AuthorInfo
} from './style';

class Detail extends Component {
  render(){
    return (
      <Fragment>
        <DetailWrapper>
          <NoteSide>NoteSide</NoteSide>
          <div className="article">
            <Header>第一次发付费文章，得大于失</Header>
            <Author>
              <Link className="avatar" to="/u/2bc7278ed1e3">
                <img src="//upload.jianshu.io/users/upload_avatars/10232737/d8ae0091-ebb2-44af-8e26-2deaea4765d2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="96"/>
              </Link>
              <AuthorInfo>
                <span className="name">金错刀618</span>
                <i className="iconfont badge-icon"></i>
                <span className="btn btn-success follow">
                  + 关注
                </span>
                <div className="meta">点点滴滴</div>
              </AuthorInfo>
            </Author>
          </div>
        </DetailWrapper>
      </Fragment>
    )
  }
}

export default Detail;