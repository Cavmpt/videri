import React, {useEffect, useContext} from 'react'
import {Context, ContextType} from '../../../Store/Provider'

import * as weather from '../../../Store/weather.json'

import './WeatherPage.scss'

import CurrentDayWeather from '../../UIComponents/CurrentDayWeather/CurrentDayWeather'
import Calendar from '../../UIComponents/WeatherCalendar/Calendar'

export interface IWeatherPageProps {
  placeholder?: null
}

export default function WeatherPage(props: IWeatherPageProps) {
  const context = useContext<ContextType>(Context)
  const {
    setCurrentWeather,
    setMinutelyWeather,
    setHourlyWeather,
    setDailyWeather,
    setAlerts,
    setDataLoaded,
    currentWeather,
    minutelyWeather,
    hourlyWeather,
    dailyWeather,
  } = context

  useEffect(() => {
    const position: {longitude: number; latitude: number} = {
      longitude: -73.5878,
      latitude: 45.5088,
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${position.latitude}&lon=${position.longitude}&appid=9cc3ca3454531f738c3475222d920881`,
    )
      .then(response => response.json())
      .then(async data => {
        const setData = () => {
          setCurrentWeather(data.current)
          setMinutelyWeather(data.minutely)
          setDailyWeather(data.daily)
          setHourlyWeather(data.hourly)
          setAlerts(data.alerts)
        }
        const hasDataHasBeenSet = () => {
          if (
            currentWeather !== undefined &&
            minutelyWeather !== undefined &&
            hourlyWeather !== undefined &&
            dailyWeather !== undefined
          ) {
            setDataLoaded(true)
          }
        }
        await setData()
        await hasDataHasBeenSet()
      })
    // }
    // const fetchData = async () => {
    //   await setCurrentWeather(weather.current)
    //   await console.log('weather:', currentWeather)
    //   setMinutelyWeather(weather.minutely)
    //   setDailyWeather(weather.daily)
    //   setHourlyWeather(weather.hourly)
    // }
    // fetchData()
  }, [
    setCurrentWeather,
    setMinutelyWeather,
    setDailyWeather,
    setHourlyWeather,
    setAlerts,
  ])

  return (
    <div className='weather-page'>
      <CurrentDayWeather />
      <Calendar />
    </div>
  )
}
