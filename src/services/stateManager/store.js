import { createStore, applyMiddleware } from  'redux';
import thunk from 'redux-thunk';
import { ADD_PRODUCT_TO_CART, PRODUCTS_FAILED, PRODUCTS_FETCHED } from './actionTypes';

const inititalState = {
    cart:[],
    products: [],
    error: false
}

const reducer = (currentState = inititalState, action) => {
    switch(action.type){
        case ADD_PRODUCT_TO_CART:
            return {
                ...currentState,
                cart: currentState.cart.concat(action.payload)
            }
        case PRODUCTS_FETCHED:
            return {
                ...currentState,
                products: action.payload
            }
        case PRODUCTS_FAILED:
            return {
                ...currentState,
                error: true
            }
        default:
            return currentState
    }
}

export default createStore(reducer, inititalState, applyMiddleware(thunk ));