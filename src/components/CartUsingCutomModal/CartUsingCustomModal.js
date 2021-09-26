import React from "react";
import CustomModal from "../CustomModal/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { BsArrowRight } from "react-icons/bs";
import costCalculation from "../Cart/costCalculation";
import { clearCart } from "../../acitons/CartAction";

const Modal_Style = {
    position: "fixed",
    top: " 0%",
    right: "-2%",
    backgroundColor: "#FFF",
    padding: "30px",
    width:'700px',
    height: '100%'
};
export default function CartUsingCustomModal({setModalIsOpen}) {

    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    let total = costCalculation(cart);

    return (
        <div>
            <CustomModal
                styles = {Modal_Style}
                setModalIsOpen = {setModalIsOpen}
            >

                <h2 className="text-center">Cart Items</h2>

                <div>
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                {cart.length <= 0 && (
                    <div className="flex my-3 text-red-500 justify-center">
                        No item in the cart!
                    </div>
                )}

                <div>
                    {cart.length > 0 && (
                        <div className="flex justify-end mr-8">
                            Total Amount : {total.toFixed(2)}
                        </div>
                    )}

                    <div className="flex">
                        <div
                            className="flex justify-center text-red-700 w-24 p-1 m-auto my-3 border mb-4 cursor-pointer border-red-700 hover:bg-red-500 hover:text-white"
                            onClick={() => dispatch(clearCart())}
                        >
                            Clear Cart
                        </div>
                        <Link
                            to="/check_out"
                            className="flex justify-center text-green-700 w-24 p-1 m-auto my-3 border mb-4 cursor-pointer border-green-700 hover:bg-green-700 hover:text-white"
                            onClick={() => setModalIsOpen(false)}
                        >
                            Check Out
                        </Link>
                    </div>

                    <div
                        className="flex justify-end cursor-pointer mr-6 text-green-600 mb-4 "
                        onClick={() => setModalIsOpen(false)}
                    >
                        Continue Shoping
                        <BsArrowRight className="mt-1.5" />
                    </div>
                </div>

            </CustomModal>
        </div>
    );
}
