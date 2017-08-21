import {
  FETCH_PRODUCTS,
  DELETE_PRODUCT,
  DELETE_ALL_PRODUCT,
  ADD_PRODUCT
} from '../constants'

const initState = {
  products: [],
  fetching: false
}


export default function indexReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        ...action.payload
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        ...action.payload
      }
    case DELETE_ALL_PRODUCT:
      return {
        ...state,
        ...action.payload
      }
    case ADD_PRODUCT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}