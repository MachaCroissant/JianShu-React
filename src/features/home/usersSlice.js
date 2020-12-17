import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = []


export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, thunkAPI) => {
    try{
        const response = await axios.get('/api/authors.json')
        console.log(response.data.data)
        return await response.data.data;
    }catch(error){
        return thunkAPI.rejectWithValue({error: error.message})
    }
})


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            // 洗牌算法
            const result = action.payload
            let n = result.length
            let random
            while(0 !== n ){
                random =  (Math.random() * n--) >>> 0; 
                [result[n], result[random]] = [result[random], result[n]]
            }
            return result.slice(0, 5)
        }
    }

})

export default usersSlice.reducer

export const selectAllAuthors = state => state.users