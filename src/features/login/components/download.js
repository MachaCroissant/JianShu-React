import React from 'react'
import { DiyButton, SignInLeft, Qr } from '../style'


export const DownBanner = () => {
    return (
        <SignInLeft>
            <DiyButton className="download">下载简书APP</DiyButton>
            <Qr></Qr>
        </SignInLeft>
    )
}