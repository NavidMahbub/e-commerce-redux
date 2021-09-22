import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../acitons/CartAction";
import { useDispatch } from "react-redux";
import costCalculation from "../Cart/costCalculation";

export default function CheckOut() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    let total = costCalculation(cart)

    return (
        <div className="flex flex-col mt-20 mb-32">
            <div className="m-auto text-xl mb-4">---- Product list -----</div>

            <div className="m-auto">
                {cart.map((c, idx) => (
                    <div
                        key={c.id}
                        className="shadow-xl flex flex-col justify-center w-full lg:w-96 h-16 text-sm rounded bg-gray-100 my-8 px-4"
                    >
                        <div className="flex justify-between flex-nowrap">
                            <div>
                                {idx + 1} : {c.title.slice(0, 43)}..
                            </div>
                            <div>
                                <span>{c.quantity}</span> x
                                <span className="text-yellow-700 px-1">
                                    ${c.price}{" "}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="flex text-yellow-700 justify-end mr-2">
                    Total Amount $: {total.toFixed(2)}
                </div>
            </div>

            <div className="text-xl flex justify-center mt-10">
                Thank You for Choosing us!
            </div>

            <Link
                className="m-auto mt-3 border cursor-pointer p-1 border-black hover:bg-black hover:text-white"
                to="/"
                onClick={() => dispatch(clearCart())}
            >
                Back to Home
            </Link>
        </div>
    );
}
