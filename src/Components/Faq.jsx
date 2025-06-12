import axios from "axios";
import React, { useEffect, useState } from "react";

const Faq = () => {
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/faq").then((res) => setFaq(res.data));
  }, []);
  return (
    <div className="w-11/12 md:w-4/5 lg:w-7/12 mx-auto">
      <h1 className="text-5xl md:text-6xl font-playfair text-center font-semibold mb-10">
        Frequently asked Question
      </h1>
      {faq.map((f) => (
        <div
          key={f.id}
          className="collapse mb-1 collapse-plus bg-base-100 border border-base-300"
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold dark:bg-gray-800">
            {f.question}
          </div>
          <div className="collapse-content text-sm dark:bg-gray-800">
            {f.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
