import React, { Component } from 'react' 
import {
  UrcodeWrapper,
  UrcodeLeft,
  UrcodeRight,
  StyledLink
} from '../style'

export const Urcode = () => {
    return(
        <UrcodeWrapper>
            <UrcodeLeft>
            </UrcodeLeft>

            <StyledLink to="/login">
            <UrcodeRight>
            <UrcodeRight className="title">
            下载简书手机APP
                
            <span className="iconfont icon-iconfontjiantou5"></span>
            </UrcodeRight>
                
            <UrcodeRight className="description">随时随地发现和创作内容</UrcodeRight>
            </UrcodeRight>
            </StyledLink>
        </UrcodeWrapper>
    )
}

