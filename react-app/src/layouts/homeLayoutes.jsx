import React from 'react'
import NowCard from '../components/nowCard/NowCard'
import SearchBar from '../components/searchBar/SearchBar'



const HomeLayoutes = () => {
    return (
        <div className='Gbg-night h-[100vh]'>
             <SearchBar/>
            <NowCard/>
        </div>
    )
}

export default HomeLayoutes