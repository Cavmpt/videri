import * as React from 'react'
import {NavLink} from 'react-router-dom'

import './CalendarNav.scss'

export interface ICalendarNavProps {}

export default function CalendarNav(props: ICalendarNavProps) {
  return (
    <div className='calendar-nav'>
      <NavLink
        to='/'
        className='calendar-nav__box'
        activeStyle={{
          fontWeight: 'bold',
        }}
      >
        Weekly
      </NavLink>
      <NavLink
        to='/chart'
        className='calendar-nav__box'
        activeStyle={{
          fontWeight: 'bold',
        }}
      >
        Chart
      </NavLink>
      <NavLink
        to='/map'
        className='calendar-nav__box'
        activeStyle={{
          fontWeight: 'bold',
        }}
      >
        Map
      </NavLink>
    </div>
  )
}
