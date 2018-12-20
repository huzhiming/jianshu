import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store'
import {
  ListItem,
  ListInfo,
  LoadMore,
} from '../style'

class List extends Component {
  render() {
    const { list, articlePage, getMoreList } = this.props;

    return (
      <Fragment>
        {
          list.map((item,index)=>(
            <Link key={index} to='/detail'>
              <ListItem key={index}>
                <img className="list-pic" src={item.get('imgUrl')} alt='240' />
                <ListInfo>
                  <h3 className="title">{`${ item.get('id') } : ${ item.get('title') }`}</h3>
                  <p className="desc">{item.get('desc')}</p>
                  <div className="meta">
                    <a href="/u/001">胡志明</a>
                    <a href="/p/0ffaac4cdfd0#comments"><i className="iconfont"></i>32</a>
                    <span><i className="iconfont"></i>58</span>
                  </div>
                </ListInfo>
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={()=>getMoreList(articlePage)}>更多文字</LoadMore>
      </Fragment>
    )
  }
}

const mapStateToProps = ( state ) => ( {
  list: state.getIn( ['home', 'articleList'] ),
  articlePage: state.getIn( ['home', 'articlePage'] ),
});

const mapDispatchToProps = (dispatch)=>({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);