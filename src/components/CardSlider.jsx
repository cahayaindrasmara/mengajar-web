import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import people1 from '../assets/people1.jpg'
import people2 from '../assets/people2.jpg'
import people3 from '../assets/people3.jpg'

const CardSlider = () => {
  const cards = [
    {
      name: "Sri Ningsih",
      description:
        "Email: sriningsih@gmail.com, Pengalaman: 5 tahun",
      img: people1,
    },
    {
      name: "Rendra Agustin",
      description: 
      "Email: rendra@gmail.com, Pengalaman: 3 tahun",
      img: people2,
    },
    {
      name: "Hendra Gunawan",
      description: 
      "Email: hendra@gmail.com, Pengalaman: 5 tahun",
      img: people3,
    },
    {
      name: "Lidyawati",
      description: 
      "Email: lidya@gmail.com, Pengalaman: 4 tahun",
      img: people1,
    },
    {
      name: "Bagas Kurniawan",
      description: 
      "Email: bagas@gmail.com, Pengalaman: 3 tahun",
      img: people2,
    },
    {
      name: "Rudi Hermawan",
      description: 
      "Email: rudi@gmail.com, Pengalaman: 3 tahun",
      img: people3,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Judul */}
      <h2 className="text-3xl font-bold text-green-600 text-center mb-4">
        Our <span className="text-gray-800">Tutors</span>
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Berikut merupakan beberapa kursus atau materi yang dapat dipelajari,
        pilih dan tentukan kursusmu agar dapat menjadi lebih cerdas dan kreatif
      </p>

      {/* Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="bg-white border-[2px] border-green-500 rounded-2xl shadow-md overflow-hidden">
              <div className="relative">
                <div className="h-40 w-40 mx-auto mt-6 relative">
                  <img
                    src={card.img}
                    alt={card.name}
                    className="h-full w-full rounded-full border-4 border-green-500 object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-green-500 rounded-t-2xl z-[-1]"></div>
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800">{card.name}</h2>
                <p className="text-sm text-gray-500 mt-2">{card.description}</p>
                {/* <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600 transition">
                  View More
                </button> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
