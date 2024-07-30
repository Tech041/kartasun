import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";
import React from "react";

const Home = () => {
  return (
    <main className="flow-root">
      <Navbar />
      <Hero />

      <Services />
      <Footer />
    </main>
  );
};

export default Home;
