import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { ProductsList } from '../features/products/ProductsList';
import { ShoppingCart } from '../features/shoppingCart/ShoppingCart';
import Footer from "./ui/Footer";
import NavBar from './ui/Navbar';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <NavBar />
                <div className="flex flex-row justify-between">
                    <div className="basis-1/2">
                        <Routes>
                            <Route path="/" element={<ProductsList />} />
                            <Route path="shopping-cart" element={<ShoppingCart />} />
                            <Route path="/*" element={<ProductsList />} />
                        </Routes>
                    </div>
                    <div className="basis-1/4">Aside</div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )

};