import axios from "axios";
import { FETCH_PRODUCTS } from "../actionsType/AcitonsTypes";

export const fetchProducts = async(dispatch) => {

    let products = localStorage.getItem('products');
    
    if(products){
        products = JSON.parse(products)
    }else{
        const res = await axios.get("https://fakestoreapi.com/products")
        localStorage.setItem('products', JSON.stringify(res.data))
        products = JSON.parse(JSON.stringify(res.data))
    }

    dispatch({
        type: FETCH_PRODUCTS,
        payload: products
    })
}