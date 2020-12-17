import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const HeaderWrapper = styled.div`
width: 100%;
z-index: 5;
position: relative;
height: 56px;
border-bottom: 1px solid #f0f0f0;
display: flex;
align-items: center;
box-sizing: border-box;
`

export const Logo = styled.div`
position: absolute;
top:0;
left:0;
display: block;
width: 100px;
height: 56px;
background: url(${logoPic}) no-repeat;
background-size: contain; 
/* 让图片填充满整个容器 */
`

export const Nav = styled.div`
width: 80%;
padding-right: 70px;
box-sizing: border-box;
margin: 2px 30px 2px 110px;
height: 100%;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 12px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
    position: absolute;
    top: auto;
    bottom: auto;
    left: auto;
    right: 250px;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const NavSearch = styled.div`
  float: left;
  position: absolute;
  top: auto;
  bottom: auto;
  left: 260px;
  right: auto;
  width: 190px;
  margin-left: 20px;
  background: #eee;
  border-radius: 20px;
  margin: 8px 0 8px 0;

  .icon-search {
    cursor: pointer;
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 35px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background-color: #969696;
    }
  }
  
`

export const SearchInput = styled.input.attrs({
  placeholder: '搜索'
})`
height: 38px;
margin-left: 15px;
color: #777;
/* 这部分去掉input元素在浏览器中的默认样式 */
    outline: none;
    border: none;
    background: none;
  
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  /*动画*/
  &.slide-enter {
    transition: all 0.2s ease-in;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-in;
  }
  &.slide-exit-active {
    width: 160px;
  }
`




export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  cursor: pointer;
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  padding: 0px 20px;
  &.reg {
    color: #ec6149;
    background-color: white;
  }
  &.writting {
    color: #fff;
    background-color: #ec6149;
  }
  .icon-Pensyumaobi{
    margin-right: 5px;
    font-size: 20px;
    vertical-align: middle;
  }
`

// export const Icon = styled.span`
// &.write-icon{
//     ::before{
//         content: "✍︎";
//         margin-right: 3px;
//     }
// }

// &.search-icon{
//     ::after{
//         content: "⌕";
//         margin: auto;
//     }
// }
// `


