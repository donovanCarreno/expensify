// React
import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

// Styles
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'


// Components
import AppRouter from './routers/AppRouter'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
