import React, { useRef } from 'react'
import { Link ,useNavigate } from 'react-router-dom'


const SearchBar = () => {
    const  nav = useNavigate()
    const sbInput = useRef(null)
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log(sbInput.current.value)
            nav('/?city='+sbInput.current.value);
        }
    }

  return (
    <div className="container  ">
    <div className="flex justify-center pt-10">
        <label className="relative block w-[80%] sm:w-[70%] md:w-[60%] ">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </svg>
            </span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-blue w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter the city name ..." type="text" name="search" ref={sbInput} onKeyDown={handleKeyDown} />
        </label>
    </div>
</div>
  )
}

export default SearchBar