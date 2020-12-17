import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = []

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, thunkAPI) => {
    try{
        const response = await axios.get('/api/homeList.json')
        console.log(response.data.data)
        return await response.data.data;
    }catch(error){
        return thunkAPI.rejectWithValue({error: error.message})
    }
})


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, action) => {
            const result = state.concat(action.payload)
            return result
        }
    }
})

export default postsSlice.reducer

export const selectPostsById = (state, id) => state.posts.find(post => post.id === id)

export const selectAllPosts = state => state.posts