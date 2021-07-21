/* eslint-disable @typescript-eslint/naming-convention */
import React, {useContext} from 'react'
import DailyWeatherSlice from './DailyWeatherSlice/DailyWeatherSlice'
import {Context, ContextType} from '../../../../Store/Provider'

import {unixTimestampToDate} from '../../../../Helpers/dt-to-datetime'
import RectangularSkeleton from '../../Skeleton/RectangularSkeleton/RectangularSkeleton'

import './WeeklyCalendar.scss'

export interface IWeeklyCalendarProps {
  placeholder?: null
}

export default function WeeklyCalendar(
  props: IWeeklyCalendarProps,
): JSX.Element {
  const context = useContext<ContextType>(Context)
  const {dailyWeather} = context

  const CalendarPannel = () => {
    if (dailyWeather !== undefined) {
      return (
        <>
          {dailyWeather.map(item => {
            const date = unixTimestampToDate(item.dt)
            const highTemp = item.temp.max
            const lowTemp = item.temp.min
            const tempratureIcon = item.weather[0].icon
            const {pop} = item
            return (
              <DailyWeatherSlice
                date={date}
                highTemp={highTemp}
                lowTemp={lowTemp}
                icon={tempratureIcon}
                pop={pop}
              />
            )
          })}
        </>
      )
    }
    if (dailyWeather === undefined) {
      return (
        <>
          <RectangularSkeleton />
          <RectangularSkeleton />
          <RectangularSkeleton />
          <RectangularSkeleton />
          <RectangularSkeleton />
          <RectangularSkeleton />
          <RectangularSkeleton />
        </>
      )
    }
    return <div>No Daily Temperature Availble</div>
  }

  return (
    <div>
      <CalendarPannel />
    </div>
  )
}
