import React from "react";
import CourseCard from './CourseCard';  // Mengimpor CourseCard

// Menyertakan ikon lokal
import lessonIcon from '../assets/icon-lesson.png';
import durationIcon from '../assets/duration-icon.png';

const Dashboard = () => {
  return (
    <div className="course-list">
      <CourseCard
        image="https://example.com/course-image1.jpg"
        title="React for Beginners"
        lessons={10}
        duration={5}
        lessonIcon={lessonIcon}   
        durationIcon={durationIcon}  
      />
      <CourseCard
        image="https://example.com/course-image2.jpg"
        title="Advanced JavaScript"
        lessons={15}
        duration={8}
        lessonIcon={lessonIcon}
        durationIcon={durationIcon}
      />
      {/* Kamu bisa menambahkan lebih banyak CourseCard di sini */}
    </div>
  );
};

export default Dashboard;
