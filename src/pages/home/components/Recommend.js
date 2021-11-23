import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store'

import {
  RecommendWrapper,
  RecommendItem,
  DownloadWrapper,
  HoverWrapper,
} from '../style'
class Recommend extends PureComponent {
  render() {
    const { handleMouseEnter, handleMouseLeave, list, mouseIn } = this.props;

    return (
      <Fragment>
        <RecommendWrapper>
          {
            list.map((item) => (
              <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
            ))
          }
        </RecommendWrapper>
        <DownloadWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <HoverWrapper show={mouseIn}>
            <img src="./images/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" className="qrcode"/>
          </HoverWrapper>
          <img src="./images/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" className="qrcode"/>
          <div className="info">
            <div className="title">下载简书手机App ></div>
            <div className="desc">随时随地发现和创作内容</div>
          </div>
        </DownloadWrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = (state)=>({
  list: state.getIn( ['home','recommendList'] ),
  mouseIn: state.getIn( ['home', 'mouseIn'] )
})

const mapDispatchToProps = (dispatch)=>{
  return {
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recommend);