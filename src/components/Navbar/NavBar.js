import React,{useState} from "react";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";


export default function NavBar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const cart = useSelector(state => state.cart)

    let totalItem = 0
    cart.map(c => totalItem += c.quantity)

    return (
        <div>
            <div className="bg-gray-100 flex justify-between h-12">
                <div className="pl-4 text-3xl mt-2 cursor-pointer  tracking-widest  lg:ml-8">
                    <h1 className="hover:text-yellow-500">
                        <Link to ='/'>DSi</Link>
                    </h1>
                </div>

                <div className="flex">
                    <div className="text-sm invisible lg:visible lg:text-md m-auto lg:mr-10  flex">
                        <ul className="ml-2  list-none flex">
                            <li className="cursor-pointer"><Link to= '/'>Home</Link></li>
                            <li className="cursor-pointer ml-3 lg:ml-12">
                                Products
                            </li>
                            <li className="cursor-pointer ml-3 lg:ml-12">
                                About
                            </li>
                        </ul>
                    </div>

                    <div className="text-md visible  m-auto lg:mr-10 ">
                        <div className="lg:mr-6 list-none flex">
                            <div
                                className="cursor-pointer flex"
                                onClick={() => setModalIsOpen(!modalIsOpen)}
                            >
                                <FaCartPlus className=" text-xl text-yellow-500" />
                                <div className="pl-2">{totalItem}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Cart setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} />
        </div>
    );
}
