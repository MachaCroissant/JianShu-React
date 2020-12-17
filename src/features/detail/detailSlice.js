import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = []

export const fecthDetail = createAsyncThunk('detail/fetchDetail', async (_, thunkAPI) => {
    try{
        const response = await axios.get('/api/detail.json')
        console.log(response.data.data)
        return await response.data.data

    }catch(error){
        return thunkAPI.rejectWithValue({error: error.message})
    }
})


const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {},
    extraReducers: {
        [fecthDetail.fulfilled]: (state, action) => {
            return action.payload
        }
    }

})

export default detailSlice.reducer

export const selectDetailByID = (state, id) => state.detail.find(detail => detail.id === id)
// 这里一直有一个bug跳转不到正确的页面选择不到正确的内容是因为json数据中的id格式是number，但是通过路由参数得到的id是string
// 如果使用全等类型不匹配，但是使用相等类型就可以加载正确的页面