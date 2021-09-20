import { FETCH_PRODUCTS } from "../actionsType/AcitonsTypes";
const initailState = {
    fetched: false,
    products:[]
}

export const fetchReduccer = (state = initailState, action) =>{
    switch (action.type) {
        case FETCH_PRODUCTS:
           return {fetched: true, products: action.payload}
        default:
            return state
    }
}