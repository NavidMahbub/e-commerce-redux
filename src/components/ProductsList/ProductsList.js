import React, {useEffect} from "react";
import Product from "../Product/Product";
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from "../../acitons/FetchProductsAction";

export default function ProductsList() {
    
    const {fetched, products} = useSelector(state => state.fetchedProducts)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(!fetched){
            dispatch(fetchProducts)

        }
    },[dispatch, fetched])

    return (
        <div className="flex justify-center bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 ">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
