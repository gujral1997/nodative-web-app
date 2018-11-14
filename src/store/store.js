import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from 'ducks'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createHashHistory'

export const history = createHistory()


const isLogger = false
if (isLogger && process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const router = routerMiddleware(history)
const middlewares = [router, thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store