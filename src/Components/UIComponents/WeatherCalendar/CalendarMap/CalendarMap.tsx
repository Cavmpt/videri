import * as React from 'react'

import './CalendarMap.scss'

export interface ICalendarMapProps {
  placeholder?: null
}

export default function CalendarMap(props: ICalendarMapProps) {
  return (
    <div className='map'>
      <iframe
        title='windy-weather-map'
        width='350'
        height='200'
        className='map__iframe'
        src='https://embed.windy.com/embed2.html?lat=45.533&lon=-73.692&detailLat=45.503&detailLon=-73.593&width=650&height=450&zoom=10&level=surface&overlay=rh&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1'
        frameBorder='0'
      />
    </div>
  )
}
