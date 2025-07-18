import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const TutorCRUD = () => {
  const [tutors, setTutors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subjects: "",
  });
  const [editId, setEditId] = useState(null);

  const tutorsCollection = collection(db, "tutors");

  // Fetch data dari Firestore
  const fetchTutors = async () => {
    const data = await getDocs(tutorsCollection);
    setTutors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchTutors();
  }, []);

  // Handle input form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Tambah data tutor
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addDoc(tutorsCollection, {
        ...formData,
        subjects: formData.subjects.split(",").map((s) => s.trim()), // Split mata pelajaran
        createdAt: new Date(),
      });
      fetchTutors();
      setFormData({ name: "", email: "", subjects: "" });
      alert("Tutor berhasil ditambahkan!");
    } catch (error) {
      console.error("Error adding tutor:", error);
    }
  };

  // Hapus data tutor
  const handleDelete = async (id) => {
    try {
      const tutorDoc = doc(db, "tutors", id);
      await deleteDoc(tutorDoc);
      fetchTutors();
      alert("Tutor berhasil dihapus!");
    } catch (error) {
      console.error("Error deleting tutor:", error);
    }
  };

  // Edit data tutor
  const handleEdit = (tutor) => {
    setEditId(tutor.id);
    setFormData({
      name: tutor.name,
      email: tutor.email,
      subjects: tutor.subjects.join(", "), // Gabungkan array jadi string
    });
  };

  // Update data tutor
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const tutorDoc = doc(db, "tutors", editId);
      await updateDoc(tutorDoc, {
        ...formData,
        subjects: formData.subjects.split(",").map((s) => s.trim()),
      });
      fetchTutors();
      setEditId(null);
      setFormData({ name: "", email: "", subjects: "" });
      alert("Tutor berhasil diperbarui!");
    } catch (error) {
      console.error("Error updating tutor:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">CRUD Tutor</h1>
      <form
        onSubmit={editId ? handleUpdate : handleAdd}
        className="space-y-4 mb-6"
      >
        <div className="flex flex-col">
          <label className="text-sm font-medium">Nama</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border rounded p-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border rounded p-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Mata Pelajaran</label>
          <input
            type="text"
            name="subjects"
            value={formData.subjects}
            onChange={handleInputChange}
            placeholder="Pisahkan dengan koma, contoh: Matematika, Fisika"
            className="border rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {editId ? "Perbarui Tutor" : "Tambah Tutor"}
        </button>
      </form>

      <table className="w-full text-left border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nama</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Mata Pelajaran</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {tutors.map((tutor) => (
            <tr key={tutor.id}>
              <td className="border px-4 py-2">{tutor.name}</td>
              <td className="border px-4 py-2">{tutor.email}</td>
              <td className="border px-4 py-2">
                {tutor.subjects.join(", ")}
              </td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  onClick={() => handleEdit(tutor)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(tutor.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TutorCRUD;
