import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router";
import { Collection } from "./pages/Collection";
import { Contact } from "./pages/Contact";
import { About } from "./pages/about";
import { Cart } from "./pages/Cart";
import { Product } from "./pages/Product";
import { Footer } from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
export const App = () => { 
  return (
    <div className=" px-[4vw] sm:px-[6vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
      <Footer/>
      </div>
  );
};
