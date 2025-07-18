import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import sainsImage from '../assets/sains.jpeg';
import englishImage from '../assets/english.jpeg';
import mtkImage from '../assets/mtk.png';

// Data Dummy untuk Kursus
const courses = [
  {
    id: 1,
    title: "Matematika",
    image: mtkImage,
    lessons: "4 Lessons",
    duration: "3 Jam",
  },
  {
    id: 2,
    title: "Ilmu Pengetahuan Alam",
    image: sainsImage,
    lessons: "4 Lessons",
    duration: "3 Jam",
  },
  {
    id: 3,
    title: "Bahasa Inggris",
    image: englishImage,
    lessons: "4 Lessons",
    duration: "3 Jam",
  },
  {
    id: 4,
    title: "Sejarah",
    image: "https://via.placeholder.com/300x200?text=HISTORY",
    lessons: "4 Lessons",
    duration: "3 Jam",
  },
];

const CourseSlider = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Judul */}
      <h2 className="text-3xl font-bold text-green-600 text-center mb-4">
        Our <span className="text-gray-800">Courses</span>
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
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="border-2 border-green-400 rounded-lg shadow-lg overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-500 text-sm mb-1">Online Course</p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-600 mt-4">
                  <div className="flex items-center gap-1">
                    <span>📚</span> {course.lessons}
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⏰</span> {course.duration}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CourseSlider;
