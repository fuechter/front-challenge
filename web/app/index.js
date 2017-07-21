import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import courseReducer from './redux/reducer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Detail from './container/detail'
import List from './container/list'

const history = createHistory()
const middleware = routerMiddleware(history)


const store = createStore(
  combineReducers({
    course: courseReducer,
    router: routerReducer
  }),
  applyMiddleware(thunkMiddleware, middleware)
)

render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={List}/>
          <Route path="/detail/:id" component={Detail}/>
        </div>
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)
