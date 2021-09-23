import axios from "axios";
import { FETCH_PRODUCTS } from "../actionsType/AcitonsTypes";
import imageToBase64 from "image-to-base64/browser";

export const fetchProducts = async (dispatch) => {
    const res = await axios
        .get("https://fakestoreapi.com/products")
        .then((responses) => {

            for (let r of responses.data) {
                imageToBase64(r.image).then((ress) =>
                    localStorage.setItem(r.id, ress)
                );
            }
            return responses.data;
        })
        dispatch({
            type: FETCH_PRODUCTS,
            payload: res,
        });
};
