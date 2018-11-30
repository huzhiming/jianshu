import React, { Component, Fragment} from 'react';
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import {
  WriterWrapper,
  SearchInfoTitle,
  SearchInfoSwitch
} from '../style'

class Writer extends Component {
  render() {
    return (
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
      </WriterWrapper>
    )
  }
}
const mapStateToProps = (state)=>{
  return {

  }
}
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