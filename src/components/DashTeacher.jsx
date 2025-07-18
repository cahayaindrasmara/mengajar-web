import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import sainsImage from '../assets/sains.jpeg';
import englishImage from '../assets/english.jpeg';
import mtkImage from '../assets/mtk.png';
import lessonIcon from '../assets/icon-lesson.png'
import durationIcon from '../assets/duration-icon.png'

const subjectsImages = [
  { name: "Mathematics", image: mtkImage },
  { name: "Science", image: sainsImage },
  { name: "English", image: englishImage },
];

const DashboardTeacher = ({on}) => {

  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const getTutorData = async () => {
        const docRef = doc (db, "Tutors", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const tutorSubjects = docSnap.data().subjects || []; 
          const subjectsWithImages = tutorSubjects.map(subject => {
            const subjectData = subjectsImages.find(item => item.name === subject);
            return subjectData  ? { name: subject, image: subjectData.image} : null;
          }).filter(subject => subject !== null);
          setSubjects(subjectsWithImages);
        } else { 
          console.log("No such document");
          alert ("No such document")
        }
      };

      getTutorData();
    } else {
      console.log("No user is logged in");
      alert("No user is logged in")
    }
  }, []);
  
  const handleDashTeacherClick = (course) => {
    navigate(`/detail-tutor/${course.id}`,{state: {course}})
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Navbar />
      <div className="mt-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Your Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              onClick={() => handleDashTeacherClick(subject)}
              className="cursor-pointer"
            >
              <CourseCard
                // key={index}
                image={subject.image}
                title={subject.name}
                lessons={4}
                duration={2}
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

export default DashboardTeacher;
