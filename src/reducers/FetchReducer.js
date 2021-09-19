import { FETCH_PRODUCTS } from "../actionsType/AcitonsTypes";

export const fetchReduccer = (state = [], action) =>{
    switch (action.type) {
        case FETCH_PRODUCTS:
           return action.payload
        default:
            return state
    }
}