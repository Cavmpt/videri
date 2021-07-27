/* eslint-disable @typescript-eslint/naming-convention */
import React, {useContext, useEffect, useState} from 'react'
import {Context, ContextType} from '../../../Store/Provider'

import {
  unixTimestampToDate,
  IDateTimeInterface,
} from '../../../Helpers/dt-to-datetime'
import HighLowTemperature, {
  IHighLowTemperatureInterface,
} from '../../../Helpers/high-low-temperature'

import RoundSkeleton from '../Skeleton/RoundSkeleton/RoundSkeleton'
import RectangularSkeleton from '../Skeleton/RectangularSkeleton/RectangularSkeleton'

import './CurrentDayWeather.scss'

import {IHourlyWeatherInterface} from '../../../Store/Store-types'

export interface ISelectedDayWeatherProps {
  placeholder?: null
}

export default function SelectedDayWeather(props: ISelectedDayWeatherProps) {
  const context = useContext<ContextType>(Context)
  const [loading, setLoading] = useState<boolean>(false)
  const [dateTime, setDateTime] = useState<IDateTimeInterface | undefined>()
  const [HighLowTemp, setHighLowTemp] = useState<
    IHighLowTemperatureInterface | undefined
  >()
  // const [currentLocation, setCurrentLocation] = useState<string>()
  const {currentWeather, hourlyWeather} = context
  const {
    dt,
    sunrise,
    sunset,
    temp,
    feels_like,
    pressure,
    humidity,
    dew_point,
    uvi,
    clouds,
    visibility,
    wind_speed,
    wind_deg,
    weather,
  } = currentWeather || {}

  const {id, main, description, icon} = weather?.[0] || {}
  const {date, hour, min, month, sec, year} = dateTime || {}
  const {high, low} = HighLowTemp || {}

  useEffect(() => {
    if (currentWeather === undefined) {
      setLoading(true)
    } else if (
      currentWeather !== undefined &&
      currentWeather.dt !== undefined
    ) {
      setLoading(false)
      setDateTime(unixTimestampToDate(dt as number))
      if (hourlyWeather !== undefined) {
        setHighLowTemp(
          HighLowTemperature(hourlyWeather as IHourlyWeatherInterface[]),
        )
      }
    }
  }, [currentWeather, dt, hourlyWeather])

  return (
    <div className='current-day-weather'>
      <div className='current-day-weather__daily-logo-wrap'>
        <div className='current-day-weather__daily-logo'>
          {icon ? (
            <img
              width='200'
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt='weather-api-icon'
            />
          ) : (
            <div />
          )}
        </div>
      </div>
      <div className='current-day-weather__description'>
        {description || <RectangularSkeleton height='2rem' width='1rem' />}
      </div>
      <div className='current-day-weather__location-info'>
        {'Montreal Canada' || (
          <RectangularSkeleton height='2rem' width='1rem' />
        )}
        {month || <RectangularSkeleton height='2rem' width='1rem' />}
      </div>
      {temp}
      {high || <RectangularSkeleton height='2rem' width='1rem' />}
      {low || <RectangularSkeleton height='2rem' width='1rem' />}
    </div>
  )
}
