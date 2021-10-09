import * as actionType from './cart.type';

export const addToCart = (product) => {
    return {
        type: actionType.ADD_TO_CART,
        payload: {
            product: product
        }
    }
}

export const removeFromCart  = (itemId) => {
    return{
        type: actionType.REMOVE_FORM_CART,
        payload:{
            id: itemId
        }
    }
}

export const updateQty = (itemId, qty) => {
    return {
        type: actionType.UPDATE_QTY,
        payload: {
            id: itemId,
            qty: qty
        }
    }
}