import React from 'react'
import Header from './Header'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firbase'
import { useNavigate } from 'react-router-dom'

const Browse = () => {

    const navigate = useNavigate();

    const handelSignOut = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            console.log('error')
        })
    }

    return (
        <div className=''>
            <div className=' flex justify-between w-full'>
                <Header />
                <button onClick={handelSignOut} className=' cursor-pointer font-bold w-full '>Sign Out</button>
            </div>
        </div>
    )
}

export default Browse