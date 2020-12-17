import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'
// import { actionCreators } from './store'
import {DownBanner} from './components/download'
import {Logo} from './components/logo'
import {TryToLogin} from './components/form'
import {Wrapper} from './style.js'



export const Login = () => {
    return(
        <Wrapper>
        <Logo />
        <DownBanner />
        <TryToLogin />
        </Wrapper>
    )
}

