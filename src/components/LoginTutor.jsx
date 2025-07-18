// import teacherImage from '../assets/teacher.png'; 
import teacherImageOK from '../assets/login-tutor.jpg'; //import foto background bagian kiri
import React, { useState } from 'react'; //import react untuk membuat komponen berbasis fungsi
import { useNavigate } from 'react-router-dom'; //hook dari react router untuk navigasi halaman
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginTutor = () => { //komponen login tutor

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); //hook yang memungkinkann navigasi ke halaman lain menggunakan fungsi useNavigate()

  const handleSignInTutorClick = () => {
    navigate('/signin-tutor'); //navigasi ke halaman /signin-tutor ketika button signin di click
  }

  // const handleLoginTutorClick = () => {
  //   navigate('/dashboard-tutor'); //navigasi ke halaman /dashboard-tutor ketika button login di click
  // }

  const handleChangeText = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:value,
    }))
  }

  const handleLoginTutorSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;  // Ambil dari formData
  
    if (!email || !password) {
      alert("Email dan Password tidak boleh kosong!");
      return;
    }
  
    console.log("Login Data: ", { email, password });
  
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login success
        const user = userCredential.user;
        console.log("User logged in: ", user);
        alert("Login Berhasil!");
        navigate("/dashboard-tutor");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
  
        console.log("Error Code: ", errorCode);
        console.log("Error Message: ", errorMessage);
        alert("Login gagal. Periksa kembali email dan password anda!");
      })
  }

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div
              className="w-1/2 bg-green-400 flex justify-center items-center relative"
                style={{
                  backgroundImage: `url(${teacherImageOK})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
              <div className="absolute inset-0 bg-green-400 bg-opacity-50"></div>
              <div className="relative text-center z-10">
                <h1 className="text-white text-3xl font-bold">Hallo Tutor!</h1>
              </div>
            </div>

      {/* Right Side */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="w-3/4">
          <h2 className="text-green-500 text-2xl font-bold text-center mb-8">Login Tutor</h2>
          <form onSubmit={handleLoginTutorSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleChangeText}
              className="w-full border border-green-400 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-green-300"
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleChangeText}
              className="w-full border border-green-400 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-green-300"
            />
            <div className="text-right">
              <div className="text-green-500 text-sm hover:underline">
                Forget your password?
              </div>
            </div>
            <button
              // onClick={handleLoginTutorClick}
              type="submit"
              className="w-full bg-green-400 text-white py-2 rounded hover:bg-green-500"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-4">
            <span className="text-gray-500 text-sm">Don't have an account? </span>
            <div onClick={handleSignInTutorClick} className="text-green-500 text-sm font-bold hover:underline">
              Create account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginTutor;
