import React from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import Features from "../components/Features";
import Products from "../components/Gallery";
import Contactus from "@/components/Contact";
import Footer from "@/components/Footer";
import JKprifixBusinessCard from "@/components/businesscard";

function Home() {
  return (
    <div className="bg-[#F6F5F0]">

      <Navbar />

      <HeroSection />

      <Features />

      <Products />
      <div className="overflow-hidden">

      <Contactus/>
      </div>
      <Footer/>

    </div>
  );
}

export default Home;