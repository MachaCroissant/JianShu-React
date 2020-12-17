import styled from 'styled-components'
import recommendPic1 from '../../statics/img/recommend1.png'
import recommendPic2 from '../../statics/img/recommend2.png'
import recommendPic3 from '../../statics/img/recommend3.png'
import recommendPic4 from '../../statics/img/recommend4.png'
import urCode from '../../statics/urcode.png'
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    display: block;
    color: #0b0b0b;
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    line-height: 1.5;
`;

export const Loader = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 5em;
  height: 5em;
  border-radius: 50%;
  background: var(--redux-color);
  background: -moz-linear-gradient(
    left,
    var(--redux-color) 10%,
    rgba(128, 0, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    var(--redux-color) 10%,
    rgba(128, 0, 255, 0) 42%
  );
  background: -o-linear-gradient(
    left,
    var(--redux-color) 10%,
    rgba(128, 0, 255, 0) 42%
  );
  background: -ms-linear-gradient(
    left,
    var(--redux-color) 10%,
    rgba(128, 0, 255, 0) 42%
  );
  background: linear-gradient(
    to right,
    var(--redux-color) 10%,
    rgba(128, 0, 255, 0) 42%
  );
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
`

export const HomeWrapper = styled.main`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`

export const HomeLeft = styled.div`
flex: 2;

`

export const HomeRight = styled.div`
flex: 1;
padding: 0 0 0 30px;

`

export const ListWrapper = styled.div`
display: flex;
flex-wrap: wrap;
flex-flow: column wrap;
align-items: center;
justify-content: space-around;

padding-inline-start: 120px;
padding-inline-end: 0px;
margin-inline-end: 1em;
margin-block-start: 2em;
box-sizing: border-box;

`
export const ListItem = styled.div`
padding: 15px 2px 20px 0;
margin: 0 0 15px;
box-sizing: border-box;
display: flex;
`

export const ListInfo = styled.div`
padding-right: 20px;

p{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
}

`
export const MetaData = styled.div`
color: #b4b4b4;
font-size: 10px;
cursor: pointer;
line-height: 20px;

.author{
    margin-left: 10px;
    margin-right: 15px;
}
.icon-zuanshi{
    color: #ea6f5a;
    font-size: 12px;
    margin-right: 5px;
    ::before{
        margin-right: 3px;
    }
}

.icon-pinglun{
    font-size: 12px;
    margin-right: 5px;
    ::before{
        margin-right: 3px;
    }
}

.icon-aixin{
    font-size: 12px;
    margin-right: 5px;
    ::before{
        margin-right: 3px;
    }
}

`

export const ImgWrapper = styled.a`
width: 200px;
height: 100px;
cursor: pointer;

/* href: ${props => props.pageUrl} */

img{
width: 100%;
height: 100%;
border-radius: 4px;
border: 1px solid #f0f0f0;
}
`

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    border-radius: 20px;
    text-align: center;
    color: #fff;
    cursor: pointer;
`


export const AuthorHeader = styled.div`
    display: flex;
    font-size: 14px;
    color: #969696;
    width: 280px;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;

.change{
    text-align: right;

    display: inline;
    .icon-qiehuan{
        margin-right: 6px;
        vertical-align: middle;
    }
}
`
export const AuthorWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 280px;
`
export const AuthorContent = styled.div`
display: flex;
flex-direction: column;
width: 280px;
`
export const AuthorItem = styled.div`
display: block;
margin-bottom: 5px;
a{
    width: 48px;
    height: 48px;
    margin-right: 10px;
    display: inline;
    float: left;
}
a img{
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
    cursor: pointer;

}

.name{
    display: inline-block;
    margin-left: 3px;
    font-size: 14px;
    cursor: pointer;
}

.follow{
    display: inline;
    float: right;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;

}
p{
    margin-top: 10px;
    font-size: 12px;
    color: #969696;  
}

`



export const RecommendWrapper = styled.div`
margin: 25px 0;
width: 280px;
min-height: 228px;
display: inline-flex;
flex-direction: column;

`


export const RecommendItem = styled.div`
width: 280px;
height: 50px;
margin-bottom: 6px;
background-repeat: no-repeat;
background-size: contain;
&.recommend1{
background-image: url(${recommendPic1})
}
&.recommend2{
background-image: url(${recommendPic2})
}
&.recommend3{
background-image: url(${recommendPic3})
}
&.recommend4{
background-image: url(${recommendPic4})
}
`



export const UrcodeWrapper = styled.div`
display: flex;
margin-bottom: 30px;
padding: 10px 22px;
width: 280px;
border: 1px solid #f0f0f0;
border-radius: 6px;
background-color: #fff;
box-sizing: border-box;

`

export const UrcodeLeft = styled.div`
width: 70px;
height: 70px;
background-image: url(${urCode});
background-repeat: no-repeat;
background-size: contain;
opacity: .85;

`

export const UrcodeRight = styled.div`
display: block;
margin: auto;

.title{
    font-size: 15px;
    color: #333;
    cursor: pointer;
    margin-bottom: 6px;
    .icon-iconfontjiantou5{
        margin-left: 10px;
        vertical-align: middle;
    }
}
.description{
    margin-top: 4px;
    font-size: 13px;
    color: #999;
}
`

