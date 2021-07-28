/* eslint-disable @typescript-eslint/naming-convention */
import React, {useContext, useState, useEffect} from 'react'
import {Context, ContextType} from '../../../../Store/Provider'

import './CurrentDayTooltip.scss'

export interface IDailyNotificationProps {}

export default function DailyNotification(
  props: IDailyNotificationProps,
): JSX.Element {
  const context = useContext<ContextType>(Context)
  const {alerts} = context
  const {sender_name, event, start, end, description, tags} = alerts?.[0] || {}

  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    console.log('alerts:', alerts)
  })

  return (
    <>
      <button
        className='exclamation-mark'
        onFocus={() => setShowTooltip(true)}
        onMouseOver={() => setShowTooltip(true)}
        onMouseOut={() => setShowTooltip(false)}
        onBlur={() => setShowTooltip(false)}
        type='button'
      >
        !
      </button>
      <div className={showTooltip ? 'show-tooltip' : 'hide-tooltip'}>
        {alerts ? <>{description}</> : <p>Currently no alerts</p>}
      </div>
    </>
  )
}
