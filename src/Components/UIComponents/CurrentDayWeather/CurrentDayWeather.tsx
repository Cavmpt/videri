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
      {month || <RectangularSkeleton />}
      {'Montreal Canada' || <RectangularSkeleton />}
      {icon ? (
        <img
          width='300'
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt='weather-api-icon'
        />
      ) : (
        <RoundSkeleton />
      )}
      {temp}
      {description || <RectangularSkeleton />}
      {high || <RectangularSkeleton />}
      {low || <RectangularSkeleton />}
    </div>
  )
}
