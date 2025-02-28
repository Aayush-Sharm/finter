import {  Routes, Route } from "react-router-dom";
import About from "../pages/about";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Team from "../pages/team";
import Header from "../component/header";
import Footer from "../component/footer";
import React from 'react';
import Service from "../pages/service";


const Routing = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/team" element={<Team />} />
                <Route path="/service" element={<Service />} />
            </Routes>
            <Footer />
        </>
    )
};
export default Routing;