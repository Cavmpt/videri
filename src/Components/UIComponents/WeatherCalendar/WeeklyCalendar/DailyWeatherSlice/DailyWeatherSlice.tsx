/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext} from 'react'
import {Context, ContextType} from '../../../../../Store/Provider'

import {IDateTimeInterface} from '../../../../../Helpers/dt-to-datetime'

import './DailyWeatherSlice.scss'

export interface IDailyWeatherSliceProps {
  date: IDateTimeInterface
  highTemp: number
  lowTemp: number
  pop: number
  icon: string
}

export default function DailyWeatherSlice(props: IDailyWeatherSliceProps) {
  const {date, highTemp, lowTemp, pop, icon} = props

  return (
    <div className='weekly-calendar-slice'>
      {date}
      {highTemp} {lowTemp} {pop} {icon}
    </div>
  )
}
