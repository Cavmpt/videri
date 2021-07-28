/* eslint-disable @typescript-eslint/naming-convention */
import React, {useContext, useEffect, useState} from 'react'
import {Context, ContextType} from '../../../Store/Provider'
import {
  unixTimestampToDate,
  IDateTimeInterface,
} from '../../../Helpers/dt-to-datetime'

import CurrentDayTooltip from './CurrentDayTooltip/CurrentDayTooltip'
import CurrentDayBox from './CurrentDayBox/CurrentDayBox'
import RectangularSkeleton from '../Skeleton/RectangularSkeleton/RectangularSkeleton'
import './CurrentDayWeather.scss'

export interface ISelectedDayWeatherProps {
  placeholder?: null
}

export default function SelectedDayWeather(props: ISelectedDayWeatherProps) {
  const context = useContext<ContextType>(Context)
  const [dateTime, setDateTime] = useState<IDateTimeInterface | undefined>()

  const {currentWeather, hourlyWeather} = context
  const {dt, weather} = currentWeather || {}

  const {description, icon} = weather?.[0] || {}
  const {date, month, year} = dateTime || {}

  useEffect(() => {
    if (currentWeather !== undefined && currentWeather.dt !== undefined) {
      setDateTime(unixTimestampToDate(dt as number))
    }
  }, [currentWeather, dt, hourlyWeather])

  return (
    <div className='current-day-weather'>
      <div className='current-day-weather__description-tooltip-wrap'>
        <div className='current-day-weather__description'>
          {description || <RectangularSkeleton height='1rem' width='8rem' />}
        </div>
        <div className='current-day-weather__tooltip'>
          <CurrentDayTooltip />
        </div>
      </div>
      <div className='current-day-weather__location-info'>
        {currentWeather ? (
          <>{'Montreal, Canada '}</>
        ) : (
          <RectangularSkeleton height='1rem' width='6rem' />
        )}
      </div>
      <div className='current-day-weather__date-info'>
        {currentWeather ? (
          <>
            {`${month} `}
            {`${date} `}
            {`${year} `}
          </>
        ) : (
          <RectangularSkeleton height='1rem' width='12rem' />
        )}
      </div>
      <div className='current-day-weather__daily-logo-wrap'>
        <div className='current-day-weather__daily-logo'>
          {icon ? (
            <img
              width='180'
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt='weather-api-icon'
            />
          ) : (
            <div
              style={{
                marginTop: '1rem',
                height: '200px',
                width: '200px',
                borderRadius: '50%',
              }}
            />
          )}
        </div>
      </div>
      <CurrentDayBox />
    </div>
  )
}
