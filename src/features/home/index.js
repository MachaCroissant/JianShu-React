import React from 'react'
import {PostList} from './components/List'
import {Recommend} from './components/Recommend'
import {Author} from './components/Authors'
import {Urcode} from './components/Urcode'
import { HomeWrapper, HomeLeft, HomeRight } from './style.js'

export const Home = () => {
    return(
        <HomeWrapper>
        <HomeLeft>
            <PostList />
        </HomeLeft>
    
        <HomeRight>
            <Recommend />
            <Urcode />
            <Author />
        </HomeRight>
        </HomeWrapper>
    )
}


// class Home extends Component {
//     render(){
//         return(
//             <HomeWrapper>
//             <HomeLeft>
//                 {PostList}
//             </HomeLeft>
                
//             <HomeRight>
//                 <Recommend />
//                 <Urcode />
//                 {Author}
//             </HomeRight>
//             </HomeWrapper>
//         )
//     }
// }


// export default Home