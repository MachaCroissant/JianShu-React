import React from 'react'
// import { CSSTransition } from 'react-transition-group'
import{ useSelector, useDispatch } from 'react-redux'
import { selectLoginornotState, changetoLogout } from '../../features/login/loginSlice'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchInput,
  Addition,
  Button,
  NavSearch,
  StyledLink
} from './style.js'

export const HeadBar = () =>{
  const loginstate = useSelector(selectLoginornotState)
  const dispatch = useDispatch()
  

  const loginoption = 
    loginstate ? (<StyledLink to="/">
    <NavItem className="right" onClick={dispatch(changetoLogout)}>
    退出
    </NavItem> </StyledLink>) : (<StyledLink to="/login">
    <NavItem className="right">登陆</NavItem> </StyledLink>
    )
    

    const searchoption = 
    <NavSearch>
    <SearchInput> 
    </SearchInput>
    <span className="iconfont icon-search"></span>
    </NavSearch>


return (
  <HeaderWrapper>
          <Logo />
          
          <Nav>
            <StyledLink to='/'><NavItem className="left active">首页</NavItem></StyledLink>
            <StyledLink to='/login'><NavItem className="left">下载App</NavItem></StyledLink>
            {searchoption}
            {loginoption}
          </Nav>

          <Addition>
              <Button className="writting">
              <span className="iconfont icon-Pensyumaobi"></span>
              写文章</Button>
              <Button className="reg">注册</Button>
          </Addition>

        </HeaderWrapper>
  )

}
