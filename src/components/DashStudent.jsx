import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore"; // Import Firestore
import { db } from "../config/firebase"; // Import konfigurasi Firebase
import sainsImage from '../assets/sains.jpeg';
import englishImage from '../assets/english.jpeg';
import mtkImage from '../assets/mtk.png';
import lessonIcon from '../assets/icon-lesson.png';
import durationIcon from '../assets/duration-icon.png';

const DashboardStudent = ({ onCourseSelect }) => {
  // State untuk menyimpan data mata pelajaran
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  // Fungsi untuk mengambil data dari Firestore
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const tutorsSnapshot = await getDocs(collection(db, "Tutors"));
        const tutorsData = tutorsSnapshot.docs.map((doc) => doc.data());

        const courses = tutorsData.flatMap((tutor) => 
            (tutor.subjects || []).map((subject) => ({
              title: subject,
              tutorName: tutor.username,
              lessons: 4,
              duration: 2,
            }))
          );
        console.log("Courses: ",courses);

        setCourses(courses);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };

    fetchCourses();
  }, []);

  // Navigasi ke detail siswa berdasarkan ID course
  const handleDashStudentClick = (course) => {
    navigate(`/detail-siswa/${course.id}`, { state: { course } });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Navbar />
      <div className="mt-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Our Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => handleDashStudentClick(course)}
              className="cursor-pointer"
            >
              <CourseCard
                // key={course.id}
                title={course.title}
                tutorName={course.tutorName}
                lessons={course.lessons}
                duration={course.duration}
                image={
                  course.title === "Mathematics"
                    ? mtkImage
                    : course.title === "Science"
                    ? sainsImage
                    : englishImage
                }
                lessonIcon={lessonIcon}
                durationIcon={durationIcon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardStudent;
