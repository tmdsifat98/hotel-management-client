import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios("http://localhost:3000/faq").then(
      (res) => {
        setFaqs(res.data);
        setLoading(false);
      }
    );
  }, []);
  return (
    <div className="w-11/12 md:w-4/5 lg:w-7/12 mx-auto">
      <h1 className="text-5xl md:text-6xl font-playfair text-center font-semibold mb-10">
        Frequently asked Question
      </h1>
      {loading ? (
        <Loader h="true" />
      ) : (
        <div>
          {faqs.map((faq) => (
            <div
              key={faq._id}
              className="collapse mb-1 collapse-plus bg-base-100 border border-base-300"
            >
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold dark:bg-gray-800">
                {faq.question}
              </div>
              <div className="collapse-content text-sm dark:bg-gray-800">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Faq;
