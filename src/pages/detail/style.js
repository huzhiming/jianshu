import styled from 'styled-components';

export const DetailWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 620px;
  margin: 0 auto;
  padding-bottom: 100px;
  display: flex;
`;
export const NoteSide = styled.div`
  position: fixed;
  right: 50%;
  width: 180px;
  margin-right: -560px;
`

export const Header = styled.h1`
  width: inherit;
  margin-top: 20px;
  line-height: 44px;
  color: #333;
  font-size: 34px;
  font-weight: bold;
`;

export const Author = styled.div`
  margin: 30px 0 40px;
  font-size: 12px;
  .avatar {
    width: 48px;
    height: 48px;
    display: inline-block;
    vertical-align: middle;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const AuthorInfo = styled.div`
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  margin-left: 8px;
  font-size: 12px;
  .name {
    font-size: 16px;
    margin-right: 8px;
    color: #333;
    display: inline-block;
  }
  .follow {
    vertical-align: middle;
    padding: 0 7px 0 5px;
    border: 1px solid #42c02e;
    font-size: 12px;
    border-radius: 12px;
    background: #42c02e;
    color: #fff;
    line-height: 24px;
  }
  .meta {
    margin-top: 8px;
    color: #999;
  }
`;

// export const DetailWrapper = styled.div`

// `;