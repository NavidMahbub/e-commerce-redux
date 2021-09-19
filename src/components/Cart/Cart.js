import React from "react";
import Modal from "react-modal";
// import { Link } from "react-router-dom";

const customStyles = {
    content: {
        top: "4%",
        left: "auto",
        right: "1%",
        bottom: "auto",
        width: "500px",
        height: "95%",
    },
};

export default function Cart({ setIsOpen, modalIsOpen }) {
    let subtitle,
        total = 0;

    Modal.setAppElement("#root");

    function afterOpenModal() {
        subtitle.style.color = "#f00";
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={ () => setIsOpen(false)}
                style={customStyles}
                htmlOpenClassName="overflow-hidden"
            >
                <h2
                    ref={(_subtitle) => (subtitle = _subtitle)}
                    onClick={ () => setIsOpen(false)}
                    className="cursor-pointer"
                >
                    X
                </h2>

                <h2 className="text-center tracking-widest">Cart Items</h2>

                {/* {cart.map((item, idx) => {
                    total += item.quantity * item.price;
                    return <CartItem key={idx} item = {item} />;
                })} */}

                <div className="flex justify-end mr-8">
                    Total Amount : {total.toFixed(2)}
                </div>
                
                <div className="flex justify-center w-24 p-1 m-auto  border  cursor-pointer border-black hover:bg-black hover:text-white text-center"
                    onClick={() =>  setIsOpen(false)}
                >
                    Check Out
                </div>
            </Modal>
        </div>
    );
}
