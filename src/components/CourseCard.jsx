import React from "react";

const CourseCard = ({ image, title, tutorName, lessons, duration, lessonIcon, durationIcon }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border hover:shadow-xl transition-shadow">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={title}
      />
      <div className="px-6 py-4">
        <p className="text-sm text-gray-500">Online Course</p>
        <h2 className="font-bold text-lg text-gray-800">{title}</h2>
        {tutorName &&(
          <p className="text-sm text-gray-600 mt-1">Tutor: <span className="font-medium">{tutorName}</span></p>
        )}
      </div>
      <div className="px-6 pb-4 flex justify-between text-sm text-gray-600">
        <div className="flex items-center">
          <img
            src={lessonIcon}
            alt="lessons icon"
            className="h-4 w-4 mr-1"
          />
          {lessons} Lessons
        </div>
        <div className="flex items-center">
          <img
            src={durationIcon}
            alt="duration icon"
            className="h-4 w-4 mr-1"
          />
          {duration} Jam
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
