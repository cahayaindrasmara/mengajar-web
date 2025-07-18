import React from "react"; //import react untuk membangun komponen berbasis fungsi
import { useNavigate } from "react-router-dom"; //hook dari react router untuk navigasi halaman
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../config/firebase"
import { setDoc, doc } from "firebase/firestore";

const SignInTutor = () => { //komponen sign in tutor
    // console.log("Firestore instance:", db);

    const navigate = useNavigate() //hook yang memungkinkan navigasi ke halaman lain menggunakan fungsi useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        subjects: [],
    });

    const handleLoginTutorClick = () => {
        navigate('/login-tutor') // fungsi untuk ngehandle navigasi ke halaman /login-tutor
    }

    const handleChangeText = (e) => {
        const {name, value} = e.target;
        console.log("Name:", name, "Value:", value);
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubjectChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          subjects: checked
            ? [...prevState.subjects, value]
            : prevState.subjects.filter((subject) => subject !== value),
        }));
      };

    const handleSignInSubmit = (e) => {
        e.preventDefault();

        if (formData.email && formData.password) {
            console.log("Form Data Submitted: ", formData);
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                //signed up
                const user = userCredential.user;
                console.log("User Created: ", user);

                setDoc(doc(db, "Tutors", user.uid), {
                    username: formData.username,
                    email: formData.email,
                    subjects: formData.subjects,
                });

                alert("Pendaftaran Berhasil!");
                navigate("/login-tutor");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                console.log("Error Code: ", errorCode);
                console.log("Error Message: ", errorMessage);
                alert("Terjadi Kesalahan Saat Mendaftar");
            });
        } else {
            alert("Harap Lengkapi Semua Data!")
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-500">
            {/* tinggi minimum layar adalah 100%, memastikan komponen selalu terpusat. mengatur konten agar berada ditengah secara vertikal dan horizontal. background berwarna hijau */}
            <div className="w-full max-w-md border border-green-400 bg-white p-6 rounded shadow-md">
                {/* membatasi lebar maksimum menjadi medium atau sebesar 768 px. bingkai disekitar berwarna hijau. bg warna putih dengan paffing 6px. memmbuat bulat disekeliling dengan efek bayangan  */}
                <div className="w-full">
                    {/* lebar maksimum full */}
                    <h2 className="text-green-500 text-2xl font-bold text-center mb-8">Create Account Tutor</h2>
                    {/* warna hijau, ukuran text besar (2xl), text tebal, posisi ditengah, margin bawah sebesar 8px */}
                    <form action="" onSubmit={handleSignInSubmit} className="space-y-4">
                        {/* menambahkan jarak vertikal antara elemen form sebesar 4px */}
                        <input 
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChangeText}
                            type="text"
                            placeholder="Enter Your Username"
                            className="w-full border border-green-400 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-green-300"
                            // mengisi lebar penuh card. bingkai hijau pada setiap input. padding horizontal sebesar 4px. padding vertikal sebesar 2px. efek fokus berupa garis hijau terang
                        />
                        <input 
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChangeText}
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full border border-green-400 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-green-300"
                        />
                        <input 
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChangeText}
                            type="password"
                            placeholder="Enter Your Password"
                            className="w-full border border-green-400 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-green-300"
                        />
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Select Subjects</label>
                            <div className="space-y-2">
                                <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    value="Mathematics"
                                    onChange={handleSubjectChange}
                                    className="mr-2"
                                />
                                Mathematics
                                </label>
                                <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    value="Science"
                                    onChange={handleSubjectChange}
                                    className="mr-2"
                                />
                                Science
                                </label>
                                <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    value="English"
                                    onChange={handleSubjectChange}
                                    className="mr-2"
                                />
                                English
                                </label>
                            </div>
                        </div>
                        <button
                            // onClick={handleLoginTutorClick}
                            type="submit"
                            className="w-full bg-green-400 text-white py-2 rounded hover:bg-green-500"
                        >
                        Submit
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        {/* text berada di posisi tengah, margin atas sebesar 4px */}
                        <span className="text-gray-500 text-sm">Already an account? </span>
                        {/* text berwana abu-abu, ukuran text lebih kecil */}
                        <div onClick={handleLoginTutorClick} className="text-green-500 text-sm font-bold hover:underline">Login</div>
                        {/* text berwarna hijau, ukuran text lebih kecil, text tebal, ketika di hover akan muncul garis bawah */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignInTutor;