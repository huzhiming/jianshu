import React, { Component, Fragment} from 'react';
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import {
  WriterWrapper,
  SearchInfoTitle,
  SearchInfoSwitch,
  WriterInfoList,
  WriterInfoItem,
  Avatar,
  InfoMoreButtonBlock
} from '../style'

class Writer extends Component {
  render() {
    const { list } = this.props;
    // const newList = list.
    return (
      <Fragment>
        <WriterWrapper>
          <SearchInfoTitle>
            推荐作者
            <SearchInfoSwitch>
              <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批
            </SearchInfoSwitch>
            {/* <SearchInfoSwitch onClick={()=>{handleChangePage(page,totalPage,this.spinIcon)}}>
              <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批
            </SearchInfoSwitch> */}
          </SearchInfoTitle>

          <WriterInfoList>
            {
              list.map((item,index)=>{
                return item.size>5?(
                  <WriterInfoItem key={item.get('id')}>
                    <Avatar src={item.get('imgUrl')}></Avatar>
                    <div className="info">
                      <p className="nickName">
                        {item.get('title')}
                      </p>
                      <p className="count">写了{item.get('wordCount')}字 · {item.get('likeCount')}喜欢</p>
                    </div>
                    <span className="attention">
                      <i className="iconfont"></i>
                      + 关注
                    </span>
                  </WriterInfoItem>
                ): null
              })
            }
          </WriterInfoList>
          <InfoMoreButtonBlock className={list.size>5?'show':''}>
            查看更多 >
          </InfoMoreButtonBlock>
        </WriterWrapper>
      </Fragment>
    )
  }
}
const mapStateToProps = (state)=>({
  list: state.getIn( ['home', 'writerList'] )
});

const mapDispatchToProps = (dispatch)=>{
  return {
    handleChangePage(page,totalPage,spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if (originAngle) {
        originAngle = parseInt(originAngle,10);
      } else {
        originAngle = 0;
      }

      spin.style.transform = `rotate(${originAngle + 360}deg)`;

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page+1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Writer);