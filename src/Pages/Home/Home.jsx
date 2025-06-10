import React, { useEffect } from "react";
import Banner from "../../Components/Banner";
import Map from "../../Components/Map";
import ReviewCarousel from "../../Components/ReviewCarousel";
import { useState } from "react";
import PromotionModal from "../../Components/PromotionModal";
import UpdateDate from "../../Components/UpdateDate";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    document.title = "Lodgify | Home";
  }, []);

  return (
    <div>
      <PromotionModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <header>
        <Banner />
      </header>
      <main>
        <section className="lg:w-7/12 w-11/12 mx-auto">
          <h1 className="md:text-5xl text-4xl lg:text-7xl font-playfair mt-8 mb-4 font-bold text-center">
            Our Hotel Location
          </h1>
          <Map />
        </section>
        <section>
          <ReviewCarousel />
        </section>
      </main>
    </div>
  );
};

export default Home;
