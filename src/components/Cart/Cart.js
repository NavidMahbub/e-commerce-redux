import React from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

export default function Cart({ setModalIsOpen, modalIsOpen }) {
    let subtitle,
        total = 0;

    const cart  = useSelector(state => state.cart)

    Modal.setAppElement("#root");

    function afterOpenModal() {
        subtitle.style.color = "#f00";
    }

    return (
        <div>
            <Modal
                className ="bg-gray-200 absolute right-1 top-8 h-auto overflow-hidden w-full md:w-96 "
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={ () => setModalIsOpen(false)}
            >
                <h2
                    ref={(_subtitle) => (subtitle = _subtitle)}
                    onClick={ () => setModalIsOpen(false)}
                    className="cursor-pointer ml-2"
                >
                    X
                </h2>

                <h2 className="text-center tracking-widest">Cart Items</h2>

                {cart.map(item => {
                    total += item.quantity * item.price;
                    return <CartItem key={item.id} item = {item} />;
                })}

                <div className="flex justify-end mr-8">
                    Total Amount : {total.toFixed(2)}
                </div>
                
                <Link to ='/check_out' className="flex justify-center w-24 p-1 m-auto  border  cursor-pointer border-black hover:bg-black hover:text-white text-center"
                    onClick={() =>  setModalIsOpen(false)}
                >
                    Check Out
                </Link>
            </Modal>
        </div>
    );
}
