import React from 'react'
import './WeatherCard.css'
import { getOutfit } from '../utils/outfit.js'

const WeatherCard = ({ weather }) => {

    if (!weather || !weather.main || !weather.weather?.length || !weather.wind)
        return null

    const { name, cityName, main, wind, weather: info } = weather

    const displayName = cityName ?? name

    const { temp, feels_like, humidity } = main

    const { description, icon } = info[0]

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <div className='card' key={displayName}>
            <h2>{displayName}</h2>

            <div className="img-wrap">
                <img src={iconUrl} alt={description} />
            </div>

            <p className="temp">{Math.round(temp)}°</p>

            <p className="desc">{description}</p>

            <div className='outfit'>
                <p>오늘의 옷차림</p>
                <strong>{getOutfit(temp)}</strong>
            </div>

            <div className="meta">
                <div>
                    <span>체감</span>
                    <strong>{Math.round(feels_like)}°</strong>
                </div>

                <div>
                    <span>습도</span>
                    <strong>{humidity}%</strong>
                </div>

                <div>
                    <span>바람</span>
                    <strong>{wind.speed}m/s</strong>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard