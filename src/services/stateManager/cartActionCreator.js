import { ADD_PRODUCT_TO_CART, PRODUCTS_FETCHED, PRODUCTS_FAILED } from "./actionTypes"

export const cartAddProduct = (product) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
}

export const getProducts = () => {
    return (dispatch) => {
           
        fetch('http://localhost:3000/products')
        .then((res) =>{
            return res.json()
        })
        .then((json)=> {

            console.log('JSON', json)
            dispatch({
                type: PRODUCTS_FETCHED,
                payload: json
            })
        })
        .catch(() => {
         dispatch({
                type: PRODUCTS_FAILED
            })
        })
    }
}