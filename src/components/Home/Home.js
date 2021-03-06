import React from "react";
import Banner from "../Banner/Banner";
import NavBar from "../Navbar/NavBar";
import Footer from '../Footer/Footer'
import ProductsList from "../ProductsList/ProductsList";

export default function Home() {

    

    return (
        <>
            <div className="sticky top-0">
                <NavBar/>
            </div>

            <Banner />
            
            <ProductsList />

            <Footer/>
        </>
    );
}
