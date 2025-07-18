// import React from "react";
// import Navbar from "./Navbar";
// import CourseCard from "./CourseCard";
// import { useNavigate } from "react-router-dom";
// import sainsImage from '../assets/sains.jpeg';
// import englishImage from '../assets/english.jpeg';
// import mtkImage from '../assets/mtk.png';
// import lessonIcon from '../assets/icon-lesson.png'
// import durationIcon from '../assets/duration-icon.png'

// const DashboardStudent = ({ onCourseSelect }) => {
//   const courses = [
//     {
//       id: 1,
//       image: mtkImage,
//       title: "Matematika",
//       lessons: 12,
//       duration: 36,
//     },
//     {
//       id: 2,
//       image: sainsImage,
//       title: "Ilmu Pengetahuan Alam",
//       lessons: 12,
//       duration: 36,
//     },
//     {
//       id: 3,
//       image: englishImage,
//       title: "Bahasa Inggris",
//       lessons: 12,
//       duration: 36,
//     },
//     {
//       id: 4,
//       image: mtkImage,
//       title: "Matematika",
//       lessons: 12,
//       duration: 36,
//     },
//     {
//       id: 5,
//       image: sainsImage,
//       title: "Ilmu Pengetahuan Alam",
//       lessons: 12,
//       duration: 36,
//     },
//     {
//       id: 6,
//       image: englishImage,
//       title: "Bahasa Inggris",
//       lessons: 12,
//       duration: 36,
//     },
//   ];

//   const navigate = useNavigate();

//   const handleDashStudentClick = (course) => {
//     navigate(`/detail-siswa/${course.id}`,{state: {course}})
//   }
  
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <Navbar/>
//       <div className="mt-6">
//         <h1 className="text-2xl font-bold mb-4 text-center">Our Courses</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               onClick={() => handleDashStudentClick(course)}
//               className="cursor-pointer"
//             >
//               <CourseCard
//                 key={course.id}
//                 image={course.image}
//                 title={course.title}
//                 lessons={course.lessons}
//                 duration={course.duration}
//                 lessonIcon={lessonIcon}
//                 durationIcon={durationIcon}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardStudent;


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CourseDetailsStudent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { course } = location.state || {}; // Ambil data course dari state

  if (!course) {
    return <div>Loading...</div>; // Atau pesan error lainnya
  }

  const handlePdfClick = (pdfUrl) => {
    window.open(pdfUrl, "_blank"); // Membuka PDF di tab baru
  };

  // URLs untuk file PDF (gantilah dengan URL atau path yang sesuai)
  const pdfs = [
    { title: "PDF 1", url: "/path/to/pdf1.pdf" },
    { title: "PDF 2", url: "/path/to/pdf2.pdf" },
    { title: "PDF 3", url: "/path/to/pdf3.pdf" },
    { title: "PDF 4", url: "/path/to/pdf4.pdf" },
  ];

  return (
    <div className="p-6">
      <button onClick={() => navigate(-1)} className="text-green-500 mb-4">
        &larr; Back
      </button>
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Video:</h2>
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/_uQrJ0TkZlc"
            title="Course Video"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Materi Bacaan:</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            tincidunt.
          </p>
        </div>
        
        {/* Menampilkan 4 kartu PDF */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {pdfs.map((pdf, index) => (
            <div
              key={index}
              onClick={() => handlePdfClick(pdf.url)}
              className="cursor-pointer bg-green-500 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white">{pdf.title}</h3>
                <p className="text-sm text-black">Klik untuk melihat PDF</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsStudent;
