import React from "react";

export default function Footer() {
    return (
        <div className="h-96 flex flex-col m-auto  bg-gray-900  text-white">
            <div className="text-4xl tracking-widest text-center mt-28">
                Our Online Store!
            </div>
            <div className="tracking-wide text-center mt-4">
                DSI™ features 80+ millions of products with all at incredible
                prices.,
                <br /> We provide shoppers with a hassle-free and worry-free
                international shopping ...
            </div>
            <div className="border cursor-pointer py-2 px-4 hover:bg-white hover:text-black text-center m-auto mt-4 hover:border-white shadow-xl ">
                Buy Products
            </div>
            <div className="text-center mb-2">All rights is reserved by DSi</div>
        </div>
    );
}
