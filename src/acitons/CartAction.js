import * as ACTIONS from '../actionsType/AcitonsTypes'

export const addToCart = product => {
    return {
        type : ACTIONS.ADD_TO_CART,
        payload: product
    }
}


export const deleteFromCart = id => {
    return {
        type : ACTIONS.DELETE_FROM_CART,
        payload: id
    }
}

export const clearCart = () => {
    return {
        type : ACTIONS.CLEAR_CART,
        payload: []
    }
}