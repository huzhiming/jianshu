import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  margin-left: 15px;
  width: 635px;
  padding-top: 30px;
  .banner-img {
    width: 635px;
    height: 270px;
    border-radius: 4px;
  }
`;
export const HomeRight = styled.div`
  margin-left: 15px;
  width: 280px;
`;


export const TopicWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -18px;
  padding: 20px 0 10px 0;
  font-size: 14px;
  border-bottom: 1px solid #dcdcdc;
  .topic-more {
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    color: #666;
    cursor: pointer;
    &:hover {
      color: #999;
    }
  }
`;
export const TopicItem = styled.div`
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  .topic-pic {
    float: left;
    width: 32px;
    height: 30px;
    margin-right: 10px;
  }
`;
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-pic {
    width: 125px;
    height: 100px;
    float: right;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    margin-bottom: 10px;
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
  .meta {
    font-size: 12px;
    a,span {
      padding-right: 10px;
      text-decoration: none;
      color: #999;
    }
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;



export const RecommendWrapper = styled.div`
  margin: 26px 0 30px;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  background: url(${(props)=>props.imgUrl});
  background-size: contain;
`;

export const DownloadWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 280px;
  height: 82px;
  margin-bottom: 30px;
  padding: 10px 22px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  .qrcode {
    width: 60px;
    height: 60px;
  }
  .info {
    margin-left: 10px;
    font-size: 14px;
    .title {
      font-size: 15px;
      margin-bottom: 10px;
    }
    .desc {
      color: #999;
    }
  }
`;

export const HoverWrapper = styled.div`
  opacity: ${(props)=>(props.show?'1':'0')};
  position: absolute;
  top: -198px;
  z-index: 3;
  width: 184px;
  height: 184px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 4px 14px rgba(0,0,0,.2);
  transition: opacity .5s ease-in-out;
  .qrcode {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
  &:before{
    content:'';
    border-width: 14px 14px 14px 14px;
    border-style:solid;
    border-color: #ddd transparent transparent transparent;

    position:absolute;
    left:40%;
    top:100%;
  }
  &:after{
    content:'';
    background: #fff;
    width: 17px;
    height: 17px;
    transform: rotate(45deg);
    position: absolute;
    left:43%;
    top:95%;
  }
`;

export const WriterWrapper = styled.div`

`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 14px;
  color: #333;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  color: #999;
  cursor: pointer;
  .spin {
    display: inline-block;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center;
  }
`;




export const WriterInfoList = styled.ul`

`;

export const WriterInfoItem = styled.li`
  display: flex;
  align-items: center;
  font-size:14px;
  margin-bottom: 10px;
  .info {
    flex-grow: 1;
    flex-shrink: 1;
    color: #333;
  }
  .nickName {
    margin-bottom: 10px;
  }
  .count {
    font-size: 12px;
    color: #999;
  }
  .attention {
    align-self: flex-start;
    color: #42c02e;
  }
`;

export const Avatar = styled.img.attrs({
  ...(props)=>(props)
})`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  margin-right: 10px;
`;

export const InfoMoreButtonBlock = styled.a`
  display: none;
  width: 280px;
  padding: 7px 7px 7px 12px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  text-align: center;
  font-size: 13px;
  background: #f7f7f7;
  color: #787878;
  &.show {
    display: block;
  }
`;

export const BackTop = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
`;

// export const TopicItem = styled.div``;

// export const TopicItem = styled.div``;

// export const TopicItem = styled.div``;

// export const TopicItem = styled.div``;

// export const TopicItem = styled.div``;

// export const TopicItem = styled.div``;

// export const TopicItem = styled.div``;




