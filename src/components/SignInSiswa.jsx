import React from "react"; //import react untuk membuat komponen berbasis fungsi
import { useNavigate } from "react-router-dom"; //hook dari react router untuk navigasi halaman
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../config/firebase"
import {setDoc, doc} from "firebase/firestore";

const SignInSiswa = () => { //komponen signin siswa
    // console.log("Firestore instance:", db);

    const navigate = useNavigate() //hook yang memungkinkan navigasi ke halalman lain menggunakan fungsi useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleLoginSiswaClick = () => {
        navigate('/login-siswa') //navigasi ke halaman /login-siswa ketika button submit di click
    }

    const handleChangeText = (e) => {
        // console.log(e);
        const {name, value} = e.target;
        console.log("Name:", name, "Value:", value);
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        console.log("data sebelum submit: ", formData);
        
        if (formData.email && formData.password ) {
            console.log("Form Data Submitted: ", formData);
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("User Created: ", user);
                
                setDoc(doc(db, "Students", user.uid), {
                    username: formData.username,
                    email: formData.email,
                });

                alert("Pendaftaran Berhasil!");
                navigate("/login-siswa");
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                console.log("Error Code: ", errorCode);
                console.log("Error Message: ", errorMessage);
                alert("Terjadi Kesalahan Saat Mendaftar");
            });
        } else {
            alert("Harap Lengkapi Semua Data!");
        }

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-500"> 
            {/* tinggi minimum layar adalah 100% layar, memastikan komponen selalu terpusat. mengatur konten agar berada ditengah secara vertikal dan horzintal. background berwarna hijau */}
            <div className="w-full max-w-md border border-green-400 bg-white p-6 rounded shadow-md">
                {/* membatasi lebar maksimum menjadi medium atau sebesar 768px. bingkai hijau disekitar berwarna hijau. bg warna putih dengan padding 6px untuk card. membuat bulat disekeliling dengan efek bayangan */}
                <div className="w-full">
                    {/* lebar maksimum full */}
                    <h2 className="text-green-500 text-2xl font-bold text-center mb-8">Create Account Siswa</h2>
                    {/* warna hijau, ukuran text besar(2xl), text tebal, posisi ditengah, margin bawah sebesar 8px */}
                    <form action="" onSubmit={handleSignInSubmit} className="space-y-4">
                        {/* menambahkan jarak vertikal antara elemen form */}
                        <input 
                            id="username"
                            name="username"
                            type="text"
                            value={formData.username}
                            onChange={handleChangeText}
                            placeholder="Enter Your Username"
                            className="w-full border border-green-400 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-green-300"
                            // mengisi lebar penuh card. bingkai hijau pada setiap input. padding horizontal (kiri kanan) sebesar 4px. pading vertikal (atas bawah) sebesar 2px. efek fokus berupa garis hijau terang
                        />
                        <input 
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChangeText}
                            placeholder="Enter Your Email"
                            className="w-full border border-green-400 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-green-300"
                        />
                        <input 
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChangeText}
                            placeholder="Enter Your Password"
                            className="w-full border border-green-400 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-green-300"
                        />
                        <button
                            // onClick={handleLoginSiswaClick} 
                            type="submit"
                            className="w-full bg-green-400 text-white py-2 rounded hover:bg-green-500"
                            // lembar tombol full. latar belakang warna hijau. text warna putih. pading vertikal (atas bawah) sebesar 2px. warna bg hijau ketika di hover
                        >
                        Submit
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        {/* text posisi ditengah, margin atas sebesar 4px */}
                        <span className="text-gray-500 text-sm">Already an account? </span>
                        {/* text berwarna abu-abu, ukuran text lebih kecil */}
                        <div onClick={handleLoginSiswaClick} className="text-green-500 text-sm font-bold hover:underline">Login</div>
                        {/* text berwarna hijau, ukuran text lebih kecil, text tebal, ketika di hover akan muncul garis bawah */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignInSiswa;