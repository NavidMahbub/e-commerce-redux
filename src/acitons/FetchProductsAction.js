import axios from "axios";
import { FETCH_PRODUCTS } from "../actionsType/AcitonsTypes";

export const fetchProducts = async(dispatch) => {

    const res = await axios.get("https://fakestoreapi.com/products")
    
    dispatch({
        type: FETCH_PRODUCTS,
        payload: res.data
    })
}