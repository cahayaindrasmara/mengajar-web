// src/components/About.js
import React from "react";

const About = () => {
  return (
    <div className="md:pt-10 flex items-center justify-center h-screen px-4">
       <div className="max-w-5xl mx-auto p-6 py-16">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          About Us
        </h2>

        {/* Description */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700">
            Welcome to "Mengajar", a platform dedicated to empowering people
            through education. Our mission is to provide accessible, engaging,
            and high-quality learning experiences for students and tutors alike.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white p-8 border-2 border-green-500 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Our Mission</h3>
            <ul className="list-disc pl-6">
                <li>
                  Menyediakan materi pembelajaran yang interaktif dan komprehensif, didukung oleh tutor berpengalaman.
                </li>
                <li>
                  Membangun komunitas pembelajar yang saling mendukung dan berbagi pengetahuan.
                </li>
                <li>
                  Mendukung peserta dalam mengembangkan proyek nyata dan mendapatkan sertifikasi kompetensi.
                </li>
              </ul>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 border-2 border-green-500 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Our Vision</h3>
              <ul className="list-disc pl-6">
                <li>
                  Menjadi platform pembelajaran yang paling mudah diakses dan dipelajari bagi pemula di seluruh Indonesia.
                </li>
                <li>
                  Membudayakan minat belajar di kalangan generasi muda dan mempersiapkan mereka untuk menghadapi masa depan digital.
                </li>
                <li>
                  Memberdayakan individu untuk menciptakan inovasi teknologi yang bermanfaat bagi masyarakat.
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
     
  );
};

export default About;
