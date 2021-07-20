/* eslint-disable @typescript-eslint/naming-convention */
import React, {useContext} from 'react'
import {Context, ContextType} from '../../../../Store/Provider'

import './WeeklyCalendar.scss'

export interface IWeeklyCalendarProps {
  placeholder?: null
}

export default function WeeklyCalendar(
  props: IWeeklyCalendarProps,
): JSX.Element {
  const context = useContext<ContextType>(Context)
  const dailyTemperature = context

  return <div>fff</div>
}
