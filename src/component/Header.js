import React from 'react'
import logo from '../img/logo.png'

const Header = () => {
    return (
        <header className=' w-full'>
            <div className='absolute h-14 z-10 mt-6 ml-6'>
                <img className='w-full h-full' src={logo} alt="logo" />
            </div>
        </header>
    )
}

export default Header