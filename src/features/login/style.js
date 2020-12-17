import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
import qrCode from '../../statics/urcode.png'
import signinbg from '../../statics/signinbg.png'

export const Wrapper = styled.div`
display: flex;
flex-flow: row nowrap;
box-sizing: border-box;
background-color: #f1f1f1;
min-height: 100vh;

`
export const LogoContainer = styled.div`
    flex: 20%;
    cursor: pointer;
    top: 56px;
    margin-top: 50px;
    margin-left: 50px;

    background-image: url(${logoPic});
    background-repeat: no-repeat;
    width: 200px;
    height: 96px;
    background-size: cover;

`

export const SignInLeft = styled.div`
flex: 20%;
display: flex;
    padding-right: 50px;
    padding-left: 50px;
    margin-right: 30px;
    align-items: flex-end;
    background-image: url(${signinbg});
    background-repeat: no-repeat;
    background-size: contain;
    background-size: 80%;
    background-position: 45px 45px;
    padding-bottom: 120px;
`

export const Qr = styled.div`
width: 46px;
    height: 46px;
    border-radius: 5px;
    background-size: 38px;
    background-image: url(${qrCode});
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #fff;
    cursor: pointer;
`

export const DiyButton = styled.div`
border: none;
border-radius: 30px;
font-size: 18px;
cursor: pointer;
color: #fff;

&.download{
    
    width: 252px;
    height: 46px;
    margin-right: 15px;
    background-color: #ea6f5a;
    font-weight: 500;
    line-height: 46px;
    text-align: center;
    
}

&.login{

    background-color: #3194d0;
    margin-top: 20px;
    padding: 5px 15px;
    margin-top: 20px;
    line-height: 30px;
    text-align: center;
    clear: both;
}

`
export const SignInRight = styled.main`
flex: 40%;
margin: 5% 15% 5% 0;
padding: 40px 40px 20px;
background-color: #fff;
border-radius: 4px;
box-shadow: 0 0 8px rgba(0,0,0,.1);
height: 40vh;
min-height: 400px;
`

export const SignInTitle = styled.div`

text-align: center;
line-height: 48px;
color: #969696;

a.active{
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
}

a{
    padding: 10px;
    color: #969696;
    text-decoration: none;
}
span{
    padding: 10px;
    font-weight: 700;
}

`

export const SignInConent = styled.div`
box-sizing: border-box;
text-align: center;
.iconfont{
        color: #969696;
        font-size: 20px;
        display: inline;
        margin-right: -30px;
        vertical-align: middle;
    }

`

export const SignInForm = styled.div`
    margin-bottom: 30px;
    padding-top: 40px;
    box-sizing: border-box;
    
`

export const SignInput = styled.input`
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    box-sizing: border-box;
    display: inline;

&.username{
    border-bottom: none;
    border-radius: 4px 4px 0 0;
}
&.password{
    border-radius: 0 0 4px 4px;
}

`
export const RememberMe = styled.div`

input{
    margin-right: 5px;
    display: inline-block;
    margin-top: 15px;
}
font-size: 14px;
color: #969696;
display: inline-block;
`

export const HaveProblem = styled.div`
    font-size: 14px;
    color: #969696;
    display: inline-block;
    margin-top: 15px;
    float: right;
    
`
export const OtherwayHeader = styled.span`
    font-size: 12px;
    color: #b5b5b5;
    font-weight: 600;
    text-align: center;
    display: block;
    font-weight: 600;
    padding: 0 0 5px;

::before{
    content: "--------";
    margin-right: 30px;

}

::after{
    content: "--------";
    margin-left: 30px;
}

`

export const OtherwayContent = styled.div`
margin-bottom: 10px;
box-sizing: border-box;
padding: 0px 50px 10px 50px;
display: flex;
justify-content: space-between;
>*{
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-decoration: none;
    text-align: center;
}

.icon-weibo{
    color: #e05244;
    font-size: 28px;
}

.icon-weixin{
    color: #00bb29;
    font-size: 28px;
}

.icon-qq{
    color: #3194ff;
    font-size: 28px;
}
`