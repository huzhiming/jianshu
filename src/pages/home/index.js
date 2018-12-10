import React, { Component, Fragment} from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';
import axios from 'axios';
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
            <img className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4552/532152a690ad5a98d1c22eb48a316ca7ff428970.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='banner'/>
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
        </HomeWrapper>
      </Fragment> 
    )
  }

  componentDidMount() {
    axios.get('/api/home.json')
    .then((res)=>{
      const result = res.data.data;
      const action = { type: 'change_home_data', ...result };
      console.log(action);
      
      this.props.changeHomeData( action );
    });
  }
}


const mapDispatch = (dispatch)=>({
  changeHomeData(action) {
    dispatch( action );
  }
});

export default connect( null, mapDispatch )(Home);