import React, { useEffect , useState } from 'react';
import '../WeatherApp/Weather.css'
import cloudyy from '../Asset/cloudyy.png'
import sunn from '../Asset/sunn.png'
import drizzlee from '../Asset/drizzlee.png'
import rainn from '../Asset/rainn.png'
import snow from '../Asset/snow.png'

import axios from 'axios'
function Weather(props) {

    const [city, setCity] = useState(null)
    const [citycod, setCityCod] = useState(null)


    const [search, setSearch] = useState("Mumbai")
    const [icon, setIcon] = useState(cloudyy)


    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d70183034c9a5266e8824276c4ad2879`)
            .then((res) => {

                setCity(res.data)
                setCityCod(res.data.cod)

                // console.log(city.weather);

                if (city.weather[0].icon === "01d" || city.weather[0].icon === "01n") {
                    setIcon(sunn)
                }
                else if (city.weather[0].icon === "02d" || city.weather[0].icon === "02n") {
                    setIcon(cloudyy)
                }
                else if (city.weather[0].icon === "03d" || city.weather[0].icon === "03n") {
                    setIcon(drizzlee)
                }
                else if (city.weather[0].icon === "04d" || city.weather[0].icon === "04n") {
                    setIcon(drizzlee)
                }
                else if (city.weather[0].icon === "09d" || city.weather[0].icon === "09n") {
                    setIcon(rainn)
                }
                else if (city.weather[0].icon === "10d" || city.weather[0].icon === "10n") {
                    setIcon(rainn)
                }
                else if (city.weather[0].icon === "13d" || city.weather[0].icon === "13n") {
                    setIcon(snow)
                }
                else {
                    setIcon(sunn)
                }

            })
            .catch((err) => {
                // console.log(err);
            })

    }, [search])

    // console.log(citycod);

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="search">
                            <div className="one">
                                <input onChange={(event) => { setSearch(event.target.value) }} type="text" placeholder=' Search' />

                            </div>

                        </div>

                        


                        {
                            !citycod ? (<>
                                <h2 style={{ color: "white ", fontWeight: 900, marginTop: '50px' }}> No Data Found </h2>

                            </>) : (
                                <>
                                    <div className="content">
                                        <div className="imag">
                                            <img src={icon} alt="Loading ..." />
                                        </div>
                                        <div className="celcius">
                                            <h2>{city.main.temp}<sup>0</sup> c</h2>
                                        </div>
                                        <div className="city">
                                            <h2>{city.name}</h2>
                                        </div>
                                    </div>

                                    <div className="last">
                                        <div className="element">
                                            <span className="material-symbols-outlined">
                                                humidity_percentage
                                            </span>
                                            <div className="data">
                                                <h6>{city.main.humidity}%</h6>
                                                <h6 className='lastname'>Humidity</h6>
                                            </div>
                                        </div>
                                        <div className="element">
                                            <span className="material-symbols-outlined">
                                                air
                                            </span>
                                            <div className="data">
                                                <h6>{city.wind.speed} km/h</h6>
                                                <h6 className='lastname'>wind speed</h6>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )

                        }


                    </div>
                </div>


            </div>
        </div>
    );
}

export default Weather;