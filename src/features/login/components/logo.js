import React from 'react'
import { LogoContainer } from '../style'
import { Link } from 'react-router-dom'


export const Logo = () => {
    return (
        <Link to='/'>
            <LogoContainer></LogoContainer>
        </Link>
    )
}