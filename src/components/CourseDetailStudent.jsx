import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import noInput from "../assets/belum-input.png";

const CourseDetailsStudent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { course } = location.state || {}; // Ambil data course dari state
  const [materi, setMateri] = useState([]);
  const [loading, setLoading] = useState(true); // Status loading

  useEffect(() => {
    const fetchMateri = async () => {
      if (!course || !course.title || !course.tutorName) {
        console.error("Data course tidak lengkap");
        setLoading(false); // Hentikan loading jika data tidak lengkap
        return;
      }

      try {
        // Query data berdasarkan nama tutor dan mata pelajaran
        const tutorsQuery = query(
          collection(db, "Tutors"),
          where("username", "==", course.tutorName)
        );
        const tutorsSnapshot = await getDocs(tutorsQuery);

        const materiList = [];
        tutorsSnapshot.forEach((doc) => {
          const tutorData = doc.data();
          const materi = (tutorData.materi || []).filter(
            (item) => item.name === course.title // Filter berdasarkan nama pelajaran
          );
          materiList.push(...materi);
        });

        setMateri(materiList);
      } catch (error) {
        console.error("Error fetching materi:", error);
      } finally {
        setLoading(false); // Selesai loading
      }
    };

    fetchMateri();
  }, [course]);

  // Fungsi untuk menangani klik pada PDF
  const handlePdfClick = (url) => {
    if (url) {
      window.open(url, "_blank"); // Buka PDF di tab baru
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!course) {
    return <div>Data course tidak tersedia.</div>;
  }

  return (
    <div className="p-6">
      <button onClick={() => navigate(-1)} className="px-4 py-2 bg-green-500 text-white rounded-lg shadow mb-4 hover:bg-white border-2 border-green-500 hover:text-green-500">
        &larr; Back
      </button>
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

      <div className="space-y-4">
        {materi.length > 0 ? (
          materi.map((item, index) => (
            <div key={index} className="mb-6">
              {/* Tampilkan video */}
              <h2 className="text-xl font-semibold">Video:</h2>
              <iframe
                className="w-full h-64"
                src={item.videoLink}
                title={`Video ${index + 1}`}
                allowFullScreen
              ></iframe>

              {/* Tampilkan materi dalam bentuk PDF */}
              <h2 className="text-xl font-semibold mt-4">Materi Bacaan:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                {Array.from({ length: 5 }, (_, i) => i + 1) // Menampilkan hingga 5 materi
                  .map((num) => {
                    const key = `uploadMateri${num}`;
                    if (item[key]) {
                      return (
                        <div
                          key={key}
                          onClick={() => handlePdfClick(item[key])}
                          className="cursor-pointer bg-green-500 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                          <div className="text-center">
                            <h3 className="text-lg font-semibold text-white">
                              Materi {num}
                            </h3>
                            <p className="text-sm text-black">
                              Klik untuk melihat PDF
                            </p>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center h-40 mt-20">
            <div>
              <img src={noInput} alt="belum masukan input" className="w-[300px] h-[300px] object-contain" />
            </div>
            <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg text-center">
              <p>Belum ada materi yang tersedia.</p>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetailsStudent;
