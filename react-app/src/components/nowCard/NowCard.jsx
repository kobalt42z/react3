import React, { useEffect, useState } from 'react'
import axios from 'axios'
import img from './weatherIcon/1.png'
import loading from './loading.svg'


const NowCard = () => {

    const [Wicon, setWicon] = useState(false);

    const fetchIcons = async (IconCode) => {
        const url = `http://openweathermap.org/img/wn/${IconCode}@2x.png`
        setWicon(url)


    }

    useEffect(() => {
        fetchIcons("02n");

    }, []);

    // fetchIcons("01d")
    return (
        <div className='container mt-10'>
            <div className="flex justify-center">
                <div className="tempCard p-5 rounded-xl">
                    {/* top part of card */}
                    <div className="flex flex-row">
                        {/* left part */}
                        <div className="">
                            <h4 className="uppercase font-bold text-[27px] text-cyan-50 text-start">Jerusalem</h4>
                            <div className="flex flex-row">
                                <img src={Wicon} alt="weather logo" />
                                <h3 className='pl-5 text-[70px]  text-cyan-400'><span>25</span>°c</h3>
                            </div>
                            <h5 className='text-[30px] text-cyan-50'>Sunny</h5>
                        </div>
                        {/* right part */}
                        <div className="ml-10 text-start text-cyan-50">
                            <h3 className='text-[30px]'>RealFeel <span className='text-cyan-400'>24</span>°</h3>
                            <p className='underline underline-offset-1 
                            text-[15px]
                            '>pleasant</p>

                            <h3 className='text-[30px] mt-10'>Time <span className='text-cyan-400'>23:50</span></h3>
                            <p className='underline underline-offset-1 
                            text-[15px]
                            '>pleasant</p>

                        </div>


                    </div>
                    {/* down part   */}
                    <div>
                        <div className="mt-10">
                            <ul className='list-none lis'>
                                <li className='border-solid 
                                border-b-2 border-gray-50 p'>ttt</li>
                             
                                <li className='border-solid 
                                border-b-2 border-gray-50 '>ttt</li>
                             
                                <li className='border-solid 
                                border-b-2 border-gray-50 '>ttt</li>
                             
                                <li className=' '>ttt</li>
                             
                            </ul>
                        </div>
                        <div className=""></div>
                    </div>
                </div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default NowCard