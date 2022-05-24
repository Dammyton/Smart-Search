import React from "react";
import Banner from "../features/banner/Banner";
import Navbar from "../features/navbar/Navbar";
import HowItWorks from "../features/howItWorks/HowItWorks";
import SearchBox from "../features/searchBox/SearchBox";
import Footer from "../features/footer/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <HowItWorks />
      <SearchBox />
      <Footer />
    </>
  );
};

export default Index;
