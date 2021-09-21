import React from "react";
import { addToCart, deleteFromCart } from "../../acitons/CartAction";
import { useDispatch } from "react-redux";

export default function CartItem({ item }) {
    const dispatch = useDispatch()
    const showItem = item.quantity === 0 ? false : true

    return (
        <div>
            {showItem && (
                <div className="flex bg-gray-100 my-3 px-2 lg:m-6 lg:p-4 justify-between rounded shadow-xl">
                    <div className="flex">
                        <div
                            className="cursor-pointer m-auto"
                            onClick={() => dispatch(deleteFromCart(item.id)) }
                        >
                            X
                        </div>
                        <img
                            src={item.image}
                            className="w-6 h-auto ml-4 lg:ml-6"
                            alt=""
                        />
                        <div className=" ml-6 m-auto text-xs">
                            <p>{item.title.slice(0,25)}..</p>
                            <p>$ {item.price}</p>
                        </div>
                    </div>

                    <div className="flex justify-between m-2">
                        <div className="py-1 flex justify-between border w-20  m-auto">
                            <p
                                className="cursor-pointer px-3"
                                onClick={() => dispatch(addToCart({...item, quantity: -1})) }
                            >
                                -
                            </p>
                            {item.quantity}
                            <p
                                className="cursor-pointer px-3 "
                                onClick={() => dispatch(addToCart({...item, quantity: 1})) }
                            >
                                +
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
