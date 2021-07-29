// @ts-nocheck
import React from 'react'
import {render, screen} from '@testing-library/react'
import CurrentDayBox from '../CurrentDayBox'
import {Context} from '../../../../../store/Provider'

describe('Alert Box behavior works as expected', () => {
  it('displays the threats correctly', async () => {
    const currentDayWeather = {
      dt: 1626279777,
      sunrise: 1626254357,
      sunset: 1626309647,
      temp: 24.15,
      feels_like: 24.76,
      pressure: 1016,
      humidity: 82,
      dew_point: 20.88,
      uvi: 3.9,
      clouds: 75,
      visibility: 10000,
      wind_speed: 2.06,
      wind_deg: 200,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
    }

    render(
      <Context.Provider value={{currentDayWeather}}>
        <CurrentDayBox />
      </Context.Provider>,
    )
    expect(screen.getByTestId('current-day-box')).toBeTruthy()
  })
})
