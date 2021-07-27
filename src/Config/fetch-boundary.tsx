import React,{useContext, useEffect} from 'react';
import {Context, ContextType} from '../Store/Provider'
import * as weather from '../Store/weather.json'

export interface IFetchBoundaryProps {
  children: React.ReactNode
}

export default function FetchBoundary (props: IFetchBoundaryProps) {
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
        console.log('data:',data)
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

  const {children}=props
  return (
    <div>
      {children}
    </div>
  );
}
