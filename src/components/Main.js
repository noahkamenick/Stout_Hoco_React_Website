import React from "react";
import "./Main.css";
import Navbar from "./Navbar";
import Shirt from "./Shirt";
import "./fonts.css";
import HomecomingEvents from "./HomecomingEvents";
import Footer from "./Footer";
import Medallion from "./Medallion";
import mainpic from "../assets/main.png"


function Main() {
  return (
    <>
      <Navbar />
      <div className="container" id="home">
        <div className="hoboFont text-center heading" id="home">UW-Stout Homecoming 2022</div>
       <img src={mainpic} className="rounded mx-auto d-block img-fluid poster" alt="mainposter"/>
        <Medallion />
        <HomecomingEvents />
        <Shirt />
        <Footer />
        
      </div>
    </>
  );
}

export default Main;
