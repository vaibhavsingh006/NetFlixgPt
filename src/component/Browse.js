import React, { useEffect } from 'react'
import Header from './Header'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firbase'
import { useNavigate } from 'react-router-dom'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {

    const navigate = useNavigate();

    const handelSignOut = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            console.log(error)
        })
    }


    // movies api
    useNowPlayingMovies();



    return (
        <div className=''>
            <div className=' flex justify-between w-full'>
                <Header />
                <button onClick={handelSignOut} className=' cursor-pointer font-bold z-20 text-white mt-8 mr-10 bg-zinc-900 px-5 py-3 w-32 rounded bg-opacity-70'>Sign Out</button>
            </div>
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse