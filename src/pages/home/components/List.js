import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import {
  ListItem,
  ListInfo,
} from '../style'

class List extends Component {
  render() {
    const { list } = this.props;

    return (
      <Fragment>
        {
          list.map((item)=>(
            <ListItem key={item.get('id')}>
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
          ))
        }
      </Fragment>
    )
  }
}

const mapStateToProps = ( state ) => ( {
  list: state.getIn( ['home', 'articleList'] )
});

const mapDispatchToProps = (dispatch)=>({

})

export default connect(mapStateToProps, mapDispatchToProps)(List);