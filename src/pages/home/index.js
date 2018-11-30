import React, { Component, Fragment} from 'react';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,

} from './style';


class Home extends Component {
  render(){
    return (
      <Fragment>
        <HomeWrapper>
          <HomeLeft>
          HomeLeft
          </HomeLeft>
          <HomeRight>
          HomeRight
          </HomeRight>
        </HomeWrapper>
      </Fragment> 
    )
  }
}

export default Home;