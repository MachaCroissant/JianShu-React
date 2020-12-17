import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    loginornot: false,
    username: '',
    userpwd: ''

}



const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        changetoLogin(state, action){
          return action.payload
            
            
        },
        changetoLogout(state, action){
          return ({loginornot: false, username: '', userpwd: ''})
        }

    }
    
})

export default loginSlice.reducer
export const {changetoLogin, changetoLogout} = loginSlice.actions

export const selectLoginornotState = state => state.login.loginornot
