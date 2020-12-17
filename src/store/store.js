import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../features/home/postsSlice'
import usersReducer from '../features/home/usersSlice'
import loginReducer from '../features/login/loginSlice'
import detailReducer from '../features/detail/detailSlice'

export default configureStore({
    reducer: {
        posts: postReducer,
        users: usersReducer,
        login: loginReducer,
        detail: detailReducer
    }
})