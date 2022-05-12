import React from 'react'
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'

function Manager() {
    return (
        <>
            <div className='row'>
                <Logo broColor1={"black"} broColor2={"black"}/>
                <Navbar/>
            </div>
        </>
    )
}

export default Manager
