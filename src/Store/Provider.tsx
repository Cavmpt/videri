import React, {useState} from 'react'
import {
  ICurrentWeatherInterface,
  IDailyWeatherInterface,
  IHourlyWeatherInterface,
  IMinutelyWeatherInterface,
  IAlertsInterface,
  IErrorsInterface,
} from './Store-types'

export type ContextType = {
  currentWeather: ICurrentWeatherInterface | undefined
  minutelyWeather: IMinutelyWeatherInterface[] | undefined
  hourlyWeather: IHourlyWeatherInterface[] | undefined
  dailyWeather: IDailyWeatherInterface[] | undefined
  dataLoaded: boolean
  alerts: IAlertsInterface[] | undefined
  errors: IErrorsInterface | undefined

  setCurrentWeather: (item: ICurrentWeatherInterface) => void
  setMinutelyWeather: (item: IMinutelyWeatherInterface[]) => void
  setHourlyWeather: (item: IHourlyWeatherInterface[]) => void
  setDailyWeather: (item: IDailyWeatherInterface[]) => void
  setDataLoaded: (item: boolean) => void
  setAlerts: (item: IAlertsInterface[]) => void
  setErrors: (item: IErrorsInterface) => void
}

const Context = React.createContext<ContextType>(undefined!)

const Provider: React.FC = ({children}: any) => {
  const [currentWeather, setCurrentWeather] = useState<
    ICurrentWeatherInterface | undefined
  >()
  const [minutelyWeather, setMinutelyWeather] = useState<
    IMinutelyWeatherInterface[] | undefined
  >()
  const [hourlyWeather, setHourlyWeather] = useState<
    IHourlyWeatherInterface[] | undefined
  >()
  const [dailyWeather, setDailyWeather] = useState<
    IDailyWeatherInterface[] | undefined
  >()
  const [dataLoaded, setDataLoaded] = useState<boolean>(false)
  const [alerts, setAlerts] = useState<IAlertsInterface[] | undefined>()
  const [errors, setErrors] = useState<IErrorsInterface | undefined>()
  return (
    <Context.Provider
      value={{
        // values
        currentWeather,
        minutelyWeather,
        hourlyWeather,
        dailyWeather,
        dataLoaded,
        alerts,
        errors,

        // functions
        setCurrentWeather,
        setMinutelyWeather,
        setHourlyWeather,
        setDailyWeather,
        setDataLoaded,
        setAlerts,
        setErrors,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export {Context, Provider}
