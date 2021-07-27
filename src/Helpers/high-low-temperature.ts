import {IHourlyWeatherInterface} from '../Store/Store-types'

export interface IHighLowTemperatureInterface {
  high: number
  low: number
}

export default function HighLowTemperatureDay(
  hourlyWeatherArray: IHourlyWeatherInterface[],
): IHighLowTemperatureInterface {
  const highLowTemperature: IHighLowTemperatureInterface = {
    high: Number.NEGATIVE_INFINITY,
    low: Number.POSITIVE_INFINITY,
  }
  /**
   * LOOP THROUGH THE ARRAY TO RETURN
   * THE HIGH LOW TEMPERATURE OF THE DAY
   * TROUGH HOURLY TEMPERATURE
   */
  hourlyWeatherArray.forEach(element => {
    if (element.temp > highLowTemperature.high) {
      highLowTemperature.high = element.temp
    } else if (element.temp < highLowTemperature.low) {
      highLowTemperature.low = element.temp
    }
  })

  return highLowTemperature
}
