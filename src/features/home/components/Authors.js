import React, {useEffect} from 'react'
import { AuthorWrapper, AuthorHeader,AuthorContent, AuthorItem} from '../style'
import { useSelector, useDispatch } from 'react-redux'

import {fetchUsers, selectAllAuthors} from '../usersSlice'

export const Author = () =>{
    const users = useSelector(selectAllAuthors)
    const renderedUsers = users.map( (user, index) => {
        const written = Math.round(Math.random()*10000)+200
        const like = Math.round(Math.random()*10)
        return (
        <AuthorItem key={index}>
        <a href='/'><img alt="图片1" src="https://upload.jianshu.io/users/upload_avatars/6652326/498e86b9-7067-4e96-b5f2-6438089e2da1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" /></a>
            
        <AuthorItem className="name">{user}</AuthorItem>
        <AuthorItem className="follow">+ 关注</AuthorItem>
        <p>写了{written}字 · {like}k喜欢</p>   
        </AuthorItem>
        )
    })
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <AuthorWrapper>
            <AuthorHeader>
            <AuthorHeader className="title">推荐作者</AuthorHeader>
            <AuthorHeader className="change" onClick={() => dispatch(fetchUsers())}> 
            <span className="iconfont icon-qiehuan"></span>
            换一批
            </AuthorHeader>
            </AuthorHeader>

            <AuthorContent>{renderedUsers}</AuthorContent>
        </AuthorWrapper>
    )
}