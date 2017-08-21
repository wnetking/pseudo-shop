import {
  FETCH_PRODUCTS,
  DELETE_PRODUCT,
  DELETE_ALL_PRODUCT,
  ADD_PRODUCT
} from '../constants'

import {fetchProducts} from '../utils/fetchProducts'
import {localStorageUtils} from '../utils/localStorageUtils'

export function fetchProductsAction() {
  return (dispatch) => {
    dispatch({
      type   : FETCH_PRODUCTS,
      payload: {
        products: [],
        fetching: true
      }
    })

    fetchProducts().then((data) => {
      localStorageUtils.get().then(localData => {
        dispatch({
          type   : FETCH_PRODUCTS,
          payload: {
            products: [].concat(data, localData),
            fetching: false
          }
        })
      })
    });
  }
}

export function addProductAction(data) {
  return (dispatch, getState) => {
    localStorageUtils.add(data).then((data)=> {
      dispatch({
        type   : ADD_PRODUCT,
        payload: {
          products: [].concat(getState().products, [data])
        }
      })
    });
  }
}

export function deleteProductAction(id) {
  return (dispatch, getState) => {
    localStorageUtils.remove(id).then(()=> {
      dispatch({
        type   : DELETE_PRODUCT,
        payload: {
          products: getState().products.filter((item) => {
            return id !== item.id;
          })
        }
      })
    })
  }
}

export function deleteAllProductAction() {
  return (dispatch) => {
    localStorageUtils.del().then(()=> {
      dispatch({
        type   : DELETE_ALL_PRODUCT,
        payload: {
          products: []
        }
      })
    })
  }
}