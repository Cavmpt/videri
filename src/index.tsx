import React from 'react'
import {BrowserRouter as Router, useRoutes} from 'react-router-dom'
import ReactDOM from 'react-dom'

import FetchBoundary from './Config/fetch-boundary'

import ErrorBoundary from './Components/UIComponents/Notifications/ErrorBoundary/ErrorBoundary'

import WeatherPage from './Components/Pages/WeatherPage/WeatherPage'

import './Styles/Mixins/glass.scss'

import './Styles/Colors.css'
import './Styles/Index.css'
import './Styles/Fonts.css'

import reportWebVitals from './reportWebVitals'

import {Provider} from './Store/Provider'

const routesArray = [
  {
    path: '/',
    element: <WeatherPage />,
  },
]

const App = () => {
  const routes = useRoutes(routesArray)
  return routes
}

ReactDOM.render(
  <div className='wrapper'>
    <Router>
      <Provider>
        <ErrorBoundary>
          <FetchBoundary>
            <App />
          </FetchBoundary>
        </ErrorBoundary>
      </Provider>
    </Router>
  </div>,
  document.getElementById('src'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
