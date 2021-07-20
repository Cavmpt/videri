import React from 'react'
import {useRoutes} from 'react-router-dom'

import './Calendar.scss'

import CalendarNav from './CalendarNav/CalendarNav'
import WeeklyCalendar from './WeeklyCalendar/WeeklyCalendar'
import D3Calendar from './D3Calendar/D3Calendar'
import CalendarMap from './CalendarMap/CalendarMap'

export interface ICalendarProps {
  placeholder?: null
}

export default function Calendar(props: ICalendarProps) {
  const CalendarElement = () =>
    useRoutes([
      {
        path: '/',
        element: <WeeklyCalendar />,
      },
      {
        path: '/D3',
        element: <D3Calendar />,
      },
      {
        path: '/Map',
        element: <CalendarMap />,
      },
    ])

  return (
    <div className='calendar'>
      <CalendarNav />
      <CalendarElement />
    </div>
  )
}
