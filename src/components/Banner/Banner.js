import React from "react";

export default function Banner() {
    return (
        <div className="bg-cover bg-center h-96 bg-banner-pattern">
            <div className="lg:tracking-widest pt-36">
                <div className="md:text-4xl text-2xl  uppercase  flex flex-col">
                    <div className="m-auto">Take Your Fit To The</div>
                    <div className="m-auto">Ne(x)t Level</div>
                </div>

                <div className="flex p-5">
                    <div className="w-auto m-auto flex">
                        <div className="border cursor-pointer p-1 border-black hover:bg-black hover:text-white">
                            Buy Products
                        </div>
                        <div className="ml-16 border p-1 cursor-pointer border-black hover:bg-black hover:text-white">
                            View Proucts
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
