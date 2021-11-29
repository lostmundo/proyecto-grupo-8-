import React from "react";
import "./LoginPage.css";
import Navbar from "../components/nav/Navbar";
import Cover from "../components/Cover/Cover";
import Body from "../components/body/Body";
import Footer from "../components/footer/Footer";

function HomePages() {
  return (
    <div className="LoginPages">
      <Navbar />
      <Cover />
      <Body />
      <Footer />
    </div>
  );
}

export default HomePages;
