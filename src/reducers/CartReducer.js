import {
    ADD_TO_CART,
    CLEAR_CART,
    DELETE_FROM_CART,
} from "../actionsType/AcitonsTypes";

export const cartReducer = (state = [], action) => {
    // console.log(action.payload)
    switch (action.type) {
        case ADD_TO_CART:
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.payload.id) {
                    state[i].quantity += 1;
                    return [...state];
                }
            }

            const add = {...action.payload, quantity: 1}
            console.log(add)
        
            return [...state,add ];

        case DELETE_FROM_CART:
            return state.filter((product) => product.id !== action.payload);
        case CLEAR_CART:
            return [];
        default:
            return state;
    }
};
