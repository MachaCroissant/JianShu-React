import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyled from './style'
import './statics/iconfont/iconfont.css'
import { Provider } from 'react-redux'
import store from './store/store'

const Index = <>
  <GlobalStyled />
  <Provider store={store}>
    <App />
  </Provider>
  
</>

ReactDOM.render(Index, document.getElementById('root'))