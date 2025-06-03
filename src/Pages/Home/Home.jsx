import React from "react";
import Navbar from "../../Components/Navbar";
import Banner from "../../Components/Banner";
import Map from "../../Components/Map";

const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <Navbar />
        </nav>
        <Banner/>
      </header>
      <main>
        <section className="w-7/12 mx-auto">
          <h1 className="text-7xl font-playfair my-10 font-bold text-center">Our Hotel Location</h1>
          <Map/>
        </section>
      </main>
      Home
    </div>
  );
};

export default Home;
