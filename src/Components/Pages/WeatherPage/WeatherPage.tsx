import React from 'react'

import './WeatherPage.scss'

import CurrentDayWeather from '../../UIComponents/CurrentDayWeather/CurrentDayWeather'
import Calendar from '../../UIComponents/WeatherCalendar/Calendar'

export interface IWeatherPageProps {
  placeholder?: null
}

export default function WeatherPage(props: IWeatherPageProps) {
  return (
    <div className='weather-page'>
      <CurrentDayWeather />
      <Calendar />
    </div>
  )
}
