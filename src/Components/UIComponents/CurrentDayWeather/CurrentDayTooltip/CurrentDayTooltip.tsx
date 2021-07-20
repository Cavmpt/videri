import React, {useContext, useState} from 'react'
import {Context, ContextType} from '../../../../Store/Provider'

import './DailyNotification.scss'

export interface IDailyNotificationProps {}

export default function DailyNotification(
  props: IDailyNotificationProps,
): JSX.Element {
  const context = useContext<ContextType>(Context)
  const {alerts} = context
  const {sender_name, event, start, end, description, tags} = alerts?.[0] || {}

  return (
    <>
      <div>Important Notice from</div>
      <div>{description}</div>
    </>
  )
}
