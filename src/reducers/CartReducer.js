import {
    ADD_TO_CART,
    CLEAR_CART,
    DELETE_FROM_CART,
} from "../actionsType/AcitonsTypes";


export const cartReducer = (state = [], action) => {

    switch (action.type) {
        case ADD_TO_CART:
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.payload.id) {
                    state[i].quantity += action.payload.quantity;
                    state[i].quantity = state[i].quantity < 1 ? 0 :  state[i].quantity
                    return [...state];
                }
            }

            return [...state, action.payload ];
        case DELETE_FROM_CART:
            return state.filter((product) => product.id !== action.payload);
        case CLEAR_CART:
            return [];
        default:
            return state;
    }
};
