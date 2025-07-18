import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const CourseDetailsTeacher = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { course } = location.state || {}; // Ambil data course dari state

  const [inputData, setInputData] = useState({
    videoLink: "",
    uploadMateri1: null,
    uploadMateri2: null,
    uploadMateri3: null,
    uploadMateri4: null,
  });

  const [materi, setMateri] = useState([]); // State untuk daftar materi

  const fetchMateri = async () => {
    const auth = getAuth();
    // const user = auth.currentUser;
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Tutors", user.uid);
          const docSnap = await getDoc(docRef);
    
          if (docSnap.exists()) {
            const data = docSnap.data();
            setMateri(data.materi || []);
          } else {
            console.log("Dokumen tidak ditemukan!");
          }
        } catch (error) {
          console.error("Error fetching materi:", error);
        }
      } else {
        alert("User tidak ditemukan!");
      }
    })
  };

  const handleChangeText = (e) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleFileChange = (e) => {
  //   const { name, files } = e.target;
  //   setInputData((prevState) => ({
  //     ...prevState,
  //     [name]: files[0],
  //   }));
  // };

  const handleSave = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert("User tidak ditemukan!");
      return;
    }

    try {
      const newData = {
        name: course.name,
        videoLink: inputData.videoLink,
        uploadMateri1: inputData.uploadMateri1,
        uploadMateri2: inputData.uploadMateri2,
        uploadMateri3: inputData.uploadMateri3,
        uploadMateri4: inputData.uploadMateri4,
      };

      const docRef = doc(db, "Tutors", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const existingMateri = docSnap.data().materi || [];
        await updateDoc(docRef, { materi: [...existingMateri, newData] });
      } else {
        await setDoc(docRef, { materi: [newData] });
      }

      alert("Data berhasil disimpan!");
      fetchMateri(); // Refresh daftar materi
      setInputData({
        videoLink: "",
        uploadMateri1: "",
        uploadMateri2: "",
        uploadMateri3: "",
        uploadMateri4: "",
      });
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    }
  };

  const deleteMateri = async (index) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert("User tidak ditemukan!");
      return;
    }

    try {
      const docRef = doc(db, "Tutors", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const existingMateri = docSnap.data().materi || [];
        const updatedMateri = existingMateri.filter((_, i) => i !== index);

        await updateDoc(docRef, { materi: updatedMateri });
        alert("Materi berhasil dihapus!");
        fetchMateri(); // Refresh daftar materi
      }
    } catch (error) {
      console.error("Error deleting materi:", error);
      alert("Terjadi kesalahan saat menghapus materi.");
    }
  };

  const updateMateri = async (index, updatedData) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert("User tidak ditemukan!");
      return;
    }

    try {
      const docRef = doc(db, "Tutors", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const existingMateri = docSnap.data().materi || [];
        const updatedMateri = existingMateri.map((item, i) =>
          i === index ? { ...item, ...updatedData } : item
        );

        await updateDoc(docRef, { materi: updatedMateri });
        alert("Materi berhasil diperbarui!");
        // fetchMateri(); // Refresh daftar materi
      }
    } catch (error) {
      console.error("Error updating materi:", error);
      alert("Terjadi kesalahan saat memperbarui materi.");
    }
  };

  const handleEdit = (index) => {

    // Setelah mengambil data lama, langsung update dari database
    updateMateri(index, inputData).then(() => {
      fetchMateri(); // Refresh daftar materi agar inputan mengikuti perubahan terbaru
      setInputData({
        videoLink: "",
        uploadMateri1: "",
        uploadMateri2: "",
        uploadMateri3: "",
        uploadMateri4: "",
      });
    });
  };
  

  useEffect(() => {
    fetchMateri();
  }, []);

  if (!course) {
    return <div>Loading...</div>; // Atau pesan error lainnya
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
      <button onClick={() => navigate(-1)} className="text-green-500 mb-4">
        &larr; Back
      </button>
      <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
      <form className="space-y-4" onSubmit={handleSave}>
        <div className="flex items-center space-x-4">
          <label className="block text-sm font-medium mb-2">Materi 1:</label>
          <input
            id="uploadMateri1"
            name="uploadMateri1"
            type="text"
            value={inputData.uploadMateri1}
            onChange={handleChangeText}
            className="block w-2/4 border-2 p-2 border-green-600 rounded"
          />
          <label className="block text-sm font-medium mb-2">Materi 2:</label>
          <input
            id="uploadMateri2"
            name="uploadMateri2"
            type="text"
            value={inputData.uploadMateri2}
            onChange={handleChangeText}
            className="block w-2/4 border-2 p-2 border-green-600 rounded"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="block text-sm font-medium mb-2">Materi 3:</label>
          <input
            id="uploadMateri3"
            name="uploadMateri3"
            type="text"
            value={inputData.uploadMateri3}
            onChange={handleChangeText}
            className="block w-2/4 border-2 p-2 border-green-600 rounded"
          />
          <label className="block text-sm font-medium mb-2">Materi 4:</label>
          <input
            id="uploadMateri4"
            name="uploadMateri4"
            type="text"
            value={inputData.uploadMateri4}
            onChange={handleChangeText}
            className="block w-2/4 border-2 p-2 border-green-600 rounded"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="block text-sm font-medium mb-2">Video:</label>
          <input
            id="videoLink"
            name="videoLink"
            type="text"
            value={inputData.videoLink}
            onChange={handleChangeText}
            className="block w-2/4 border-2 p-2 border-green-600 rounded"
          />
        </div>
        <div className="flex items-center justify-start space-x-4 mt-4">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Simpan
          </button>
        </div>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Daftar Materi</h2>
        {materi.map((item, index) => (
          <div key={index} className="border p-4 mb-2 rounded shadow">
            <p>Nama Materi: {item.name}</p>
            <p>Link Video: {item.videoLink}</p>
            <p>Materi 1: {item.uploadMateri1}</p>
            <p>Materi 2: {item.uploadMateri2}</p>
            <p>Materi 3: {item.uploadMateri3}</p>
            <p>Materi 4: {item.uploadMateri4}</p>
            <button
              onClick={() => deleteMateri(index)}
              className="bg-red-500 text-white px-2 py-1 rounded mr-2"
            >
              Hapus
            </button>
            <button
              onClick={() => handleEdit(index)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetailsTeacher;
