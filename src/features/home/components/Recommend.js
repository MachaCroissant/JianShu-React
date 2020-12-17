import React, { Component } from 'react' 
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  RecommendWrapper,
  RecommendItem,
  StyledLink
} from '../style.js'


export const Recommend = () => {
    return(
        <RecommendWrapper>
            <StyledLink to='/'><RecommendItem className="recommend1"></RecommendItem></StyledLink>
            <StyledLink to='/'><RecommendItem className="recommend2"></RecommendItem></StyledLink>
            <StyledLink to='/'><RecommendItem className="recommend3"></RecommendItem></StyledLink>
            <StyledLink to='/'><RecommendItem className="recommend4"></RecommendItem></StyledLink>
        </RecommendWrapper>
    )
}