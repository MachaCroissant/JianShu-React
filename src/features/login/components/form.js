import {SignInConent, SignInForm, SignInRight, SignInTitle, SignInput, RememberMe, HaveProblem, OtherwayContent, OtherwayHeader, DiyButton} from '../style'
import React, { useState } from 'react'
import axios from 'axios'
import {changetoLogin, selectLoginornotState} from '../loginSlice'
import{useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'

export const TryToLogin = () => {
// React组件必须要大写否则hooks都不能被使用
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')
    const [remberMe, setRemberMe] = useState('true')

    
    const onUsernameChanged = e => setUsername(e.target.value)
    const onPwdChanged = e => setPwd(e.target.value)
    const onCheckboxClicked = e => setRemberMe(!remberMe)
    
    const dispatch = useDispatch()

    const canSave = [username, pwd].every(Boolean)

    const onloginButtonClicked = () => {
        if(canSave){
            axios
            .get('http://localhost:3001/api/login.json')
            .then(response => {
            const result = response.data.data
            console.log(result)
            dispatch(changetoLogin({loginornot: result, username: username, userpwd: pwd}))
        })
            
        }
    }

    let loginornot = useSelector(selectLoginornotState)
    console.log("login or not state " + loginornot)
    let content = <SignInRight>
    <SignInTitle>
    {/* <Link to="/" className="active">登陆</Link> */}
    <a className="active" href="/">登录</a>
    <span>·</span>
    <a href="/">注册</a>
    {/* <Link to="/"></Link> */}
    

    </SignInTitle>

    <SignInForm>

        <SignInConent>
        <span className="iconfont icon-denglu"></span>
        
        <SignInput 
        className="username" 
        placeholder="手机号或邮箱" 
        type="text" name="name" 
        value={username}
        onChange={onUsernameChanged}>
        </SignInput>
        </SignInConent>

        <SignInConent>
        <span className="iconfont icon-denglumima"></span>
        <SignInput 
        className="password" 
        placeholder="密码" 
        type="password" 
        name="psw"
        value={pwd}
        onChange={onPwdChanged}></SignInput>
        </SignInConent>

        <RememberMe>
        <input type="checkbox" value="true" checked="checked" onChange={onCheckboxClicked}></input>
        记住我
        </RememberMe>

        <HaveProblem>登陆遇到问题？</HaveProblem>

        <DiyButton 
        className="login" 
        onClick={onloginButtonClicked}>
        登录
        </DiyButton>

    </SignInForm>

    <OtherwayHeader>
    社交账号登录
    </OtherwayHeader>

    <OtherwayContent>
    <a className="socialmedia" href="/"><span className="iconfont icon-weibo"></span></a>
    <a className="socialmedia" href="/"><span className="iconfont icon-weixin"></span></a>
    <a className="socialmedia" href="/"><span className="iconfont icon-qq"></span></a>
    </OtherwayContent>
</SignInRight>  

    
    return loginornot ? <Redirect to="/" /> : content
}


