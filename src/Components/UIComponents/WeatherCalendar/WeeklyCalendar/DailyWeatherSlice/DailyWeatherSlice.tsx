/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext} from 'react'
import {Context, ContextType} from '../../../../../Store/Provider'

import './DailyWeatherSlice.scss'

export interface IDailyWeatherSliceProps {
  
}

export default function DailyWeatherSlice(props: IDailyWeatherSliceProps) {
  const context = useContext<ContextType>(Context)
  const {dailyWeather} = context

  return <div className='weekly-calendar-slice'></div>
}
