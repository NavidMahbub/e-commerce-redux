import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../acitons/CartAction";
import { useDispatch } from "react-redux";

export default function CheckOut() {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col mt-20 mb-32">
            <div className="m-auto text-xl mb-10">---- Product list -----</div>

            <div className= "flex flex-col  m-auto justify-center">
                {cart.map((c, idx) => (
                    <div className="shadow-xl text-center w-96 h-14 rounded bg-gray-100 my-3">
                        {idx + 1} : {c.title}
                    </div>
                ))}
            </div>

            <div className="text-xl flex justify-center mt-10">
                Thank You for Choosing us!
            </div>

            <Link className="m-auto mt-3 border cursor-pointer p-1 border-black hover:bg-black hover:text-white" to="/"
                 onClick={() => dispatch(clearCart())}
            >
                Back to Home
            </Link>
        </div>
    );
}
