import React, { useEffect } from 'react'
import {StyledLink, ListWrapper, ListItem, ListInfo, MetaData, ImgWrapper, LoadMore} from '../style'
// import { Link } from 'react-router-dom'
import { fetchPosts, selectPostsById, selectAllPosts } from '../postsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { fecthDetail } from '../../detail/detailSlice'



let PostExcerpt = ( {postId} ) => {
    const post = useSelector( (state) => selectPostsById(state, postId))
    const randomnum1 = Math.round(Math.random()*100)
    const randomnum2 = Math.round(Math.random()*50)
    const randomnum3 = Math.round(Math.random()*300)
    return (
        <ListItem key={post.id}>
            <ListInfo>
            <StyledLink to={`/detail/${post.id}`} className="title">{post.title}</StyledLink>
            <p className="description">{post.desc}</p>

            <MetaData>
            <span className="iconfont icon-zuanshi">{randomnum1}</span>
            <span className="author">{post.author}</span>
            <span className="iconfont icon-pinglun">{randomnum2}</span>
            <span className="iconfont icon-aixin">{randomnum3}</span>
            </MetaData>
            </ListInfo>

            
            
            <ImgWrapper>
            <img alt="img" src="https://upload.jianshu.io/users/upload_avatars/6652326/498e86b9-7067-4e96-b5f2-6438089e2da1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
            </ImgWrapper>

        </ListItem>
        
    )
}

PostExcerpt = React.memo(PostExcerpt)

export const PostList = () => {
    const dispatch = useDispatch()
    const selectedposts = useSelector(selectAllPosts)
    
    useEffect( () => {
        dispatch(fetchPosts())
        dispatch(fecthDetail())
    }, [dispatch])

    


    return (
        <ListWrapper>
        {selectedposts.map( (item) => (
        <PostExcerpt key={item.id} postId={item.id} />))}
        <LoadMore onClick={() => dispatch(fetchPosts())}>更多文字</LoadMore>
        </ListWrapper>
        
    )
}    

