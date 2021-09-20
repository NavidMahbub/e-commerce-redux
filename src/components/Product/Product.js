import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../acitons/CartAction";

export default function Product({ product }) {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const itemFound = cart.find( c => c.id === product.id )
    const quantity = itemFound ? itemFound.quantity : undefined
    const showCartButton = !quantity


    return (
        <div className="w-52 shadow-xl m-6 lg:m-10 flex flex-col justify-between bg-white border-2 rounded-lg">
            <img
                src={product.image}
                className="h-32 m-auto"
                alt="product-img"
            />

            <div className="text-xs mt-6 pb-0px m-2">
                <p>{product.title}</p>
                <p className="mt-2 font-bold">$ {product.price}</p>
            </div>

            <div className="flex justify-between p-2">
                {!showCartButton && (
                    <div className="py-1 m-auto flex justify-between border w-20 ">
                        <p
                            className="cursor-pointer px-2"
                            onClick={() => dispatch(addToCart({...product, quantity: -1})) }
                        >
                            -
                        </p>

                        <p>{quantity}</p>

                        <p
                            className="cursor-pointer px-2"
                            onClick={() => dispatch(addToCart({...product, quantity: 1})) }
                        >
                            +
                        </p>
                    </div>
                )}

                {showCartButton &&
                <div
                    className="border m-auto cursor-pointer py-1 px-2 hover:bg-black hover:text-white"
                    onClick={() => dispatch(addToCart({...product, quantity: 1})) }
                >
                    Add to Cart
                </div>}
            </div>
        </div>
    );
}
