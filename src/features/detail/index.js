import React from 'react'
import { Wrapper, Title, Content } from './style'
import { useSelector } from 'react-redux'
import { selectDetailByID } from '../detail/detailSlice'
import { HeadBar } from '../../utils/header'

export const Detail = ({ match }) => {
    const { id } = match.params
    const detail = useSelector(state => selectDetailByID(state, id))

    if(!detail){
        return <Title>Post Not Found</Title>
    }
    return(
        <React.Fragment>
        <HeadBar />
        <Wrapper>
        <Title>{detail.title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: detail.desc }} />
        </Wrapper>
        </React.Fragment>
    )
}