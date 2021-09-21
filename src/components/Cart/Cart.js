import React from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import {BsArrowRight} from 'react-icons/bs'

export default function Cart({ setModalIsOpen, modalIsOpen }) {
    let subtitle,
        total = 0;

    const cart = useSelector((state) => state.cart);

    Modal.setAppElement("#root");

    function afterOpenModal() {
        subtitle.style.color = "#f00";
    }

    return (
        <div>
            <Modal
                className="overflow-scroll bg-gray-200 absolute right-1 top-1 h-full w-full md:w-96 "
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <h2
                    ref={(_subtitle) => (subtitle = _subtitle)}
                    onClick={() => setModalIsOpen(false)}
                    className="cursor-pointer ml-2"
                >
                    X
                </h2>

                <h2 className="text-center tracking-widest">Cart Items</h2>

                <div >
                    {cart.map((item) => {
                        total += item.quantity * item.price;
                        return <CartItem key={item.id} item={item} />;
                    })}
                </div>

                {cart.length <= 0 && (
                    <div className="flex my-3 text-red-500 justify-center">
                        No item in the cart!
                    </div>
                )}
                
                <div >
                    {cart.length > 0 && (
                        <div className="flex justify-end mr-8">
                            Total Amount : {total.toFixed(2)}
                        </div>
                    )}

                    <Link
                        to="/check_out"
                        className="flex justify-center w-24 p-1 m-auto my-3 border mb-4 cursor-pointer border-black hover:bg-black hover:text-white"
                        onClick={() => setModalIsOpen(false)}
                    >
                        Check Out
                    </Link>
                    <div className ="flex justify-end cursor-pointer mr-6 text-green-600 mb-4 " onClick={() => setModalIsOpen(false)} >Continue Shoping<BsArrowRight className ='mt-1.5' /></div>
                </div>
            </Modal>
        </div>
    );
}
