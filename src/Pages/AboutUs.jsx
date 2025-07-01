// components/AboutUs.jsx
import React from "react";
import { Fade } from "react-awesome-reveal";
import { MdCall, MdEmail } from "react-icons/md";

const AboutUs = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 mt-5">
      <h1 className="text-5xl font-playfair font-bold mb-6 text-center dark:text-white">
        About Us
      </h1>
      <Fade>
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          <p>
            Welcome to <span className="font-semibold">Lodgify</span>, your
            ultimate destination for comfort and luxury in Cox’s Bazar.
            Overlooking the longest natural sea beach in the world, our hotel
            promises an unforgettable experience for every guest.
          </p>
          <img
            src="https://i.ibb.co/d0nfwMQR/hotel-view.jpg"
            alt="Hotel view"
            className="rounded-lg shadow-md w-full h-76 lg:h-[550px] object-cover"
          />
          <p>
            Established in 2010, "Lodgify-Modern hotel booking" booking is renowned for its warm
            hospitality, world-class facilities, and breathtaking views of the
            Bay of Bengal. Whether you’re here for a family vacation, a romantic
            escape, or a business trip, we ensure that your stay is exceptional
            in every way.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
          <p>
            Our mission is to redefine the standards of luxury and comfort in
            Bangladesh’s hospitality industry. We aim to provide an authentic
            Cox’s Bazar experience that blends traditional warmth with modern
            amenities.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Our Services</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Luxurious sea-view rooms and suites</li>
            <li>24/7 room service and concierge assistance</li>
            <li>Rooftop swimming pool overlooking the sea</li>
            <li>
              Multi-cuisine restaurant serving fresh seafood and continental
              dishes
            </li>
            <li>Spa, fitness center, and kids’ play area</li>
            <li>Event and conference facilities</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6">Why Choose Us?</h2>
          <p>
            Our guests choose "Lodgify-Modern hotel booking" booking because of our perfect
            location near Kolatoli Beach, personalized services, and dedication
            to quality. We believe in creating memories that last a lifetime.
          </p>
          <img
            src="https://i.ibb.co/n838yBBP/hotel-lobby.jpg"
            alt="Hotel lobby"
            className="rounded-lg shadow-md w-full h-76 lg:h-[550px] object-cover"
          />
          <h2 className="text-2xl font-semibold mt-6">Our Location</h2>
          <p>
            "Lodgify-Modern hotel booking" booking is conveniently located on the Marine Drive
            Road, just 5 minutes from Cox’s Bazar Airport and within walking
            distance of the beach. Whether you want to explore the vibrant local
            markets or relax by the sea, everything is close at hand.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
          <p>
            Have questions or want to book your stay? Feel free to reach out
            anytime. We look forward to welcoming you!
          </p>
          <div className="mt-4">
            <p className="flex items-center gap-2">
              <strong className="flex items-center gap-1">
                <MdEmail /> Email:
              </strong>{" "}
              info@lodgify.com
            </p>
            <p className="flex items-center gap-2">
              <strong className="flex items-center gap-1">
                <MdCall /> Phone:
              </strong>{" "}
              +8809611246246
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default AboutUs;
