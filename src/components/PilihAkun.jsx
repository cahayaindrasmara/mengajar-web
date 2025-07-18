import React from "react"; //import react untuk membuat komponen berbasis fungsi
import { useNavigate } from "react-router-dom"; //hook dari react router untuk navigasi ke halama lain
import studentImage from "../assets/profile-student.png";
import tutorImage from "../assets/profile-teacher.png";

const PilihAkun = () => { //komponen pilih akun
  const navigate = useNavigate(); //hook yang memungkinkan navigasi ke halaman lain menggunakan fungsi useNavigate()

  const handleLoginTutorClick = () => {
    navigate('/login-tutor') //fungsi untuk menghandle navigasi ke halaman /login-tutor
  }

  const handleLoginSiswaClick = () => {
    navigate('/login-siswa') //fungsi untuk menghandle navigasi ke halaman /login-siswa
  }

  const handleBackToLandingPage = () => {
    navigate('/') //fungsi untuk menghandle navigasi ke halama awal (/)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* tinggi minimum layar adalah 100% layar, untuk memastikan komponen selalu terpusat. latar belakang berwarna abu-abu */}
      {/* Header */}
      <div className="bg-green-500 text-white py-4 text-center">
        {/* latar belakang berwarna hijau. text berwarna putih. memberikan padding vertikal sebesar 4px. text berada di posisi tengah */}
        <h1 className="text-3xl font-bold" onClick={handleBackToLandingPage}>Mengajar</h1>
        {/* ukuran text besar (3xl). text tebal */}
      </div>

      {/* Title */}
      <div className="text-center my-8">
        {/* teks berada di posisi tengah, memberikan margin vertikal sebesar 8px */}
        <h2 className="text-2xl font-bold text-green-600">
          {/* ukuran text besar(2xl). text tebal. text berwarna hijau */}
          Pilih Tipe Akun
        </h2>
      </div>

      {/* Options */}
      <div className="flex flex-col items-center gap-8 mx-10 my-20">
        {/* membuat container div menjadi flex container, membuat elemen - elemen didalam nya disusun secara vertikal. elemen tersebut akan rata ditengah secara horizontal. memberikan jarak 32px(2rem) diantara setiap elemen */}
        {/* Card Untuk Tutor */}
        <div onClick={handleLoginTutorClick} className="flex items-center w-10/12 md:w-2/3 p-4 border-2 border-green-400 rounded-lg shadow-md">
        {/* membuat container div menjafi flex container, elemen tersebut akan rata ditengah secara horizontal, menentukan lebar sebesar 10/12 dari element parent, pada layar dengan ukuran lebar medium(768px) keatas akan di atur menjadi 2/3. memberikan padding sebesar 4px. menambahkan garis di sekeliling dengan ketebelan 2px. latar belakang berwarna hijau. memberikan lengkungan besar disetiap sudut. menambahkan efek bayangan medium  */}
          {/* Icon */}
            <img src={tutorImage} alt="logo tutor" className="w-20 h-20"/>
          {/* Content */}
          <div className="ml-4">
            {/* memberikan margin kiri sebesar 4px */}
            <h3 className="text-lg font-bold text-green-600">Untuk Tutor</h3>
            {/* ukuran teks besar, teks tebal, teks berwarna hijau */}
            <p className="text-gray-600"> 
              {/* text berwarna abu-abu */}
              Tutor dapat melihat jadwal mengajar
            </p>
          </div>
        </div>

        {/* Card Untuk Siswa */}
        <div onClick={handleLoginSiswaClick} className="flex items-center w-10/12 md:w-2/3 p-4 border-2 border-green-400 rounded-lg shadow-md">
          {/* Icon */}
            <img src={studentImage} alt="logo student" className="w-20 h-20"/>
          {/* Content */}
          <div className="ml-4">
            <h3 className="text-lg font-bold text-green-600">Untuk Siswa</h3>
            <p className="text-gray-600">
              Optimalkan Kegiatan KBM dengan video pembelajaran yang menarik
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PilihAkun;
