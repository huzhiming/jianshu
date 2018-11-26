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
    const { focused, list } = this.props;
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              list.map((item)=>{
                return (
                  <SearchInfoItem key={item}>{item}</SearchInfoItem>
                )
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render(){
    const { focused,handleInputFocus, handleInputBlur } = this.props;
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
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i 
                className={focused?'focused iconfont':'iconfont'}
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
    list: state.getIn(['header','list'])
  }
}

const mapDispathToProps = (dispath)=>{
  return {
    handleInputFocus() {
      dispath(actionCreators.getlist());
      dispath(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispath(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);
