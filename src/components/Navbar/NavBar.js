import React,{useState} from "react";
import { FaCartPlus } from "react-icons/fa";
import Cart from "../Cart/Cart";
// import {Link} from 'react-router-dom'


export default function NavBar() {
    const [modalIsOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className=" bg-gray-100 flex justify-between h-12">
                <div className="pl-4 text-3xl mt-2 cursor-pointer  tracking-widest  lg:ml-8">
                    <h1 className="hover:text-yellow-500">
                        {/* <Link to="/">DSi</Link> */}
                        <div>DSi</div>
                    </h1>
                </div>

                <div className="flex">
                    <div className="text-sm invisible lg:visible lg:text-md m-auto lg:mr-10  flex">
                        <ul className="ml-2  list-none flex">
                            <li className="cursor-pointer">Home</li>
                            <li className="cursor-pointer ml-3 lg:ml-12">
                                Products
                            </li>
                            <li className="cursor-pointer ml-3 lg:ml-12">
                                About
                            </li>
                        </ul>
                    </div>

                    <div className="text-sm  lg:text-md  m-auto lg:mr-10 ">
                        <ul className="visible  lg:mr-6 list-none flex">
                            <li
                                className="cursor-pointer flex"
                                onClick={(e) => setIsOpen(!modalIsOpen)}
                            >
                                <FaCartPlus className=" text-xl text-yellow-500" />

                                <div className="pl-2">1</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Cart setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
        </div>
    );
}
