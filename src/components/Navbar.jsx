import React, { useEffect, useState } from "react";
import profilImage from '../assets/user-login-2.png';
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase/index.js";
import { doc, getDoc } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth";

const Navbar = ({ role, name }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Loading...");

  useEffect(() => {
    const fetchUserData = async (uid) => {
      if (!uid) {
        console.error("UID is undefined")
        return;
      }
      try {
        const tutorDocRef = doc(db, "Tutors",uid);
        const tutorDocSnap = await getDoc(tutorDocRef);

        if (tutorDocSnap.exists()) {
          setUserName(tutorDocSnap.data().username);
          return;
        }
        const studentDocRef = doc (db, "Students", uid);
        const studentDocSnap = await getDoc(studentDocRef);

        if (studentDocSnap.exists()) {
          setUserName(studentDocSnap.data().username);
          return;
        }

        setUserName("Unknown");
      } catch (error) {
        alert("error")
        console.log("Error fetching user data: ", error);
        setUserName("Error");    
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserData(user.uid);
      } else {
        setUserName("Guest");
      }
     });

     return () => unsubscribe();
  }, []);

  const handleBackToLandingPage = () => {
    navigate('/')
  }

  return (
    <div className="bg-green-500 p-4 flex justify-between items-center rounded-lg shadow-md">
      <h1 className="text-white font-bold text-lg" onClick={handleBackToLandingPage}>Mengajar</h1>
      <div className="flex items-center text-white">
        <span className="mr-2"><b>{userName}</b></span>
        <img
          src = {profilImage}
          alt="User Icon"
          className="h-6 w-6"
        />
      </div>
    </div>
  );
};

export default Navbar;
