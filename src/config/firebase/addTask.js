import { updateCurrentUser } from "firebase/auth";
import { db } from "./index.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await addDoc(collection(db, "Tutors"), {
            uploadLink: uploadLink,
            uploadMater1: uploadMater1,
            uploadMateri2: uploadMateri2,
            uploadMateri3: uploadMateri3,
            uploadMateri4: uploadMateri4,
        })
        onclose()
    } catch (error) {
        alert("error")
    }
}