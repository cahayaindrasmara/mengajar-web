// src/pages/TutorAccount.js
import React, { useState } from "react";

const TutorAccount = () => {
  // State untuk mengelola form input dan data kelas
  const [subjects, setSubjects] = useState([
    { id: 1, name: "Matematika", videoLink: "", assignmentLink: "", studentsEnrolled: 30, studentsCompleted: 20 },
    { id: 2, name: "Fisika", videoLink: "", assignmentLink: "", studentsEnrolled: 25, studentsCompleted: 15 },
    { id: 3, name: "Kimia", videoLink: "", assignmentLink: "", studentsEnrolled: 28, studentsCompleted: 18 }
  ]);

  // Fungsi untuk memperbarui link video atau tugas
  const handleLinkChange = (e, subjectId, type) => {
    const updatedSubjects = subjects.map((subject) =>
      subject.id === subjectId
        ? { ...subject, [type]: e.target.value }
        : subject
    );
    setSubjects(updatedSubjects);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
          Akun Tutor
        </h1>

        {/* Daftar Mata Pelajaran */}
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-white p-6 rounded-lg shadow-md mb-6"
          >
            <h2 className="text-2xl font-semibold text-gray-700">{subject.name}</h2>

            <div className="mt-4">
              <div className="mb-4">
                <label
                  htmlFor={`videoLink-${subject.id}`}
                  className="block text-sm font-medium text-gray-600"
                >
                  Link Video
                </label>
                <input
                  type="url"
                  id={`videoLink-${subject.id}`}
                  value={subject.videoLink}
                  onChange={(e) => handleLinkChange(e, subject.id, "videoLink")}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Masukkan link video"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor={`assignmentLink-${subject.id}`}
                  className="block text-sm font-medium text-gray-600"
                >
                  Link Assignment
                </label>
                <input
                  type="url"
                  id={`assignmentLink-${subject.id}`}
                  value={subject.assignmentLink}
                  onChange={(e) => handleLinkChange(e, subject.id, "assignmentLink")}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Masukkan link tugas"
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600">
                <strong>{subject.studentsEnrolled}</strong> siswa mengambil kelas ini.
              </p>
              <p className="text-sm text-gray-600">
                <strong>{subject.studentsCompleted}</strong> siswa telah mengerjakan tugas.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorAccount;
