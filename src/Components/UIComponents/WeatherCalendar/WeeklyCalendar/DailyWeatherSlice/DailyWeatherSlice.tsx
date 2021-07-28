/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext} from 'react'
import {Context, ContextType} from '../../../../../Store/Provider'

import {IDateTimeInterface} from '../../../../../Helpers/dt-to-datetime'

import './DailyWeatherSlice.scss'

export interface IDailyWeatherSliceProps {
  currentDate: IDateTimeInterface
  highTemp: number
  lowTemp: number
  pop: number
  icon: string
}

export default function DailyWeatherSlice(props: IDailyWeatherSliceProps) {
  const {currentDate, highTemp, lowTemp, pop, icon} = props
  const {hour, min, date, month, sec, year} = currentDate
  return (
    <div className='weekly-calendar-slice'>
      {`${month} ${date}`}
      <img
        width='65'
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt='weather-api-icon'
      />
      <div>high:{highTemp}</div>
      <br />
      <div>low:{lowTemp}</div>
      <br />
      <div>pop:{pop}</div>
    </div>
  )
}
