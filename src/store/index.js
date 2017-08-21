import {createStore, applyMiddleware} from 'redux'
import indexReducer from '../reducers'
import thunk from 'redux-thunk'

function configureStore(initialState) {
  const store = createStore(indexReducer, initialState, applyMiddleware(thunk))
  return store;
}

export default configureStore;