import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'

import { 
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoList,
  SearchInfoItem,
  SearchInfoSwitch,
  Addition,
  Button
} from './style';

// react 普通组件
class Header extends Component {

  getListArea = ()=>{
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let index = (page - 1) * 10 ; index < page * 10; index++) {
        pageList.push(
          <SearchInfoItem key={newList[index]}>{newList[index]}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={()=>{handleChangePage(page,totalPage,this.spinIcon)}}>
              <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render(){
    const { focused,handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <Fragment>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登陆</NavItem>
            <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch 
                  className={focused?'focused':''}
                  onFocus={()=>handleInputFocus(list)}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i 
                className={focused?'focused iconfont zoom':'iconfont zoom'}
              >&#xe60c;</i>
              { this.getListArea(this.props) }
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className="writting"><i className="iconfont">&#xe615;</i>写文章</Button>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </Fragment>
    )
  }
}

// Header 是一个无状态组件 ui组件
// const Header = (props)=> {
//   return (
//     <Fragment>
//       <HeaderWrapper>
//         <Logo />
//         <Nav>
//           <NavItem className="left active">首页</NavItem>
//           <NavItem className="left">下载App</NavItem>
//           <NavItem className="right">登陆</NavItem>
//           <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
//           <SearchWrapper>
//             <CSSTransition
//               in={props.focused}
//               timeout={200}
//               classNames="slide"
//             >
//               <NavSearch 
//                 className={props.focused?'focused':''}
//                 onFocus={props.handleInputFocus}
//                 onBlur={props.handleInputBlur}
//               ></NavSearch>
//             </CSSTransition>
//             <i 
//               className={props.focused?'focused iconfont':'iconfont'}
//             >&#xe60c;</i>
//             { getListArea(props.focused) }
//           </SearchWrapper>
//         </Nav>
//         <Addition>
//           <Button className="writting"><i className="iconfont">&#xe615;</i>写文章</Button>
//           <Button className="reg">注册</Button>
//         </Addition>
//       </HeaderWrapper>
//     </Fragment>
//   )
// }

const mapStateToProps = (state)=>{
  return {
    // focused: state.getIn(['header','focused'])
    focused: state.get('header').get('focused'),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn']),
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    handleInputFocus(list) {
      list.size===0&&dispatch(actionCreators.getlist());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
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

export default connect(mapStateToProps,mapDispatchToProps)(Header);
