import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center mt-20 mb-32">
            <p className ='m-auto text-4xl mt-28'>Please Provide a Valid Route Path!</p>
            <Link className="m-auto mt-4 border cursor-pointer p-1 border-black hover:bg-black hover:text-white" to="/">
                Back to Home
            </Link>
        </div>
    );
}
