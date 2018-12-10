import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  TopicWrapper,
  TopicItem
} from '../style'
class Topic extends Component {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item)=>(
            <TopicItem key={item.get('id')}>
              <img className='topic-pic' src={item.get('imgUrl')} alt='64 ' />
              {item.get('title')}
            </TopicItem>
          ))
        }
        <span className='topic-more'>
          更多热门专题 >
        </span>
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.get('home').get('topicList')
  }
};

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(Topic);