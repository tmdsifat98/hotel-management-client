import React from "react";
import Navbar from "../../Components/Navbar";
import Banner from "../../Components/Banner";
import Map from "../../Components/Map";

const Home = () => {
  return (
    <div>
      <header>
        <nav className="sticky pt-2 top-0 z-50 w-full">
          <Navbar />
        </nav>
        <Banner/>
      </header>
      <main>
        <section className="lg:w-7/12 w-11/12 mx-auto">
          <h1 className="md:text-5xl text-3xl lg:text-7xl font-playfair mt-8 mb-4 font-bold text-center">Our Hotel Location</h1>
          <Map/>
        </section>
      </main>
      Home
    </div>
  );
};

export default Home;
