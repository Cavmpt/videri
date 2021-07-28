/* eslint-disable no-plusplus */
import React, {useContext} from 'react'
import {Line} from 'react-chartjs-2'
import {Context, ContextType} from '../../../../Store/Provider'

import RectangularSkeleton from '../../Skeleton/RectangularSkeleton/RectangularSkeleton'
import {unixTimestampToDate} from '../../../../Helpers/dt-to-datetime'

import './D3Calendar.scss'

export interface ID3CalendarProps {
  placeholder?: null
}

export default function D3Calendar(props: ID3CalendarProps) {
  const context = useContext<ContextType>(Context)
  const {dailyWeather} = context

  const setLabelsAndData = () => {
    const dateArray: number[] = []
    const temperatureArray: number[] = []
    if (dailyWeather !== undefined) {
      for (let i = 0; i < 5; i++) {
        const {date} = unixTimestampToDate(dailyWeather[i].dt)
        const {day} = dailyWeather[i].feels_like
        dateArray.push(date)
        temperatureArray.push(day)
      }
      return {day: dateArray, temp: temperatureArray}
    }
    return {day: dateArray, temp: temperatureArray}
  }

  const data = {
    labels: setLabelsAndData().day,
    datasets: [
      {
        label: 'temperature in F',
        data: setLabelsAndData().temp,
        fill: false,
        backgroundColor: '#ffff',
        borderColor: '#ffff',
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
  return dailyWeather ? (
    <Line data={data} options={options} />
  ) : (
    <RectangularSkeleton height='10rem' width='20rem' />
  )
}
