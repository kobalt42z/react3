import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import loading from './loading.svg'



const NowCard = () => {

    const [Wicon, setWicon] = useState("http://openweathermap.org/img/wn/01d@2x.png");
    const [Temp, setTemp] = useState(26)
    const [City, setCity] = useState("tel-aviv")
    const [Wtitle, setWtitle] = useState("sunny");
    const [RealFealing, setRealFealing] = useState(25);
    const [Wtime, setWtime] = useState("none");
    const [Pressure, setPressure] = useState(1003)
    const [Humidity, setHumidity] = useState(89)
    const [Visibility, setVisibility] = useState(10)
    const [WindSpeed, setWindSpeed] = useState(4.36)
    const [WindDeg, setWindDeg] = useState(42)
    const [Clouds, setClouds] = useState(100)
    const [TempMin, setTempMin] = useState(25)
    const [TempMax, setTempMax] = useState(26)
    const [data, setData] = useState('')

    const [query] = useSearchParams()
    function getCurrentTime() {
        return new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false })
    }

    const display = (data) => {
        let temp = Math.floor(data.main.temp);
        setTemp(temp);
        temp = Math.floor(data.main.feels_like);
        setRealFealing(temp)
        setCity(data.name)
        setWtitle(data.weather[0].description)
        fetchIcons(data.weather[0].icon); //build link and set icon directly 
        setWtime(calcTime(data.timezone))
        setPressure(data.main.pressure)
        setHumidity(data.main.humidity)
        setVisibility(data.visibility)
        setWindSpeed(data.wind.speed)
        setWindDeg(data.wind.deg)
        setClouds(data.clouds.all)
        setTempMax(data.main.temp_max)
        setTempMin(data.main.temp_min)
        console.log("suceess");
    }

    const doApi = async () => {
        // setLoading(true)
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${query.get('city') || "paris"}&appid=717509d6f99322934f820c3bf1797d7f&units=metric`
        const { data } = await axios(url);
        // const obj = {
        //     location: {
        //         city: data.name,
        //         country: data.sys.country,
        //         sunrise: data.sys.sunrise,
        //         sunset: data.sys.sunset
        //     },
        //     weather: {
        //         temp: data.main.temp,
        //         humidity: data.main.humidity,
        //         wind: data.wind.speed,
        //         desc: data.weather[0].description
        //     },
        //     coord: {
        //         lon: data.coord.lon,
        //         lat: data.coord.lat
        //     }

        // }
        console.log(data);
        setData(data)
        display(data)

        // setLoading(false)
    }



    const isDay = (time) => {
        if (time > 6 && time < 18) {
            document.body.className = "Gbg"
        }
        else {
            document.body.className = "Gbg-night"
        }

    }




    const calcTime = (offset) => {

        offset = (offset / 60) / 60
        // create Date object for current location
        let d = new Date();
        // convert to msec
        // add local time zone offset
        // get UTC time in msec
        let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        // create new Date object for different city
        // using supplied offset
        let nd = new Date(utc + (3600000 * offset));
        // return time as a string
        // const output =  nd.getHours() + ":" + nd.getMinutes();
        isDay(nd.getHours())
        const output = nd.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false })
        // set the value of the time 
        return output;
    }

    const fetchIcons = async (IconCode) => {
        const url = `http://openweathermap.org/img/wn/${IconCode}@2x.png`
        setWicon(url)



    }

    useEffect(() => {
        // fetchIcons("02n");
        calcTime(3200)
        // isDay(Wtime)

        // setData(bringWeather("paris"))
        console.log(data);
        console.log(query.get('city'));
        doApi();
    }, [query]);

    // fetchIcons("01d")
    return (
        <div className='container mt-10 w-[100%]  text-white h-[110vh] sm:h-[80vh]'>
            <div className="flex justify-center">
                <div className="tempCard grid   bg-gray-800 p-5 rounded-xl 
                w-[95%]
                lg:w-[75%] lg:grid-cols-2 grid-rows-2 
                xl:w-[70%] xl:grid-cols-2  
                md:w-[80%] md:grid-cols-2 
                sm:w-[90%] sm:grid-cols-1 gap-8  ">
                    {/* top part of card */}
                    {/* <div className="flex flex-row"> */}
                    {/* left part */}
                    <div className=" ">
                        <h4 className="uppercase font-bold text-[27px] text-cyan-50 text-start">{City}</h4>
                        <div className="flex flex-row">
                            <img src={Wicon} alt="weather logo" />
                            <h3 className='pl-5 text-[70px]  text-cyan-100'><span>{Temp}</span>°c</h3>
                        </div>
                        <h5 className='text-[30px] text-cyan-50'>{Wtitle}</h5>
                    </div>
                    {/* right part */}
                    <div className=" text-left text-cyan-50 ">
                        <h3 className='text-[30px]'>Real Feel <span className='text-cyan-100'>{RealFealing}</span>°</h3>
                        <p className='underline underline-offset-1 
                            text-[15px]
                            '>pleasant</p>

                        <h3 className='text-[30px] mt-10'> Local Time <span className='text-cyan-100'>{Wtime}</span></h3>
                        <p className='underline underline-offset-1 
                            text-[15px]
                            '>pleasant</p>

                    </div>


                    {/* </div> */}
                    {/* down part   */}
                    {/* <div className='flex flex-row justify-evenly'> */}
                    <div className=" ">
                        <ul className='list-none lis'>
                            <li className='border-solid 
                                border-b-2 border-gray-50 flex justify-between h-10 '>
                                <h3 className='capitalize text-[20px]'>Pressure :</h3>
                                <p className='capitalize text-[20px] font-semibold'>{Pressure} Mb</p>
                            </li>

                            <li className='border-solid 
                                border-b-2 border-gray-50 flex justify-between h-10 '>
                                <h3 className='capitalize text-[20px]'>Visibility: </h3>
                                <p className='capitalize text-[20px] font-semibold'>{Visibility} Km</p>
                            </li>

                            <li className='border-solid 
                                border-b-2 border-gray-50 flex justify-between h-10 '>
                                <h3 className='capitalize text-[20px]'>Wind Speed :</h3>
                                <p className='capitalize text-[20px] font-semibold'>{WindSpeed} Km/h</p>
                            </li>

                            <li className='border-solid 
                                 border-gray-50 flex justify-between h-10 '>
                                <h3 className='capitalize text-[20px]'>Wind Degree :</h3>
                                <p className='capitalize text-[20px] font-semibold'>{WindDeg} °</p>
                            </li>

                        </ul>
                    </div>

                    <div className=" ">
                        <ul className='list-none lis'>
                            <li className='border-solid 
                                border-b-2 border-gray-50 flex justify-between h-10 '>
                                <h3 className='capitalize text-[20px]'>Humidity:</h3>
                                <p className='capitalize text-[20px] font-semibold'><span>{Humidity}</span>%</p>
                            </li>

                            <li className='border-solid 
                                border-b-2 border-gray-50 flex justify-between h-10 '>
                                <h3 className='capitalize text-[20px]'>Cloud Cover : </h3>
                                <p className='capitalize text-[20px] font-semibold'>{Clouds} %</p>
                            </li>
                            <li className='border-solid 
                                border-b-2 border-gray-50 flex justify-between h-10 '>
                                <h3 className='capitalize text-[20px]'>Temp Min :</h3>
                                <p className='capitalize text-[20px] font-semibold'>{TempMin} °</p>
                            </li>

                            <li className='border-solid 
                                 border-gray-50 flex justify-between h-10 '>
                                <h3 className='capitalize text-[20px]'>Temp Max :</h3>
                                <p className='capitalize text-[20px] font-semibold'>{TempMax} °</p>
                            </li>

                        </ul>
                    </div>

                    {/* </div> */}
                </div>

            </div>
        </div>
    )
}

export default NowCard