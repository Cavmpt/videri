/* eslint-disable @typescript-eslint/naming-convention */
import React, {useState, useContext, useEffect} from 'react'
import {Context, ContextType} from '../../../../Store/Provider'

import HighLowTemperature, {
  IHighLowTemperatureInterface,
} from '../../../../Helpers/high-low-temperature'
import {IHourlyWeatherInterface} from '../../../../Store/Store-types'

import RectangularSkeleton from '../../Skeleton/RectangularSkeleton/RectangularSkeleton'

import './CurrentDayBox.scss'

export interface ICurrentDayBoxProps {}

export default function CurrentDayBox(props: ICurrentDayBoxProps) {
  const context = useContext<ContextType>(Context)
  const {currentWeather, hourlyWeather} = context

  const [HighLowTemp, setHighLowTemp] = useState<
    IHighLowTemperatureInterface | undefined
  >()

  const {dt, temp, pressure, humidity, visibility, wind_speed} =
    currentWeather || {}

  const {high, low} = HighLowTemp || {}

  useEffect(() => {
    if (hourlyWeather !== undefined) {
      setHighLowTemp(
        HighLowTemperature(hourlyWeather as IHourlyWeatherInterface[]),
      )
    }
  }, [currentWeather, dt, hourlyWeather])

  return (
    <div>
      <div className='current-day-box'>
        <div className='current-day-box__high-low'>
          <div className='current-day-box__high'>
            {high ? (
              <>
                <span
                  className='iconify'
                  data-icon='bi:thermometer-high'
                  data-inline='false'
                />
                High : {high} F
              </>
            ) : (
              <RectangularSkeleton height='0.5rem' width='5rem' />
            )}
          </div>
          <div className='current-day-box__low'>
            {low ? (
              <>
                <span
                  className='iconify'
                  data-icon='bi:thermometer-low'
                  data-inline='false'
                />
                Low : {low} F
              </>
            ) : (
              <RectangularSkeleton height='0.5rem' width='5rem' />
            )}
          </div>
        </div>
        <div className='current-day-box__temperature'>Now : {temp} F</div>
        <div className='current-day-box__humdity-visibility-wrap'>
          <div className='current-day-box__humidity'>
            {humidity ? (
              <>
                <span
                  className='iconify'
                  data-icon='carbon:humidity'
                  data-inline='false'
                />
                Humidity:{low}
              </>
            ) : (
              <RectangularSkeleton height='0.5rem' width='5rem' />
            )}
          </div>
          <div className='current-day-box__wind-speed'>
            {wind_speed ? (
              <>
                <span
                  className='iconify'
                  data-icon='bi:wind'
                  data-inline='false'
                />
                Wind:{wind_speed}
              </>
            ) : (
              <RectangularSkeleton height='0.5rem' width='5rem' />
            )}
          </div>
        </div>
        <div className='current-day-box__visibility-pressure-wrap'>
          <div className='current-day-box__visibility'>
            {visibility ? (
              <>
                <span
                  className='iconify'
                  data-icon='dashicons:visibility'
                  data-inline='false'
                />
                visibility:{visibility}
              </>
            ) : (
              <RectangularSkeleton height='0.5rem' width='5rem' />
            )}
          </div>
          <div className='current-day-box__pressure'>
            {pressure ? (
              <>
                <span
                  className='iconify'
                  data-icon='wi:barometer'
                  data-inline='false'
                />
                Pressure:{pressure}
              </>
            ) : (
              <RectangularSkeleton height='0.5rem' width='5rem' />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
