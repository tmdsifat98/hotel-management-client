import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios("https://assignment-11-server-beige-seven.vercel.app/photos")
      .then((res) => {
        setPhotos(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="w-11/12 md:w-3/4 lg:w-5/6 mx-auto px-4 my-6">
      <h2 className="text-6xl font-playfair font-bold text-center dark:text-white">
        Lodgify Gallery
      </h2>
      <p className="text-center text-gray-500 dark:text-gray-300 mb-10 mt-5">All the images sent by our guests</p>
      {loading ? (
        <Loader h="true" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {photos.map((photo, i) => (
            <div
              key={photo._id}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="group relative overflow-hidden rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer"
            >
              <img
                src={photo.image}
                alt={photo.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-300">
                View Photo
              </div>
            </div>
          ))}
        </div>
      )}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={photos.map((photo) => ({ src: photo.image }))}
      />
    </section>
  );
};

export default Gallery;
